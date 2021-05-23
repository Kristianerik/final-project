const url = "https://kristianportfolio.eu/wp-json/wp/v2/posts";
var contentArea = document.querySelector(".contentArea");

/* Api call*/
async function makeApiCall() {
    try{
        const response = await fetch(url);

        const retreived = await response.json();
        console.log(retreived);


        text = "";
        
        for(var i = 0; i < retreived.length; i++){
            text += "<div class='box'>" + "<a href='blog.html?index=" + i + "'style=' text-decoration: none;'> <img src='images/" + i 
            + ".jpg' class='thumbnail'> </a>"  + "<a href='blog.html?index=" + i + "'style=' text-decoration: none;'>" 
            +"<h2 class='articleTitle'>" + retreived[i].title.rendered + "</h2> </a> </div>";

        } 

        contentArea.innerHTML = text;
        
    }


    catch(error) {
        console.log(error);
    }
}

makeApiCall();