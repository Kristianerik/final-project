const url = "https://kristianportfolio.eu/wp-json/wp/v2/posts";
var titleArea = document.querySelector(".contentTitle");
var contentArea = document.querySelector(".contentBox");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const index = params.get("index");
console.log(index);

/* Api call*/
async function makeApiCall() {
    try{
        const response = await fetch(url);

        const retreived = await response.json();
        console.log(retreived);
    
        titleArea.innerHTML = retreived[index].title.rendered;

        contentArea.innerHTML = "<img src='images/" + index + ".jpg' class='contentImage' style='margin-top: 2%; width: 70%; margin-bottom: 5%;'>" 
        + "<h3 class='subHeading'> Summary: </h3> " + retreived[index].content.rendered;

    }    

    catch(error) {
    console.log(error);
    }
    
} 
makeApiCall();