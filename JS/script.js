const url = "https://kristianportfolio.eu/wp-json/wp/v2/posts";
var contentAreaOne = document.querySelector(".one");
var contentAreaTwo = document.querySelector(".two");
var contentAreaThree = document.querySelector(".three");
var slideIndex = 1;

/* Button controls */
function plusSlides(n){
    showSlides(slideIndex += n);
}

/*thumbnail controls */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";   
}

/* Api call*/
async function makeApiCall() {
    try{
        const response = await fetch(url);

        const retreived = await response.json();
        console.log(retreived);
    
    
    for(var i = 0; i < 3; i++){
        if(i == 0){
            contentAreaOne.innerHTML = "<a href='blog.html?index=0' style=' text-decoration: none;'> <h2 class='contentHeader'>" + retreived[i].title.rendered + "</h2></a>" 
            + "<a href='blog.html?index=0' style=' text-decoration: none;'> <img src='images/0.jpg' class='contentImage'> </a>" + "<h3 class='subHeading'> Summary: </h3> " + retreived[i].content.rendered;
        } else if (i == 1) {
            contentAreaTwo.innerHTML = "<a href='blog.html?index=1' style=' text-decoration: none;'> <h2 class='contentHeader'>" + retreived[i].title.rendered + "</h2> </a>" 
            + "<a href='blog.html?index=1' style=' text-decoration: none;'> <img src='images/1.jpg' class='contentImage'> </a>" + "<h3 class='subHeading'> Summary: </h3> " + retreived[i].content.rendered;
        } else {
            contentAreaThree.innerHTML = "<a href='blog.html?index=2' style=' text-decoration: none;'> <h2 class='contentHeader'>" + retreived[i].title.rendered + "</h2> </a>" 
            + "<a href='blog.html?index=2' style=' text-decoration: none;'> <img src='images/2.jpg' class='contentImage'> </a>" + "<h3 class='subHeading'> Summary: </h3> " + retreived[i].content.rendered;
        }
    }

    }


    catch(error) {
        console.log(error);
    }
}

makeApiCall();