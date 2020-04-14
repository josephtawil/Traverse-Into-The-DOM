//we can grab a specific id with getElementId
//use variables for the id of the html page so you can access more quickly.
//access the object with id => must be passed as a string.
var mainDiv = document.getElementById("main");
var artDiv = document.getElementById("articles");

// var artDiv = document.querySelector(h1); //will target the first h1 element 
artDiv.children[0].lastElementChild.style.color = "blue";
artDiv.previousElementSibling.style.background = "black";
artDiv.children[0].style.fontSize = "50px";

mainDiv.childNodes[1].style.textDecoration = "underline";
mainDiv.lastElementChild.style.fontSize = "50px";
mainDiv.firstElementChild.style.color = "orange";
mainDiv.lastElementChild.parentElement.style.fontSize = "40px";