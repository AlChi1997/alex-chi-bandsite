//**might have to refresh at each breakpoint as the page would have to reload the code */

//object that contains all shows information, you can add more arrays for it too
let Shows = [
            {"DATE" : "Mon Sept 06 2021", "VENUE" : "Ronald Lane", "LOCATION" :"San Francisco,CA"},
            {"DATE" : "Tues Sept 21 2021", "VENUE" : "Pier 3 East", "LOCATION" :"San Francisco,CA"},
            {"DATE" : "Fri Oct 15 2021", "VENUE" : "View Lounge", "LOCATION" :"San Francisco,CA"},
            {"DATE" : "Sat Nov 06 2021", "VENUE" : "Hyatt Agency", "LOCATION" :"San Francisco,CA"},
            {"DATE" : "Sat Nov 26 2021", "VENUE" : "Moscow Center", "LOCATION" :"San Francisco,CA"},
            {"DATE" : "Sat Dec 15 2021", "VENUE" : "Press Club", "LOCATION" :"San Francisco,CA"},
];

//assigning the .footer class as a variable
const footer =document.querySelector('footer');

//assigning main as a new div and naming the div .main
const main = document.createElement("div");
main.classList.add("main");

//assigning the body of the document as a parent and insert .main before the footer
const body = footer.parentNode;
body.insertBefore(main,footer);

//assigning the name of the object Shows (this took a while to search how to do)
let mainHeader = Object.keys({Shows})[0];

//creating a new div and assigning it the class name .main__header with the content of of name of the object Shows
const divMain = document.createElement('div');
divMain.textContent = mainHeader;
divMain.classList.add("main__header");
main.appendChild(divMain);

//conditional for script to run only when screen.width is <768px
if (screen.width < 768){

    //loop to go through each element of Shows object starting from the first index in this case 0
    for (let i = 0; i < Shows.length; i++) {
        const obj = Shows[i];
        
        //creating a new div and assigning it the class name .main__content and appending it into .main to contain the keys and values divs
        const mainContent = document.createElement('div');
        mainContent.classList.add("main__content");
        main.appendChild(mainContent);
    
        let isFirstValue = true;//we set a varaible as true so that the first run through it will be true *see line 58 for reasoning
    
            //loop to go through every key in the object Shows while creating a div .main__title within .main__content to contain each key
            for (let key in obj) {
            const title = document.createElement('div');
            title.textContent = key;
            title.classList.add("main__title");
            mainContent.appendChild(title);
        
            //creating a new div and assignign it the class name .main__subtitle containing the value of each key
            const subtitle = document.createElement('div');
            subtitle.textContent = obj[key];
            subtitle.classList.add("main__subtitle");
            
            //conditional to get the Date value in object as speical due to it being the only one highlighted, if so instead of .main__subtitle, we add .main__subtitle-bold
            if (isFirstValue) {
                subtitle.classList.add("main__subtitle-bold");
                isFirstValue = false; //after the first run through, we change the value to false, this ensures we will not compute .main__subtitle-bold classes anymore
            }
            
            //.main__subtitle is added into the .main__content div
            mainContent.appendChild(subtitle);
        }

        //creating a button with the content "BUY TICKETS" and placing it within main__content
        let button = document.createElement('BUTTON');
        button.textContent = "BUY TICKETS";
        mainContent.appendChild(button);
    }
}
//conditional statement for scenarios where screen is >= tablet but less than desktop
else if (screen.width >= 768 && screen.width < 1280){
    
    //created a new div to contain the keys as unlike mobile, keys only appear once named .main__subheader
    const mainSub = document.createElement('div');
    mainSub.classList.add("main__subheader");
    main.appendChild(mainSub);

    //as we only need to go through the keys once, we only need 1 index of Shows
    const obj = Shows[0];

    //loop to insert key into .main__title div within the newly created .main__subheader div
    for (let key in obj){
    const title = document.createElement('div');
    title.textContent = key;
    title.classList.add("main__title");
    mainSub.appendChild(title);
    }

    //normal loop like before for values
    for (let i = 0; i < Shows.length; i++) {
        const obj = Shows[i];//this is to start on the first object in the Shows array
    
        const mainContent = document.createElement('div');
        mainContent.classList.add("main__content");
        main.appendChild(mainContent);

        let isFirstValue = true

            for (let key in obj){
            const subtitle = document.createElement('div');
                subtitle.textContent = obj[key];
                subtitle.classList.add("main__subtitle");
            
                if (isFirstValue) {
                    subtitle.classList.add("main__subtitle-bold");
                    isFirstValue = false;
                }
            
                mainContent.appendChild(subtitle);
            }
        let button = document.createElement('BUTTON');
        button.textContent = "BUY TICKETS";
        mainContent.appendChild(button);
    }
}
else{
    //creating a new div called .main__container to contain all the right elements while styling for desktop
    const mainContain = document.createElement('div');
    mainContain.classList.add("main__container");
    main.appendChild(mainContain);

    //same as before, created a div to contain the keys of Shows, but this time we add this div into the newly created .main__container
    const mainSub = document.createElement('div');
    mainSub.classList.add("main__subheader");
    mainContain.appendChild(mainSub);

    const obj = Shows[0];

    for (let key in obj){
    const title = document.createElement('div');
    title.textContent = key;
    title.classList.add("main__title");
    mainSub.appendChild(title);
    }

    //same loop as before for values, difference is instead of .main__content, we are inserting the divs into .main__container
    for (let i = 0; i < Shows.length; i++) {
        const obj = Shows[i];//this is to start on the first object in the Shows array
    
        const mainContent = document.createElement('div');
        mainContent.classList.add("main__content");
        mainContain.appendChild(mainContent);

        let isFirstValue = true

            for (let key in obj){
            const subtitle = document.createElement('div');
                subtitle.textContent = obj[key];
                subtitle.classList.add("main__subtitle");
            
                if (isFirstValue) {
                    subtitle.classList.add("main__subtitle-bold");
                    isFirstValue = false;
                }
            
                mainContent.appendChild(subtitle);
            }
        let button = document.createElement('BUTTON');
        button.textContent = "BUY TICKETS";
        mainContent.appendChild(button);
    }
}

//assigning class .main__content to a variable highlightDiv
let highlightDiv = document.querySelectorAll(".main__content");

//assigning null to varaible null as to start with, there will be no divs highlighted
let highlighted = null;

//event listener function checking each element of class .main__content if it is highlighted
highlightDiv.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        //conditional if highlighted doesn't = null which means highlighted = element, which means there is something highlighted, change the background of element back
        if(highlighted !== null){
            highlighted.style.backgroundColor = "";
        }
        //conditional if element doesn't = null, change the element's background color to #E1E1E1 while changing highlighted to element, thus when it goes back to conditional 1, background of element will change back
        if(highlighted !== element){
            element.style.backgroundColor = "#E1E1E1";
            highlighted = element;
        }
        //all other conditions, highlighted shall be null
        else{
            highlighted = null;
        }
    });
});