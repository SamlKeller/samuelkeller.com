let code = 90998;
let time = 0;
let startTime;
let endTime;
let backgroundText = document.getElementById("backgroundText");

function runCheck () {
  code = document.querySelector('input').value;
  document.getElementById("finishingText").innerHTML = "Finding code...";
  if (code.length > 2 && code.length < 20) {
       startTime = new Date().getTime();
    for (let i = 0; i < 200000000000000000001; i++) {
      if (i == code) {
          endTime = new Date().getTime()-startTime;
        console.log("Time: " + endTime + " milliseconds");
             setText();
        return;
      }
    } 
  } else {
    document.getElementById("finishingText").innerHTML = "Choose a longer number";
  }
}

function setText () {
  document.getElementById("finishingText").innerHTML = "Time to find code: " + endTime + " milliseconds";
}