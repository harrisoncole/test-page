//global variables

let myHeading = document.querySelector('h1');

myHeading.innerHTML = "It's poké-time! Yeah!!!!";

let fighting = document.getElementById('fighting');
let nonFighting = document.getElementById('nonfighting');
let timeDisplay = document.getElementById('time');
let button = document.getElementById('switch');
let imageIdx = 0;






const displayTime = () => {
    let today = new Date();
    let hrs = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();
    
    //helper function to ensure two digits always
    const padWithZero = h => { 
        if (h < 10) return "0" + h;
        return h;
    }
    
    
    
    
    let time = "";

    if (nonFighting.checked && parseInt(hrs) >= 13) time = padWithZero(parseInt(hrs) - 12) + ":" + padWithZero(mins) + ":" + padWithZero(secs) + " PM";

    else if (nonFighting.checked && parseInt(hrs) !== 0) time = padWithZero(hrs) + ":" + padWithZero(mins) + ":" + padWithZero(secs) + " AM";

    else if (nonFighting.checked && parseInt(hrs) === 0) time = "12:" + padWithZero(mins) + ":" + padWithZero(secs) + " AM";
    
    else time = padWithZero(hrs) + ":" + padWithZero(mins) + ":" + padWithZero(secs);



    
    timeDisplay.innerHTML = time;
    
    
    
    
    let t = setTimeout(function () {
        displayTime()
    }, 500);
    
    
}



const changeImage = () => {
    
    let imgArr = ['ash.jpeg', 'ashAndPikachu.jpeg', 'evee.jpeg', 'mainGang.jpeg', 'mainGangEvolved.jpeg', 'pikachu.jpeg']
    
        myHeading.innterHTML = 'button clicked!';
    
        let nextImage = imageArr[imageIdx];
        let altName = nextImage.slice(0,nextImage.indexOf("."));
        
        document.getElementById('pokemon').src = nextImage;   
        document.getElementById('pokemon').alt = altName;
    
    imageIdx++;
    
    if (imageIdx >= imgArr.length) imageIdx = 0;
    
    
}






displayTime();

