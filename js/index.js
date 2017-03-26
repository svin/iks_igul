/*
The Game of Iks-Igul
Created by Eddie Kalbert
1/2/2017
*/

//declaration of variables
var turn = 0;
var arr = [];
var noVal = '  ';
var move = false;
$(document).ready(function(){
  reset();
});

//the function injects X or O into the game board whei its triggered
//after 5 turns when its possible to win, this function call the function checkWinner to check if there is a winner
function btnChanger(btn){
  turn++;
  if(turn%2 != 0){
    document.getElementById(btn).value = ' X ';
    arr[btn] = ' X ';
    document.getElementById(btn).setAttribute("disabled", "disabled");
    move = true;
    document.getElementById('turn').innerHTML = 'O Turn';
  }else{
    document.getElementById(btn).value = ' O ';
    arr[btn] = ' O ';
    document.getElementById(btn).setAttribute("disabled", "disabled");
    move = false;
    document.getElementById('turn').innerHTML = 'X Turn';
  };
  if(turn >= 5){
    checkWinner();
  };
};

//the function checks if one of the winning scenarios has occured and declares who won the game
function checkWinner(){
  if(arr['btn1'] == arr['btn2'] && arr['btn2'] == arr['btn3']){
    alert(arr['btn1'] + ' Wins');
    var move = false;
    document.getElementById('turn').innerHTML = arr['btn1'] + ' Won';
  }
  else if(arr['btn4'] == arr['btn5'] && arr['btn5'] == arr['btn6']) {
    alert(arr['btn4'] + ' Wins');
    var move = false;
    document.getElementById('turn').innerHTML = arr['btn1'] + ' Won';
  }
  else if(arr['btn7'] == arr['btn8'] && arr['btn8'] == arr['btn9']) {
    alert(arr['btn7'] + ' Wins');
    var move = false;
    document.getElementById('turn').innerHTML = arr['btn1'] + ' Won';
  }
  else if(arr['btn1'] == arr['btn4'] && arr['btn4'] == arr['btn7']) {
    alert(arr['btn1'] + ' Wins');
    var move = false;
    document.getElementById('turn').innerHTML = arr['btn1'] + ' Won';
  }
  else if(arr['btn2'] == arr['btn5'] && arr['btn5'] == arr['btn8']) {
    alert(arr['btn2'] + ' Wins');
    var move = false;
    document.getElementById('turn').innerHTML = arr['btn1'] + ' Won';
  }
  else if(arr['btn3'] == arr['btn6'] && arr['btn6'] == arr['btn9']) {
    alert(arr['btn3'] + ' Wins');
    var move = false;
    document.getElementById('turn').innerHTML = arr['btn1'] + ' Won';
  }
  else if(arr['btn1'] == arr['btn5'] && arr['btn5'] == arr['btn9']) {
    alert(arr['btn1'] + ' Wins');
    var move = false;
    document.getElementById('turn').innerHTML = arr['btn1'] + ' Won';
  }
  else if(arr['btn3'] == arr['btn5'] && arr['btn5'] == arr['btn7']) {
    alert(arr['btn3'] + ' Wins');
    var move = false;
    document.getElementById('turn').innerHTML = arr['btn1'] + ' Won';
  }
  else if(turn == 9){
    alert('Its a DRAW');
    document.getElementById('turn').innerHTML = 'Its a DRAW';
  };
};

//the functions resets the board and all the variables to initial state
function reset(){
  turn = 0;
  document.getElementById('turn').innerHTML = ' X Turn';
  for(i=1; i<10; i++){
    document.getElementById('btn' + i).value = '  ';
    document.getElementById('btn' + i).removeAttribute("disabled", "disabled");
    arr['btn' + i] = '  ';
  };
};

//the function call for btnChanger to put the user move on the board
//the functions call for AI function that chooses the wright move for the AI
function compPlayer(btn) {
  btnChanger(btn);
  AI();
};

