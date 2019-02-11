//global variables

let myHeading = document.querySelector('h1');

myHeading.innerHTML = "It's poké-time! Yeah!!!!";

let fighting = document.getElementById('fighting');
let nonFighting = document.getElementById('nonfighting');
let timeDisplay = document.getElementById('time');
let button = document.getElementById('switch');
let imageIdx = 0;




// comment for git

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

    else if (nonFighting.checked && parseInt(hrs) === 12) time = parseInt(hrs) + ":" + + padWithZero(mins) + ":" + padWithZero(secs) + " PM";

    else if (nonFighting.checked && parseInt(hrs) !== 0) time = padWithZero(hrs) + ":" + padWithZero(mins) + ":" + padWithZero(secs) + " AM";

    else if (nonFighting.checked && parseInt(hrs) === 0) time = "12:" + padWithZero(mins) + ":" + padWithZero(secs) + " AM";
    
    else time = padWithZero(hrs) + ":" + padWithZero(mins) + ":" + padWithZero(secs);



    
    timeDisplay.innerHTML = time;
    
    
    
    
    let t = setTimeout(function () {
        displayTime()
    }, 500);
    
    
}



function changeImage(){
    
    let imgArr = ['ash.jpeg', 'ashAndPikachu.jpeg', 'evee.jpeg', 'mainGang.jpeg', 'mainGangEvolved.jpeg', 'pikachu.jpeg']
    
    let pic = document.getElementById('pokemon');
    
        let nextImage = imgArr[imageIdx];
        let altName = nextImage.slice(0,nextImage.indexOf("."));
        console.log(nextImage, altName);
        pic.src = `pictures/${nextImage}`;   
        pic.alt = altName;
    
    imageIdx++;
    
    if (imageIdx >= imgArr.length) imageIdx = 0;
    
    
}






displayTime();

