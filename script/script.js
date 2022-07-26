// dom buttons
const clickButton = document.getElementsByName('clickButton');
const addButton = document.getElementsByName('addButton'); 
const addAuto = document.getElementsByName('addAuto'); 

// dom elements
const score = document.getElementsByName('score'); 
const infoDamage = document.getElementsByName('infoDamage'); 
const infoAuto = document.getElementsByName('infoAuto'); 

// variables
let num = 0; 
let damage = 1; 
let auto = 0;
let autoDamage = setInterval(autoDmgClick, 1000); 

// pass 'num' to update the score text
function scoreUpdate(valueNum){
  score[0].textContent = valueNum; 
}

// this will be our interval function
function autoDmgClick(){
  num +=auto; 
  scoreUpdate(num);
}

// need to change in skill update
function damageUpdate(){
  infoDamage[0].innerText=`current dmg : ${damage}`;
}

// click 
clickButton[0].addEventListener('click', ()=>{
  num +=damage; 
  scoreUpdate(num); 
})


addButton[0].addEventListener('click', ()=>{
  /*
  # check if num >=100
  # remove 10 from num
  # add 0.5 to click
  */

  if(num >= 100){
    num -=100;
    scoreUpdate(num);
    damage += 0.5; 
    damageUpdate(); 
  }
}); 

addAuto[0].addEventListener('click', ()=>{
  /* 
  # check if num >= 1000
  # remove 1000
  # add 0.1 to autoclick
  */
  if(num >= 1000){
    num -=1000;
    auto +=0.1;
  }
});

