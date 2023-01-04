let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'E:/server/web-projects/test-server/images/pic1.png') {
        myImage.setAttribute('src','E:/server/web-projects/test-server/images/firefox2.jpg');
    } else {
        myImage.setAttribute('src','E:/server/web-projects/test-server/images/pic1.png');
    }
}
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
    } else {localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;}
    
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }


  myButton.onclick = function() {
    setUserName();
 }