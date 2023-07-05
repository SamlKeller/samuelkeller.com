let mainText;

let iterationVar = 0;

let targetText = 'Samuel Keller';
let secondTarget = '404';
let subtitleTargetText = 'Website of';

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

function notFoundType () {
    mainText = document.getElementById("notFound");
    mainText.innerHTML = '';
    setInterval(function () {
        mainText.innerHTML += secondTarget.charAt(iterationVar);
        iterationVar++;
        if (iterationVar > 12) {
            mainText.title = 'Samuel Keller';
        }
    }, 100);
}

let lightMode = false;

function changeView () {
    if (lightMode) {
        document.getElementById("BODY").style.background = "rgb(31, 31, 31)";
        document.getElementById("Subtitle").style.color = "white";
        document.getElementById("myName").style.color = "white";
        document.getElementById('viewMode').style.color = "white";
        document.getElementById('viewMode').innerHTML = '<span id="mode" class="material-symbols-outlined arrow">light_mode</span>';
        document.getElementById('mode').style.color = 'white';
        document.getElementById('subtext').style.color = 'white';
        document.getElementById("whoAmI").style.color = "white";
        document.getElementById('email').style.color = 'white';

        //Time complexity for the below statement is terrible but I don't care to fix it
        for (let i = 0; i < document.getElementsByClassName('projectTitle').length; i++) {
            document.getElementsByClassName('projectTitle')[i].style.color = 'white';
        }
        for (let i = 0; i < document.getElementsByClassName('projectText').length; i++) {
            document.getElementsByClassName('projectText')[i].style.color = 'white';
        }
        for (let i = 0; i < document.getElementsByClassName('arrow').length; i++) {
            document.getElementsByClassName('arrow')[i].style.color = 'white';
        }
        lightMode = false;
    } else {
        document.getElementById("BODY").style.background = "white";
        document.getElementById("Subtitle").style.color = "black";
        document.getElementById("myName").style.color = "black";
        document.getElementById('viewMode').innerHTML = '<span id="mode" class="material-symbols-outlined arrow">dark_mode</span>';
        document.getElementById('mode').style.color = "black";
        document.getElementById('subtext').style.color = 'black';
        document.getElementById("whoAmI").style.color = "black";
        document.getElementById('email').style.color = 'black';
        for (let i = 0; i < document.getElementsByClassName('projectTitle').length; i++) {
            document.getElementsByClassName('projectTitle')[i].style.color = 'black';
        }
        for (let i = 0; i < document.getElementsByClassName('projectText').length; i++) {
            document.getElementsByClassName('projectText')[i].style.color = 'black';
        }
        for (let i = 0; i < document.getElementsByClassName('arrow').length; i++) {
            document.getElementsByClassName('arrow')[i].style.color = 'black';
        }
        lightMode = true;
    }
}