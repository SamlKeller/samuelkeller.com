var targetText = "        This website is cool it's a very cool website that you should pay attention to and I think it's a pretty neat one also that I like a lot but don't mind me hey scroll why aren't you scrolling you should really scroll and stop reading this scroll scroll scroll!";
var iterator = 0;
const textInterval = setInterval(writeText, 100);

function writeText () {
  iterator++;
  if (iterator < 267) {
    document.getElementById("subTitle").innerHTML +=     targetText[iterator]; 
  } else {
    console.log('Finished writing text');
    clearInterval(textInterval);
  }
}