//the functions follows wiki rules for Iks-Igul game to define the wright move for the AI
function AI() {
  // rule 1
  if(document.getElementById('btn5').value == '  ' && turn == 1 && move) {
    btnChanger('btn5');
  };
  if(document.getElementById('btn5').value == ' X ' && turn == 1 && move){
    btnChanger('btn1');
  };
  //rule 2
  if(move){
    check(' O ');
  };
  //rule 3
  if(move){
    check(' X ');
  };

  //rule 4
  if(turn == 3 && document.getElementById('btn5').value == ' O ' && move && ((arr['btn1'] == ' X ' && arr['btn9'] == ' X ') || (arr['btn3'] == ' X ' && arr['btn7'] == ' X '))){
    if(move && checkIfEqual('btn2', 'btn8', 'btn8', '  ')){
      checkVal('btn2');
    };
    if(move && checkIfEqual('btn2', 'btn8', 'btn8', '  ')){
      checkVal('btn8');
    };
    if(move  && checkIfEqual('btn4', 'btn6', 'btn6', '  ')){
      checkVal('btn4');
    };
    if(move && checkIfEqual('btn4', 'btn6', 'btn6', '  ')){
      checkVal('btn6');
    };
  };

  if(turn == 3 && document.getElementById('btn5').value == ' O ' && move && ((arr['btn4'] == ' X ' && arr['btn6'] == ' X ') || (arr['btn2'] == ' X ' && arr['btn8'] == ' X '))){
    if(move && checkIfEqual('btn4', 'btn6', 'btn6', '  ')){
      checkVal('btn1');
    };
    if(move && checkIfEqual('btn4', 'btn6', 'btn6', '  ')){
      checkVal('btn3');
    };
    if(move  && checkIfEqual('btn2', 'btn8', 'btn8', '  ')){
      checkVal('btn3');
    };
    if(move && checkIfEqual('btn2', 'btn8', 'btn8', '  ')){
      checkVal('btn9');
    };
  };

  if(turn == 3 && document.getElementById('btn5').value == ' O ' && move){
    if(checkIfEqual('btn1', 'btn3', 'btn9', noVal)){
      if(!(checkIfEqual('btn1', 'btn2', 'btn3', noVal))){
        btnChanger('btn1');
      }else{
        btnChanger('btn9');
      };
    };
    if(checkIfEqual('btn3', 'btn9', 'btn7', noVal)){
      if(!(checkIfEqual('btn3', 'btn6', 'btn9', noVal))){
          btnChanger('btn3');
      }else{
          btnChanger('btn7');
      };
    };
    if(checkIfEqual('btn9', 'btn7', 'btn1', noVal)){
        if(!(checkIfEqual('btn9', 'btn8', 'btn7', noVal))){
            btnChanger('btn9');
        }else{
            btnChanger('btn1');
      };
    };
    if(checkIfEqual('btn7', 'btn1', 'btn3', noVal)){
      if(!(checkIfEqual('btn7', 'btn4', 'btn1', noVal))){
          btnChanger('btn7');
      }else{
          btnChanger('btn3');
      };
    };
  };

  //rule 5
  if(checkIfEqual('btn1', 'btn2', 'btn3', noVal) && checkIfEqual('btn1', 'btn4', 'btn7', noVal) && move){
    btnChanger('btn1');
  };
  if(checkIfEqual('btn1', 'btn2', 'btn3', noVal) && checkIfEqual('btn3', 'btn6', 'btn9', noVal) && move){
    btnChanger('btn3');
  };
  if(checkIfEqual('btn1', 'btn4', 'btn7', noVal) && checkIfEqual('btn7', 'btn8', 'btn9', noVal) && move){
    btnChanger('btn7');
  };
  if(checkIfEqual('btn7', 'btn8', 'btn9', noVal) && checkIfEqual('btn3', 'btn6', 'btn9', noVal) && move){
    btnChanger('btn9');
  };
  //rule 6
  if(checkIfEqual('btn1', 'btn2', 'btn3', noVal) && move){
    btnChanger('btn1');
  };
  if(checkIfEqual('btn7', 'btn8', 'btn9', noVal) && move){
    btnChanger('btn7');
  };
  //rule 7
  if(move){
    for(i=1; i<10; i++){
      if(arr['btn' + i] == '  '){
        btnChanger('btn' + i);
        i=10;
      };
    };
  };
};

//the function checks all winning possibilities
function check(val) {
  check2InARow('btn1', 'btn2', 'btn3', val);
  check2InARow('btn4', 'btn5', 'btn6', val);
  check2InARow('btn7', 'btn8', 'btn9', val);
  check2InARow('btn1', 'btn4', 'btn7', val);
  check2InARow('btn2', 'btn5', 'btn8', val);
  check2InARow('btn3', 'btn6', 'btn9', val);
  check2InARow('btn1', 'btn5', 'btn9', val);
  check2InARow('btn3', 'btn5', 'btn7', val);
};

//the function checks if there are 2 X's or O's in the line it gets
function check2InARow(box1, box2, box3, val) {
  if((arr[box1] == val && arr[box2] == val) || (arr[box1] == val && arr[box3] == val) || (arr[box2] == val && arr[box3] == val)){
    checkVal(box1);
    checkVal(box2);
    checkVal(box3);
  };
};

//the function checks if the values in the indexes of arr[] it gets, are equal
function checkIfEqual(box1, box2, box3, val) {
    if(arr[box1] == val && arr[box2] == val && arr[box3] == val){
      return true;
    };
};

//the function checks if the button is free to use or not
//if the button is free it call for btnChanger to set a value to it
function checkVal(box) {
  if(arr[box] == '  '){
    btnChanger(box);
  };
};
