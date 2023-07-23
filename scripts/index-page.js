//using axios to get the information required from the api
const getComments = axios.get("https://project-1-api.herokuapp.com/comments?api_key=e16c69e5-1c9e-410c-8d79-3be9a90a83ea");
    getComments.then(result=>{
        //assigning the infomration from the api as a varaible comments
        const comments = result.data;
        console.log(comments);
/*below code is mostly similar to previous code in sprint 2 with a few changes line 19/26/32/39/46 with the 
introduction of the variable isValid, lines 52-66 with the post axios and lines 99-103 and 136 
regardign the new date string we had to convert*/

        //assigned form to the class .comments which is our form element in html
        const form =document.querySelector(".comments");
        //add event listener for submition, and preventDefault so it doesn't refresh
        form.addEventListener('submit',function(e){
            e.preventDefault();

            //assign the values of the elements to constants
            const nameValue = e.target.Name.value;
            const commentValue = e.target.Comment.value;

            //conditional to check if the boxes are filled or not
            let isValid = true;

            //conditional so that if no content is filled, we wil change the border color to red and console.log please fill in field
            if(!nameValue && !commentValue){
                e.target.Name.style.borderColor ="#D22D2D";
                e.target.Comment.style.borderColor ="#D22D2D";
                console.log("Please fill in fields");
                isValid = false;

            }else{
                //conditional so that if Name element form is not filled bordercolor will be red and returns false so that it doesn't continue and log
                if(!nameValue){
                    e.target.Name.style.borderColor ="#D22D2D";
                    isValid = false;
                }else{
                    e.target.Name.style.borderColor ="";
                }
                //conditional so that if Comment element form is not filled bordercolor will be red and returns false so that it doesn't continue and log
                if(!commentValue){
                    e.target.Comment.style.borderColor ="#D22D2D";
                    isValid = false;
                }else{
                    e.target.Comment.style.borderColor ="";
                }
            }

            // if statement for the submition to not go through if it's not valid
            if (!isValid){
                return;
            }

            //pushing all the values into a new object
            let newComments = {name:nameValue,comment:commentValue};

            console.log(newComments);

            //axios post request to update the data in the api by posting the new comments
            axios.post("https://project-1-api.herokuapp.com/comments?api_key=e16c69e5-1c9e-410c-8d79-3be9a90a83ea", newComments)
            .then(result => {
                console.log(result);
                comments.push(result.data);
                renderComments();

            })
            .catch(error => {
                console.log(error);
            });

            form.reset();

            //were test console logs to ensure all infomration is correct
            console.log(comments);
            console.log(e.target.Name.value);
            console.log(e.target.Comment.value);
            console.log(e.target.Date.value);
            }
        );

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
                const commentObject = comments[i];
                
                console.log(comments[i]);

                //constructed a formula to edit timestamps into the date format we want
                const formatedTimestamp = {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                }

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
                postsName.textContent = commentObject.name;
                postsRight.appendChild(postsName);
            
                ///creating element div and naming it .post__date and appending it under post__right
                const postsDate = document.createElement('div');
                postsDate.classList.add("posts__date");
                //used to change the timestamp infomration to the format we want in our posts
                postsDate.textContent = new Date(commentObject.timestamp).toLocaleString("en-US", formatedTimestamp);
                postsRight.appendChild(postsDate);
            
                ///creating element div and naming it .post__comment and appending it under post__right
                const postsComment = document.createElement('div');
                postsComment.classList.add("posts__comment");
                postsComment.textContent = commentObject.comment;
                postsRight.appendChild(postsComment);
            }
        }

        renderComments();
})
    getComments.catch(error =>{
        console.log(error);
})