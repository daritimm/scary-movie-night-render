(this.webpackJsonpsmntutor=this.webpackJsonpsmntutor||[]).push([[0],{46:function(e,t,n){e.exports=n.p+"static/media/bilbo.550c8d98.jpg"},47:function(e,t,n){e.exports=n(75)},75:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),l=n(41),o=n.n(l),c=n(14),s=n(28),u=n(3),m=n(1),d=n(4),h=n.n(d),p=n(8);function v(){return(v=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/database");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){var e=Object(a.a)(["\n  caption-side: top;\n  border: none;\n  border-collapse: collapse;\n  width: 100vw;\n  font-size: 2vw;\n\n\n  th, td {\n      border: none;\n  }\n\n  td {\n    padding: 10px 20px;\n  }\n\n  #comments {\n      text-align: left;\n  }\n\n  tbody tr {\n    :nth-of-type(odd) {\n      background-color: #efefef;\n    }\n    :nth-of-type(even) {\n      background-color: #fefefe;\n    }\n    :hover {\n      background-color: lightpink;\n    }\n  }\n  thead > tr {\n    background-color: #c2c2c2;\n  }\n  caption {\n    font-size: 1vw;\n    padding: 5px;\n    font-weight: bold;\n  }\n\n"]);return f=function(){return e},e}function b(){var e=Object(a.a)(["\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 100vw;\n        height: 100vw; \n        \n        position: relative;\n        top:0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        \n        margin: auto;\n\n        #submitButton {\n            margin: 15px;\n            width: 250px;\n            background-color: olivedrab;\n\n            :hover {\n                background-color: lightpink;\n            }\n        }\n"]);return b=function(){return e},e}var E=u.b.div(b()),g=u.b.table(f()),y=function(){var e=i.a.useState([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=i.a.useState("title"),l=Object(s.a)(r,2),o=l[0],u=(l[1],Object(m.f)());i.a.useEffect((function(){(function(){return v.apply(this,arguments)})().then(d).catch((function(e){return console.log(e)}))}));var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=Object(c.a)(e).sort((function(e,t){return t[o]>e[o]?-1:e[o]>t[o]?1:0}));a(t)};return i.a.createElement(E,null,i.a.createElement(g,null,i.a.createElement("caption",null,i.a.createElement("h1",null,"Movies We've Seen")),i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Movie Title"),i.a.createElement("th",null,"IMDB"),i.a.createElement("th",null,"RTC"),i.a.createElement("th",null,"MTC"),i.a.createElement("th",null,"SMN"),i.a.createElement("th",null,"Comments"))),i.a.createElement("tbody",null,n.map((function(e,t){return i.a.createElement("tr",{key:t,onClick:function(){return u.push("/edit/".concat(e.title))}},i.a.createElement("td",null,e.title),i.a.createElement("td",null,e.imdb),i.a.createElement("td",null,e.rtc),i.a.createElement("td",null,e.mtc),i.a.createElement("td",null,e.smn),i.a.createElement("td",null,e.comments))})))),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return u.push("/new")}},i.a.createElement("h2",null,"Add New Movie")),i.a.createElement("br",null),i.a.createElement("a",{href:"/"},i.a.createElement("i",null,"Return To Main Page")))},x=n(46),k=n.n(x);function w(){var e=Object(a.a)(["\n\n    box-sizing: border-box;\n    width: 100%;\n    height: 150px;\n    padding: 10px;\n    background-image: url(",");\n    background-repeat: round repeat-x;\n    background-size: contain;\n"]);return w=function(){return e},e}u.b.div(w(),k.a);var S=n(12);function C(){var e=Object(a.a)(["\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: lightgoldenrodyellow;\n    box-sizing: border-box;\n    width: 100vw;\n    height: 25%;\n    flex-wrap: no-wrap;\n    /* padding: 20px; */\n\n    .break {\n    flex-basis: 100%;\n    height: 0;\n    }\n\n    .title {\n        font-size: 2.5vw;\n    }\n\n    .pageLinks {\n        display: flex;\n        flex-direction: row;\n        width: auto;\n        font-size: 2vw;\n    }\n\n"]);return C=function(){return e},e}var M=u.b.div(C()),O=function(){return i.a.createElement(M,null,i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,i.a.createElement(S.b,{to:"/"},"Scary Movie Night is Back!")),i.a.createElement("div",{className:"break"})),i.a.createElement("div",{className:"pageLinks"},i.a.createElement("h3",null," - ",i.a.createElement(S.b,{to:"/upload"},"Upload a funny Gif")," - "),i.a.createElement("h3",null," - ",i.a.createElement(S.b,{to:"/gifs"}," Look at funny Gifs")," - "),i.a.createElement("h3",null," - ",i.a.createElement(S.b,{to:"/database"},"Movies We've Seen")," - ")))},j=n(9),N=n(10),I=n(11),D=n(13),T=n(15),L=n.n(T);function B(){var e=Object(a.a)(["\n    text-align: center;\n    width: 60vw;\n    height: 25vw;\n    \n    position: relative;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n      \n    margin: auto;\n\n    font-size: calc(1em + 1vw);\n"]);return B=function(){return e},e}var U=u.b.div(B()),R=function(e){Object(D.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).callServerForDatabase=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/database");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)}))),a.handleUpload=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.target.files[0]),a.setState({uploadedFile:t.target.files[0],loaded:0}),t.preventDefault();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onClickHandler=function(){var e=new FormData;e.append("file",a.state.uploadedFile),L.a.post("http:localhost:3000/upload",e,{}).then((function(e){console.log(e.statusText)}))},a.state={uploadedFile:null,loaded:0,listOfMovies:[{comments:String,imdb:String,mtc:String,rtc:String,smn:String,title:String,__v:Number,_id:String}]},a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.callServerForDatabase().then((function(t){return e.setState({listOfMovies:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return i.a.createElement(U,null,i.a.createElement("p",null,"Upload a funny Gif for one of the Movies we've seen!"),i.a.createElement("br",null),i.a.createElement("form",{method:"POST",action:"/upload",encType:"multipart/form-data"},i.a.createElement("label",null,"For Which Movie?  "),i.a.createElement("select",{name:"title"},this.state.listOfMovies.map((function(e){return i.a.createElement("option",{value:e.title},e.title)}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("input",{type:"file",name:"funnygif",onChange:this.handleUpload}),i.a.createElement("button",{type:"submit",onClick:this.onClickHandler},"Upload GIF")),i.a.createElement("br",null),i.a.createElement("a",{href:"/"},i.a.createElement("i",null,"Return To Main Page")))}}]),n}(r.Component);function F(){var e=Object(a.a)(["\n  caption-side: top;\n  border: none;\n  border-radius: 10px;\n  border-collapse: collapse;\n  background-color: linen;\n\n  th, td {\n      border: none;\n      margin: 15px;\n  }\n\n  td {\n    padding: 10px 20px;\n  }\n\n  thead > tr {\n    background-color: #c2c2c2;\n  }\n  caption {\n    font-size: 0.9em;\n    padding: 5px;\n    font-weight: bold;\n  }\n  "]);return F=function(){return e},e}function z(){var e=Object(a.a)(["\n    text-align: center;  \n    margin: 2px;\n    min-height: 55%;\n    padding-bottom: 150px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex-wrap: wrap;\n\n    .response {\n      width: 100vw;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .notFound {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: orangered;\n        border-radius: 20px;\n        width: 250px;\n    }\n\n    .videoContainer {\n      height: 200px;\n      width: auto;\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      padding: 2px;\n      margin: 2px;\n    }\n\n    .video {\n      flex-direction: row;\n      width: 355px;\n      height: 200px;\n      padding: 2px;\n      margin: 2px;\n    }\n\n    .trailerButton {\n      height: 200px;\n      width: 50px;\n      font-size: 25px;\n      background: powderblue;\n      border: 0px;\n      padding: 2px;\n    }\n    \n\n    /* .trailerButton:hover {\n        background: orangered;\n        opacity: 0.8;\n      }\n    } */\n\n\n    .compareButton {\n      font-size: 15px;\n    }\n\n    .compareList {\n      justify-content: left;\n      align-items: left;\n      width: 200px;\n      height: auto;\n      text-align: left;\n      border: 1px solid black;\n      border-radius: 20px;\n    }\n\n    .hrefButton {\n      background: darkred;\n      opacity: 0.8;\n      color: white;\n      width: 100px;\n      height: 25px;\n      text-align: center;\n    }\n    \n    .oneMoreMovie {\n      font-size: 11px;\n    }\n"]);return z=function(){return e},e}var P=u.b.div(z()),_=u.b.table(F()),A=function(e){return i.a.createElement("div",{className:"notFound"},i.a.createElement("h2",null,e.message))},Y=function(e){Object(D.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchMovie:"",responseToSearchMovie:[],year:"",error:void 0,youtubeData:{items:[{id:{videoId:""}},{id:{videoId:""}},{id:{videoId:""}},{id:{videoId:""}},{id:{videoId:""}}]},youtubeID:"",compareList:[],trailerList:[],compareCheck:!1},e.handleSubmit=function(){var t=Object(p.a)(h.a.mark((function t(n){var a,r,i,l,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMovie:e.state.searchMovie,year:e.state.year})});case 3:if(200!==(a=t.sent).status){t.next=16;break}return t.next=7,a.json();case 7:r=t.sent,(i=[]).push(r),e.setState({responseToSearchMovie:i,error:void 0}),l=e.state.responseToSearchMovie[0].year,o=e.state.searchMovie,e.getYoutubeAPIData(l,o),t.next=17;break;case 16:e.setState({responseToSearchMovie:[],error:"Movie Not Found"});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.KEY="AIzaSyCjGg8snYAxwfne_7CiAOS-KvoeD9zZkzw",e}return Object(N.a)(n,[{key:"getYoutubeAPIData",value:function(e,t){var n=this,a=encodeURIComponent(t)+"+"+encodeURIComponent(e)+"+trailer",r="https://www.googleapis.com/youtube/v3/search/?part=snippet&chart=mostPopular&key="+this.KEY+"&q="+a+"&maxResults=5";fetch(r).then((function(e){return e.json()})).then((function(e){n.setState({youtubeData:e,youtubeID:e.items[0].id.videoId})}))}},{key:"nextMovieTrailer",value:function(){var e=this.state.youtubeData.items,t=this.state.youtubeID;if(e[0].id.videoId===t)this.setState({youtubeID:e[1].id.videoId});else if(e[1].id.videoId===t)this.setState({youtubeID:e[2].id.videoId});else if(e[2].id.videoId===t)this.setState({youtubeID:e[3].id.videoId});else if(e[3].id.videoId===t)this.setState({youtubeID:e[4].id.videoId});else if(e[4].id.videoId===t)return}},{key:"previousMovieTrailer",value:function(){var e=this.state.youtubeData.items,t=this.state.youtubeID;if(e[4].id.videoId===t)this.setState({youtubeID:e[3].id.videoId});else if(e[3].id.videoId===t)this.setState({youtubeID:e[2].id.videoId});else if(e[2].id.videoId===t)this.setState({youtubeID:e[1].id.videoId});else if(e[1].id.videoId===t)this.setState({youtubeID:e[0].id.videoId});else if(e[0].id.videoId===t)return}},{key:"addToCompareList",value:function(){this.state.compareList.includes(this.state.responseToSearchMovie[0])?alert("This movie was already added to the compare list!"):(this.setState({compareList:[].concat(Object(c.a)(this.state.compareList),[this.state.responseToSearchMovie[0]])}),this.setState({trailerList:[].concat(Object(c.a)(this.state.trailerList),[this.state.youtubeID])}))}},{key:"CompareList",value:function(){return!1===this.state.compareCheck?i.a.createElement("div",{className:"compareList"},i.a.createElement("ul",null,this.state.compareList.map((function(e,t){return i.a.createElement("div",null,i.a.createElement("li",null,e.title))})))):void 0}},{key:"CompareListButton",value:function(){var e=this;return this.state.compareList.length<=1?i.a.createElement("div",{className:"oneMoreMovie"},i.a.createElement("i",null,"Add one more movie to compare!")):i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.setState({compareCheck:!0})}},"Compare"))}},{key:"renderSearchForm",value:function(){var e=this;return!1===this.state.compareCheck?i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("p",null,i.a.createElement("strong",null,"What Movie Shall We Watch?")),i.a.createElement("input",{type:"text",value:this.state.searchMovie,onChange:function(t){return e.setState({searchMovie:t.target.value})}}),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("i",null,"Year of Release (optional):")),i.a.createElement("input",{type:"number",value:this.state.year,onChange:function(t){return e.setState({year:t.target.value})}}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{type:"submit"},"Search")),i.a.createElement("br",null),i.a.createElement("div",{className:"response"},this.state.error&&i.a.createElement(A,{message:this.state.error}),this.state.responseToSearchMovie.map((function(e,t){return i.a.createElement(_,null,i.a.createElement("thead",null,i.a.createElement("tr",{key:"head-".concat(t)},i.a.createElement("th",{"data-key":"head-title"},"Movie Title"),i.a.createElement("th",{"data-key":"head-imdb"},"IMDB"),i.a.createElement("th",{"data-key":"head-rtc"},"Rotten Tomatoes"),i.a.createElement("th",{"data-key":"head-mtc"},"Metacritic"),i.a.createElement("th",{"data-key":"head-year"},"Year"),i.a.createElement("th",{"data-key":"head-runtime"},"Runtime"))),i.a.createElement("tbody",null,i.a.createElement("tr",{key:t},i.a.createElement("td",{"data-key":"Title"},e.title),i.a.createElement("td",{"data-key":"IMDB"},e.imdb),i.a.createElement("td",{"data-key":"RTC"},e.rtc),i.a.createElement("td",{"data-key":"MTC"},e.mtc),i.a.createElement("td",{"data-key":"Year"},e.year),i.a.createElement("td",{"data-key":"Runtime"},e.runtime))))})))):i.a.createElement("div",{className:"response"},this.state.error&&i.a.createElement(A,{message:this.state.error}),i.a.createElement(_,null,i.a.createElement("thead",null,i.a.createElement("tr",{key:"head-compare"},i.a.createElement("th",{"data-key":"head-title"},"Movie Title"),i.a.createElement("th",{"data-key":"head-imdb"},"IMDB"),i.a.createElement("th",{"data-key":"head-rtc"},"Rotten Tomatoes"),i.a.createElement("th",{"data-key":"head-mtc"},"Metacritic"),i.a.createElement("th",{"data-key":"head-year"},"Year"),i.a.createElement("th",{"data-key":"head-runtime"},"Runtime"))),i.a.createElement("tbody",null,this.state.compareList.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",{"data-key":"Title"},e.title),i.a.createElement("td",{"data-key":"IMDB"},e.imdb),i.a.createElement("td",{"data-key":"RTC"},e.rtc),i.a.createElement("td",{"data-key":"MTC"},e.mtc),i.a.createElement("td",{"data-key":"Year"},e.year),i.a.createElement("td",{"data-key":"Runtime"},e.runtime))})))),i.a.createElement("br",null),i.a.createElement("div",{className:"videoContainer"},this.state.trailerList.map((function(e,t){return i.a.createElement("div",{key:t,className:"video"},i.a.createElement("iframe",{title:e,width:"355",height:"200",src:"https://www.youtube.com/embed/".concat(e),allowFullScreen:!0}))}))),i.a.createElement("br",null),i.a.createElement("a",{href:"/"},i.a.createElement("i",null,"Return To Main Page")))}},{key:"renderMovieTrailer",value:function(){var e=this;return""===this.state.youtubeID||this.state.error||!0===this.state.compareCheck?void 0:i.a.createElement("div",null,i.a.createElement("i",null,"Not the trailer you're looking for? Click to scroll!"),i.a.createElement("div",{className:"videoContainer"},i.a.createElement("button",{className:"trailerButton",onClick:function(){return e.previousMovieTrailer()}},"<"),i.a.createElement("div",{className:"video"},i.a.createElement("iframe",{title:"trailer",width:"355",height:"200",src:"https://www.youtube.com/embed/".concat(this.state.youtubeID),allowFullScreen:!0})),i.a.createElement("button",{className:"trailerButton",onClick:function(){return e.nextMovieTrailer()}},">")),i.a.createElement("br",null),i.a.createElement("button",{className:"compareButton",onClick:function(){return e.addToCompareList()}},i.a.createElement("i",null,"Click to compare")))}},{key:"renderCompareList",value:function(){return 0===this.state.compareList.length||!0===this.state.compareCheck?void 0:i.a.createElement("div",null,this.CompareList(),this.CompareListButton())}},{key:"render",value:function(){return console.log(this.state.responseToSearchMovie),i.a.createElement(P,null,this.renderSearchForm(),i.a.createElement("br",null),this.renderMovieTrailer(),i.a.createElement("br",null),this.renderCompareList())}}]),n}(r.Component);function W(){var e=Object(a.a)(["\n    text-align: center;\n    width: 100vw;\n    height: 100vw;\n    \n    position: relative;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n      \n    margin: auto;\n\n    .gif {\n        width: 100vw;\n    }\n"]);return W=function(){return e},e}var G=u.b.div(W()),H=function(e){Object(D.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).callServerForDatabase=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/database");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,console.log("Response Body: ",n),200===t.status){e.next=9;break}throw Error(n.message);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)}))),a.state={listOfMovies:[{comments:String,imdb:String,mtc:String,rtc:String,smn:String,title:String,pictureUrl:String}],listOfUrls:[]},a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.callServerForDatabase().then((function(t){return e.setState({listOfMovies:t})})).catch((function(e){return console.log(e)}))}},{key:"createListOfUrls",value:function(){var e=[];return this.state.listOfMovies.map((function(t){for(var n=0;n<t.pictureUrl.length;n++)t.pictureUrl&&e.push(t.pictureUrl[n])})),e}},{key:"listOfMovies",value:function(){var e=this.createListOfUrls();return console.log("LOM: ",this.state.listOfMovies),console.log("LOU: ",this.state.listOfUrls),e.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("p",null,i.a.createElement("img",{src:e,alt:"This gif is actually hilarious",className:"gif"})))}))}},{key:"render",value:function(){return i.a.createElement(G,null,this.listOfMovies(),i.a.createElement("br",null),i.a.createElement("a",{href:"/"},i.a.createElement("i",null,"Return To Main Page")))}}]),n}(r.Component),J=n(17),K=n(22),q=n(16);function Z(){var e=Object(a.a)(["\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    \n    position: relative;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n\n    margin: auto;\n\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n\n    .container {\n        align-items: center;\n        height: 100%;\n    }\n\n    .inputrow {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        height: 50px;\n    }\n\n    .description {\n        text-align: center;\n        width: 200px;\n        align-items: center;\n    }\n\n    .input {\n        width: 200px;\n    }\n\n    #submitButton {\n        margin: 15px;\n    }\n"]);return Z=function(){return e},e}var Q=u.b.div(Z()),V=function(e){Object(D.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).callServerForDatabase=Object(p.a)(h.a.mark((function e(){var t,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,e.next=3,fetch("/edit/".concat(t.title));case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200===n.status){e.next=9;break}throw Error(r.message);case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)}))),a.handleUpdate=function(e){e.preventDefault(),L.a.post("/edit/".concat(a.state.movie.title),a.state.movie).then((function(){a.setState({edited:!0})}))},a.handleDelete=function(e){e.preventDefault(),L.a.post("/delete",a.state.movie).then((function(){a.setState({edited:!0})}))},a.state={movie:[{comments:"",imdb:"",mtc:"",rtc:"",smn:"",title:"",pictureUrl:"",__v:Number,_id:String}],edited:!1},a.handleChange=a.handleChange.bind(Object(q.a)(a)),a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.callServerForDatabase().then((function(t){return e.setState({movie:t})})).catch((function(e){return console.log(e)}))}},{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value,a=Object(c.a)(this.state.movie),r=Object(K.a)({},a[0],Object(J.a)({},t,n));a[0]=r,this.setState({movie:a})}},{key:"render",value:function(){var e=this;return this.state.edited?r.createElement(m.a,{to:"/database"}):r.createElement(Q,null,r.createElement("h2",null,"Update Movie Data"),this.state.movie.map((function(t,n){return r.createElement("div",{key:n,className:"container"},r.createElement("form",{action:"/edit/".concat(t.title,"?_method=PUT"),method:"PUT"},r.createElement("div",{className:"inputrow"},r.createElement("p",{className:"description"},"Movie Title",r.createElement("input",{className:"input",type:"text",value:t.title,onChange:e.handleChange,name:"title"}))),r.createElement("div",{className:"inputrow"},r.createElement("p",{className:"description"},"Rotten Tomatoes Score",r.createElement("input",{className:"input",type:"text",value:t.rtc,onChange:e.handleChange,name:"rtc"}))),r.createElement("div",{className:"inputrow"},r.createElement("p",{className:"description"},"Metacritic Score",r.createElement("input",{className:"input",type:"text",value:t.mtc,onChange:e.handleChange,name:"mtc"}))),r.createElement("div",{className:"inputrow"},r.createElement("p",{className:"description"},"IMDB Score",r.createElement("input",{className:"input",type:"text",value:t.imdb,onChange:e.handleChange,name:"imdb"}))),r.createElement("div",{className:"inputrow"},r.createElement("p",{className:"description"},"Scary Movie Night Score",r.createElement("input",{className:"input",type:"text",value:t.smn,onChange:e.handleChange,name:"smn"}))),r.createElement("div",{className:"inputrow"},r.createElement("p",{className:"description"},"Comments",r.createElement("input",{className:"input",type:"text",value:t.comments,onChange:e.handleChange,name:"comments"}))),r.createElement("div",{className:"hiddenRow"},r.createElement("input",{type:"hidden",value:t._id,name:"_id"})),r.createElement("button",{id:"submitButton",type:"submit",onClick:e.handleUpdate},r.createElement("h2",null,"Update Movie"))," or ",r.createElement("button",{id:"submitButton",type:"submit",onClick:e.handleDelete},r.createElement("h2",null,"Delete Movie"))))})),r.createElement("br",null),r.createElement("a",{href:"/"},r.createElement("i",null,"Return To Main Page")))}}]),n}(r.Component);function X(){var e=Object(a.a)(["\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    \n    position: relative;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n\n    margin: auto;\n\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n\n    .container {\n        align-items: center;\n        height: 100%;\n    }\n\n    .inputrow {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        height: 50px;\n    }\n\n    .description {\n        text-align: center;\n        width: 200px;\n        align-items: center;\n    }\n\n    .input {\n        width: 200px;\n    }\n\n    #submitButton {\n        margin: 15px;\n    }\n"]);return X=function(){return e},e}var $=u.b.div(X()),ee=function(e){Object(D.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log(a.state.movie),L.a.post("/new",a.state.movie).then((function(){a.setState({added:!0})}))},a.state={movie:[{comments:"",imdb:"",mtc:"",rtc:"",smn:"",title:""}],added:!1},a.handleChange=a.handleChange.bind(Object(q.a)(a)),a}return Object(N.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value,a=Object(c.a)(this.state.movie),r=Object(K.a)({},a[0],Object(J.a)({},t,n));a[0]=r,this.setState({movie:a})}},{key:"render",value:function(){var e=this;return this.state.added?i.a.createElement(m.a,{to:"/database"}):i.a.createElement($,null,i.a.createElement("h2",null,"Add Movie Data"),this.state.movie.map((function(t,n){return i.a.createElement("div",{key:n,className:"container"},i.a.createElement("form",{action:"/edit/".concat(t.title,"?_method=POST"),method:"POST"},i.a.createElement("div",{className:"inputrow"},i.a.createElement("p",{className:"description"},"Movie Title",i.a.createElement("input",{className:"input",type:"text",value:t.title,onChange:e.handleChange,name:"title"}))),i.a.createElement("div",{className:"inputrow"},i.a.createElement("p",{className:"description"},"Rotten Tomatoes Score",i.a.createElement("input",{className:"input",type:"text",value:t.rtc,onChange:e.handleChange,name:"rtc"}))),i.a.createElement("div",{className:"inputrow"},i.a.createElement("p",{className:"description"},"Metacritic Score",i.a.createElement("input",{className:"input",type:"text",value:t.mtc,onChange:e.handleChange,name:"mtc"}))),i.a.createElement("div",{className:"inputrow"},i.a.createElement("p",{className:"description"},"IMDB Score",i.a.createElement("input",{className:"input",type:"text",value:t.imdb,onChange:e.handleChange,name:"imdb"}))),i.a.createElement("div",{className:"inputrow"},i.a.createElement("p",{className:"description"},"Scary Movie Night Score",i.a.createElement("input",{className:"input",type:"text",value:t.smn,onChange:e.handleChange,name:"smn"}))),i.a.createElement("div",{className:"inputrow"},i.a.createElement("p",{className:"description"},"Comments",i.a.createElement("input",{className:"input",type:"text",value:t.comments,onChange:e.handleChange,name:"comments"}))),i.a.createElement("button",{id:"submitButton",type:"submit",onClick:e.handleSubmit},i.a.createElement("h2",null,"Add New Movie"))))})),i.a.createElement("br",null),i.a.createElement("a",{href:"/"},i.a.createElement("i",null,"Return To Main Page")))}}]),n}(r.Component);function te(){var e=Object(a.a)(["\n  background-color: powderblue;\n  min-height: 100%;  \n  width: 100%;\n  position: relative;  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return te=function(){return e},e}function ne(){var e=Object(a.a)(["\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    margin: 0;\n    padding: 0;\n    background-color: powderblue;\n    height: 100%;\n\n    a {\n      color: #000000;\n    }\n  }\n"]);return ne=function(){return e},e}var ae=Object(u.a)(ne()),re=u.b.div(te());o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ae,null),i.a.createElement(re,null,i.a.createElement(S.a,null,i.a.createElement(O,null),i.a.createElement(m.b,{path:"/",component:Y,exact:!0}),i.a.createElement(m.b,{path:"/database",component:y}),i.a.createElement(m.b,{path:"/upload",component:R}),i.a.createElement(m.b,{path:"/gifs",component:H}),i.a.createElement(m.b,{path:"/edit/:title",component:V}),i.a.createElement(m.b,{exact:!0,path:"/new",component:ee})))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.90f95daa.chunk.js.map