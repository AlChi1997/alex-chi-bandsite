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

function getDate(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;//this is due to index 0 being janurary
    let yyyy = today.getFullYear();
    if (dd<10){
        dd="0"+dd
    }if (mm<10){
        mm='0'+mm
    }dateValue = mm + "/" + dd + "/" + yyyy;

    document.getElementById("comments__date").value = dateValue;

    return dateValue;
}

getDate();

const form =document.querySelector(".comments");
form.addEventListener('submit',function(e){
    e.preventDefault();

    const nameValue = e.target.Name.value;
    const commentValue = e.target.Comment.value;

    if(!nameValue && !commentValue){
        e.target.Name.style.borderColor ="#D22D2D";
        e.target.Comment.style.borderColor ="#D22D2D";
        console.log("Please fill in fields");

    }else{
        if(!nameValue){;
            e.target.Name.style.borderColor ="#D22D2D";
            return false;
        }else{
            e.target.Name.style.borderColor ="";
        }

    if(!commentValue){
        e.target.Comment.style.borderColor ="#D22D2D";
        return false;
    }else{
        e.target.Comment.style.borderColor ="";
    }

    comments.push({Name:nameValue,Comment:commentValue,Date:dateValue});

    console.log(comments);
    console.log(e.target.Name.value);
    console.log(e.target.Comment.value);
    console.log(e.target.Date.value);
    }
});

const footer =document.querySelector('footer');

const posts = document.createElement("div");
posts.classList.add("posts");

const body = footer.parentNode;
body.insertBefore(posts,footer);

for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
  
    const postsLeft = document.createElement('div');
    postsLeft.classList.add("posts___left");
    posts.appendChild(postsLeft);
  
    const postsRight = document.createElement('div');
    postsRight.classList.add("posts___right");
    posts.appendChild(postsRight);
  
    const posts__image = document.createElement("img");
    posts__image.src = "https://www.colorhexa.com/e1e1e1.png";
    posts__image.classList.add("posts__image");
    postsLeft.appendChild(posts__image);
  
    const postsName = document.createElement('div');
    postsName.classList.add("posts___name");
    postsName.textContent = comment.Name;
    postsRight.appendChild(postsName);
  
    const postsDate = document.createElement('div');
    postsDate.classList.add("posts___date");
    postsDate.textContent = comment.Date;
    postsRight.appendChild(postsDate);
  
    const postsComment = document.createElement('div');
    postsComment.classList.add("posts___comment");
    postsComment.textContent = comment.Comment;
    postsRight.appendChild(postsComment);
}
