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

//assigning the .main class as a variable
const footer =document.querySelector('footer');

const main = document.createElement("div");
main.classList.add("main");

const body = footer.parentNode;
body.insertBefore(main,footer);

//assigning the name of variable Shows to be used as the title in main class
let mainHeader = Object.keys({Shows})[0];

//creating a div element and assigning it to a variable divMain
const divMain = document.createElement('div');
//inserting mainHeader value into the created div
divMain.textContent = mainHeader;
//adding a class name to the created div
divMain.classList.add("main__header");
//adding the div onto the .main class as a child element
main.appendChild(divMain);

//conditional for script to run only when screen.width is <768px
if (screen.width < 768){

    for (let i = 0; i < Shows.length; i++) {
        const obj = Shows[i];//this is to get the first object in the Shows array
    
        const mainContent = document.createElement('div');
        mainContent.classList.add("main__content");
        main.appendChild(mainContent);
    
        let isFirstValue = true;//we set a varaible as true so that the first run through it wil lbe true
    
            for (let key in obj) {
            const title = document.createElement('div');
            title.textContent = key;
            title.classList.add("main__title");
            mainContent.appendChild(title);
        
            const subtitle = document.createElement('div');
            subtitle.textContent = obj[key];
            subtitle.classList.add("main__subtitle");
        
            if (isFirstValue) {
                subtitle.classList.add("main__subtitle-bold");
                isFirstValue = false; //after the first run through, we change the value to false
            }
        
            mainContent.appendChild(subtitle);
        }

        let button = document.createElement('BUTTON');
        button.textContent = "BUY TICKETS";
        mainContent.appendChild(button);
    }
}
else if (screen.width >= 768 && screen.width < 1280){
    const mainSub = document.createElement('div');
    mainSub.classList.add("main__subheader");
    main.appendChild(mainSub);

    const obj = Shows[0];

    for (let key in obj){
    const title = document.createElement('div');
    title.textContent = key;
    title.classList.add("main__title");
    mainSub.appendChild(title);
    }

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
                    isFirstValue = false; //after the first run through, we change the value to false
                }
            
                mainContent.appendChild(subtitle);
            }
        let button = document.createElement('BUTTON');
        button.textContent = "BUY TICKETS";
        mainContent.appendChild(button);
    }
}
else{
    const mainContain = document.createElement('div');
    mainContain.classList.add("main__container");
    main.appendChild(mainContain);

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
                    isFirstValue = false; //after the first run through, we change the value to false
                }
            
                mainContent.appendChild(subtitle);
            }
        let button = document.createElement('BUTTON');
        button.textContent = "BUY TICKETS";
        mainContent.appendChild(button);
    }
}

let highlightDiv = document.querySelectorAll(".main__content");
let highlighted = null;

highlightDiv.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        if(highlighted !== null){
            highlighted.style.backgroundColor = "";
        }

        if(highlighted !== element){
            element.style.backgroundColor = "#E1E1E1";
            highlighted = element;
        }else{
            highlighted = null;
        }
    });
});