let mainText;
let iterationVar = 0;
let targetText = 'Samuel Keller';
let subtitleTargetText = 'Website of';
let subtitleText;
let lightMode = false;
let text1;
let body;
let text2;
let text3;
let viewTitle;
let Card1;
let Card2;
let cardOneTitle;
let cardOneSubtitle;
let cardTwoTitle;
let cardTwoSubtitle;
let title;
let subtitle;

let params;
let url;

function Type () {
    mainText = document.getElementById("myName");
    mainText.innerHTML = '';
    setInterval(function () {
        mainText.innerHTML += targetText.charAt(iterationVar);
        iterationVar++;
        if (iterationVar > 12) {
            mainText.title = 'Samuel Keller';
        }
    }, 100);
}

function changeView () {
    if (lightMode) {
        console.log('Changing to dark mode');
        body = document.getElementById("BODY").style.background = "rgb(31, 31, 31)";
        text1 = document.getElementById("Subtitle").style.color = "white";
        text2 = document.getElementById("myName").style.color = "white";
        viewTitle = document.getElementById("viewMode").style.color = "white";
        viewTitle = document.getElementById("viewMode").innerHTML = 'Click to view page in light mode';
        text3 = document.getElementById("whoAmI").style.color = "white";
        Card1 = document.getElementById("FloatingPoint").style.background = "rgb(31, 31, 31)";
        Card2 = document.getElementById("War").style.background = "rgb(31, 31, 31)";
        cardOneTitle = document.getElementById("FLPTcardTitle").style.color = "white";
        cardTwoTitle = document.getElementById("warCardTitle").style.color = "white";
        cardOneSubtitle = document.getElementById("FLPTsubtitle").style.color = "white";
        cardTwoSubtitle = document.getElementById("warSubtitle").style.color = "white";
        lightMode = false; 
    } else {
        console.log('Changing to light mode');
        body = document.getElementById("BODY").style.background = "white";
        text1 = document.getElementById("Subtitle").style.color = "black";
        text2 = document.getElementById("myName").style.color = "black";
        viewTitle = document.getElementById("viewMode").style.color = "black";
        viewTitle = document.getElementById("viewMode").innerHTML = 'Click to view page in dark mode';
        text3 = document.getElementById("whoAmI").style.color = "black";
        Card1 = document.getElementById("FloatingPoint").style.background = "white";
        Card2 = document.getElementById("War").style.background = "white";
        cardOneTitle = document.getElementById("FLPTcardTitle").style.color = "black";
        cardTwoTitle = document.getElementById("warCardTitle").style.color = "black";
        cardOneSubtitle = document.getElementById("FLPTsubtitle").style.color = "black";
        cardTwoSubtitle = document.getElementById("warSubtitle").style.color = "black";
        lightMode = true;
    }
}