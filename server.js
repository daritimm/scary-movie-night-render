const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');
const mongoose = require('mongoose');
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');


//MIDDLEWARE
const app = express();
const s3 = new aws.S3({
    bucketName: 'funny-gif-bucket',
    region: 'eu-west-3',
    accessKeyId: 'AKIAIMYHD5PSOON5ISYA',
    secretAccessKey: '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'
})

app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//DEPLOY BUILD

app.use(express.static(path.join(__dirname, 'build')));


//FUNCTIONS

function capitalizeWord(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

function checkFileType(file, cb) {
    const fileTypes = /gif/;
    const extensionName = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if (extensionName) {
        return cb(null, true);
    } else {
        cb("Error: funny gifs only.");
    }
};


//MULTER SETUP
const upload = multer(
    {
        storage: multerS3({
            s3: s3,
            bucket: 'funny-gif-bucket',
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },

            key: function (req, file, cb) {
                fileName = file.originalname.replace(' ', '-');
                cb(null, fileName);
            }
        }),

        fileFilter: (req, file, cb) => {
            checkFileType(file, cb);
        }
    });



//MONGOOSE SETUP
const port = process.env.PORT || 5000;


let uri = "mongodb+srv://ScaryMovieNightAdmin:gto84hwjqqEOA2Tq@cluster0-sya2h.mongodb.net/ScaryMovieNight?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('error', err => {
    console.log('mongoose error:' + err);
});


let Schema = mongoose.Schema;

let movieSchema = new Schema({
    title: String,
    smn: String,
    rtc: String,
    mtc: String,
    imdb: String,
    comments: String,
    pictureUrl: [String]
}, {
    bufferCommands: false,
    autoCreate: false
});

let Movie = mongoose.model('Movie', movieSchema);
Movie.createCollection();



//GET REQUESTS

app.get('/database', (req, res) => {

    Movie.find()
        .then(movies => {
            let moviesArr = Object.values(movies);

            // console.log("GET /database MoviesArr is:")
            // console.log(moviesArr);

            res.send(moviesArr);
        })
        .catch(err => {
            res.send({ error: "Movie.find error on GET /database : " + err })
        })
});

app.get('/edit/:movieToEdit', (req, res) => {
    let searchQuery = { title: req.params.movieToEdit };

    Movie.findOne(searchQuery)
        .then(movie => {
            let movieArr = [];
            movieArr.push(movie);

            console.log("GET /edit movieArr is: ")
            console.log(movieArr);

            res.send(movieArr)
        })
        .catch(err => {
            res.status(500).send({ error: "Movie.findOne error on POST /database = " + err })
        });
});


//POST REQUESTS

app.post('/search', (req, res) => {
    let title = capitalizeWord(req.body.searchMovie);
    let year = req.body.year;
    let movieRequestURL = '';

    if (year != '') {
        movieRequestURL = 'http://www.omdbapi.com/?apikey=fdd65e82&t=' + title + '&y=' + year;
    }
    else {
        movieRequestURL = 'http://www.omdbapi.com/?apikey=fdd65e82&t=' + title;
    };

    console.log("Request URL is: " + movieRequestURL)

    request(movieRequestURL, (error, response, body) => {
        if (error) {
            console.log(error)
            res.redirect('/')
        };

        let data = JSON.parse(body);
        console.log("data from movie request: ", data)

        let titleData, yearData, imdbData, rtcData, mtcData, runtimeData;

        if (!data.Title) {
            return res.status(404).send('Sorry, cant find that');
        } else {
            titleData = data.Title
        };

        yearData = data.Year || 'N/A';

        if (!data.Ratings[0]) {
            imdbData = 'N/A'
        } else {
            imdbData = data.Ratings[0].Value
        };

        rtcData = data.Ratings[1] ? data.Ratings[1].Value : 'N/A';

        if (!data.Ratings[2]) {
            mtcData = 'N/A'
        } else {
            mtcData = data.Ratings[2].Value
        };

        runtimeData = data.Runtime || 'N/A';

        const searchedMovie = {
            title: titleData,
            year: yearData,
            imdb: imdbData,
            rtc: rtcData,
            mtc: mtcData,
            runtime: runtimeData
        }

        console.log(searchedMovie)

        res.send(searchedMovie);
    });
});


app.post('/upload', upload.single('funnygif'), (req, res) => {
    if (!req.file) {
        res.status(500).send({ error: "Please select an image!" });
    };

    console.log('For movie: ' + req.body.title)
    console.log('Uploading file: ', req.file.originalname.replace(" ", "-"))

    let url = 'https://funny-gif-bucket.s3.eu-west-3.amazonaws.com/' + req.file.originalname.replace(" ", "-")

    let query = { title: req.body.title }

    Movie.findOne(query)

        .then(updated => {
            if (updated.pictureUrl.includes(url)) {
                res.status(500).send({ error: "Picture already uploaded!" })
            }

            updated.pictureUrl.push(url)
            console.log("Updated pictureUrl: ", updated.pictureUrl)

            Movie.findOneAndUpdate(query, { pictureUrl: updated.pictureUrl })
                .then(movie => {
                    res.redirect('/gifs')
                    console.log('Movie Updated:')
                    console.log(movie)
                })
        })
        .catch(err => {
            res.status(500).send({ error: "Movie.findOne error on POST /upload : " + err })
        });
});


app.post('/edit/:title', async (req, res) => {
    console.log("POST /edit req.body is");
    console.log(req.body[0]._id)

    let query = {
        _id: req.body[0]._id
    }

    let update = {
        title: req.body[0].title,
        smn: req.body[0].smn,
        rtc: req.body[0].rtc,
        mtc: req.body[0].mtc,
        imdb: req.body[0].imdb,
        comments: req.body[0].comments
    };

    await Movie.findOneAndUpdate(query, update, { new: true })
        .then(movie => {
            console.log("Succesfully Updated");
            console.log(movie);
        })
        .then(() => res.redirect("/database"))
        .catch(err => {
            res.status(500).send({ error: "Movie.findOneAndUpdate error on POST /edit : " + err })
        });
});


app.post('/new', (req, res) => {
    console.log("POST /new req.body is");
    console.log(req.body[0])

    let newTitle = capitalizeWord(req.body[0].title)

    let newMovie = {
        title: newTitle,
        smn: req.body[0].smn,
        rtc: req.body[0].rtc,
        mtc: req.body[0].mtc,
        imdb: req.body[0].imdb,
        comments: req.body[0].comments
    };

    Movie.create(newMovie)
        .then(() => { console.log("New Movie Added") })
        .then(() => res.redirect('/database'))
        .catch(err => {
            res.status(500).send({ error: "Error adding newMovie POST /new : " + err })
        });
});

app.post('/delete', (req, res) => {
    let query = {
        _id: req.body[0]._id
    };

    Movie.findOneAndDelete(query)
        .then(() => { console.log("Movie succesfully deleted") })
        .then(() => res.redirect("/database"))
        .catch(err => {
            res.status(500).send({ error: "Movie.findOneAndDelete error on POST /delete : " + err })
        });
});



// LISTEN ON PORT

app.listen(port, () => console.log(`Server is listening on port ${port}`));



