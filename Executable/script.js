let mainText;
let iterationVar = 0;
let targetText = 'Samuel Keller';
let subtitleTargetText = 'Website of';
let subtitleText;

function Type () {
    //Name
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
