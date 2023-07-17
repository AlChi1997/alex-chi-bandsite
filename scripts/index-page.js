let comments = [{"Name" : "Miles Acosta",
                "Comment" : "I can't stop listening. Everytime I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
                "Date":"12/20/2020"},
                {"Name" : "Emilie Beach", 
                "Comment" : "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.", 
                "Date" : "01/09/2021"},
                {"Name" : "Connor Walton", 
                "Comment" : "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.", 
                "Date": "02/17/2021"}
];

//using the getDate method to output the computer's date, we would have to create the function's inner workings
function getDate(){
    //assigning today as a new Date
    let today = new Date();
    // let dd = the day it is in the month
    let dd = today.getDate();
    //let mm = the month it is
    let mm = today.getMonth()+1;//this is due to index 0 being janurary
    //let yyyy = the year it is
    let yyyy = today.getFullYear();
    //conditionals for single digits so 1 would become 01
    if (dd<10){
        dd="0"+dd
    }if (mm<10){
        mm='0'+mm
    }
    //assigning dateValue to be a string containing month, date, year in the format mm/dd/yyyy
    dateValue = mm + "/" + dd + "/" + yyyy;

    //adding the value of the dateValue to id #comments__date
    document.getElementById("comments__date").value = dateValue;

    return dateValue;
}

getDate();

//assigned form to the class .comments which is our form element in html
const form =document.querySelector(".comments");
//add event listener for submition, and preventDefault so it doesn't refresh
form.addEventListener('submit',function(e){
    e.preventDefault();

    //assign the values of the elements to constants
    const nameValue = e.target.Name.value;
    const commentValue = e.target.Comment.value;

    //conditional so that if no content is filled, we wil change the border color to red and console.log please fill in field
    if(!nameValue && !commentValue){
        e.target.Name.style.borderColor ="#D22D2D";
        e.target.Comment.style.borderColor ="#D22D2D";
        console.log("Please fill in fields");

    }else{
        //conditional so that if Name element form is not filled bordercolor will be red and returns false so that it doesn't continue and log
        if(!nameValue){;
            e.target.Name.style.borderColor ="#D22D2D";
            return false;
        }else{
            e.target.Name.style.borderColor ="";
        }
        //conditional so that if Comment element form is not filled bordercolor will be red and returns false so that it doesn't continue and log
        if(!commentValue){
            e.target.Comment.style.borderColor ="#D22D2D";
            return false;
        }else{
            e.target.Comment.style.borderColor ="";
    }

    //pushing all the values into the objects
    comments.push({Name:nameValue,Comment:commentValue,Date:dateValue});

    renderComments();
    console.log(comments);
    console.log(e.target.Name.value);
    console.log(e.target.Comment.value);
    console.log(e.target.Date.value);
    }
});

//assign footer to the footer in document
const footer =document.querySelector('footer');

//assign posts to a new div named .posts
const posts = document.createElement("div");
posts.classList.add("posts");

//assigning body to the parent of footer, inserting .posts before footer in document
const body = footer.parentNode;
body.insertBefore(posts,footer);

function renderComments() {
    posts.innerHTML = '';

    //loop to start in the reverse order of Shows due to the latest being at the bottom
    for (let i = comments.length -1; i >= 0; i--) {
        const comment = comments[i];
        
        //creating element div and naming it .posts__section and appending it under posts
        const postsSection = document.createElement('div');
        postsSection.classList.add("posts__section");
        posts.appendChild(postsSection)

        //creating element div and naming it .post__left and appending it under post__section
        const postsLeft = document.createElement('div');
        postsLeft.classList.add("posts__left");
        postsSection.appendChild(postsLeft);
    
        //creating element div and naming it .post__right and appending it under post__section
        const postsRight = document.createElement('div');
        postsRight.classList.add("posts__right");
        postsSection.appendChild(postsRight);
    
        //creating img, naming it .posts__image and appening it under post__left
        const posts__image = document.createElement("img");
        posts__image.src = "https://www.colorhexa.com/e1e1e1.png";
        posts__image.classList.add("posts__image");
        postsLeft.appendChild(posts__image);
    
        //creating element div and naming it .post__name and appending it under post__right
        const postsName = document.createElement('div');
        postsName.classList.add("posts__name");
        postsName.textContent = comment.Name;
        postsRight.appendChild(postsName);
    
        ///creating element div and naming it .post__date and appending it under post__right
        const postsDate = document.createElement('div');
        postsDate.classList.add("posts__date");
        postsDate.textContent = comment.Date;
        postsRight.appendChild(postsDate);
    
        ///creating element div and naming it .post__comment and appending it under post__right
        const postsComment = document.createElement('div');
        postsComment.classList.add("posts__comment");
        postsComment.textContent = comment.Comment;
        postsRight.appendChild(postsComment);
    }
}

renderComments();