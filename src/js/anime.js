//<li>
//  <div class="card">
//    <a href="">
//    <img class="cardimg" draggable="false" src="https://myanimelist.cdn-dena.com/images/anime/1614/90408.jpg" alt="anime cover">
//    <div class="container">
//      <h4><b>Darling in the FranXX</b></h4>
//      <p class="cardtext">18/24</p>
//    </div>
//    </a>
//  </div>
//</li>



//temp storage for data
var a_35849 = {title:"Darling in the FranXX", image_url:"https://myanimelist.cdn-dena.com/images/anime/1614/90408.jpg", progress:"1/6"};
var a_36475 = {title:"Sword Art Online Alternative: Gun Gale Online", image_url:"https://myanimelist.cdn-dena.com/images/anime/1114/91791.jpg", progress:"1/6"};
var a_30484 = {title:"Steins;Gate 0", image_url:"https://myanimelist.cdn-dena.com/images/anime/1031/90444.jpg", progress:"1/6"};



var str1 = "<li><div class=\"card\"><a href=\"\"><img class=\"cardimg\" draggable=\"false\" src=\""
//will be image_url variable        https://myanimelist.cdn-dena.com/images/anime/1614/90408.jpg
var str2 = "\ alt=\"anime cover\"><div class=\"container\"><h4><b>"
//will be title variable        Darling in the FranXX
var str3 = "</b></h4><p class=\"cardtext\">"
//will be progress variable        18/24
var str4 = "</p></div></a></div></li>"



var idontknowwhattocallthisvariable = "<li><div class=\"card\"><a href=\"\"><img class=\"cardimg\" draggable=\"false\" src=\"" + a_35849.image_url + "\ alt=\"anime cover\"><div class=\"container\"><h4><b>" + a_35849.title + "</b></h4><p class=\"cardtext\">" + a_35849.progress + "</p></div></a></div></li>"

let doc = new DOMParser().parseFromString(idontknowwhattocallthisvariable, 'text/html');

document.body.appendChild(doc);
