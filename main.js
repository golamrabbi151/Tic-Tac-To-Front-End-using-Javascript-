var tbldata_one = document.querySelector('#t1');
var tbldata_two = document.querySelector('#t2');
var tbldata_three = document.querySelector('#t3');
var tbldata_fore = document.querySelector('#t4');
var tbldata_five = document.querySelector('#t5');
var tbldata_six = document.querySelector('#t6');
var tbldata_seven = document.querySelector('#t7');
var tbldata_eight = document.querySelector('#t8');
var tbldata_nine = document.querySelector('#t9');


var reset = document.querySelector('#rbtn');
var item = document.querySelectorAll('td');
  function clearBoard(){
    for (var i = 0; i < item.length; i++) {
      item[i].textContent = '';
    }
  }

reset.addEventListener('click',clearBoard);


tbldata_one.addEventListener('click',function(){
  tbldata_one.textContent = "X";
});
tbldata_one.addEventListener('dblclick',function(){
  tbldata_one.textContent = "O";
});



tbldata_two.addEventListener('click',function(){
  tbldata_two.textContent = "X";
});
tbldata_two.addEventListener('dblclick',function(){
  tbldata_two.textContent = "O";
});



tbldata_three.addEventListener('click',function(){
  tbldata_three.textContent = "X";
});
tbldata_three.addEventListener('dblclick',function(){
  tbldata_three.textContent = "O";
});



tbldata_fore.addEventListener('click',function(){
  tbldata_fore.textContent = "X";
});
tbldata_fore.addEventListener('dblclick',function(){
  tbldata_fore.textContent = "O";
});



tbldata_five.addEventListener('click',function(){
  tbldata_five.textContent = "X";
});
tbldata_five.addEventListener('dblclick',function(){
  tbldata_five.textContent = "O";
});




tbldata_six.addEventListener('click',function(){
  tbldata_six.textContent = "X";
});
tbldata_six.addEventListener('dblclick',function(){
  tbldata_six.textContent = "O";
});




tbldata_seven.addEventListener('click',function(){
  tbldata_seven.textContent = "X";
});
tbldata_seven.addEventListener('dblclick',function(){
  tbldata_seven.textContent = "O";
});





tbldata_eight.addEventListener('click',function(){
  tbldata_eight.textContent = "X";
});
tbldata_eight.addEventListener('dblclick',function(){
  tbldata_eight.textContent = "O";
});



tbldata_nine.addEventListener('click',function(){
  tbldata_nine.textContent = "X";
});
tbldata_nine.addEventListener('dblclick',function(){
  tbldata_nine.textContent = "O";
});
