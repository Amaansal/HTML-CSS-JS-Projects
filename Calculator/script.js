const outputArea = document.querySelector('.js-output-area');
outputArea.innerHTML = '';
let calculation = '';


function updateOutput(number) {
  outputArea.innerHTML += number;
  calculation += number;
}

function operator(oper) {
  outputArea.innerHTML += oper;
  calculation+= oper;

}

function del(cond) {
  //if cond True = AC
  //if cond False = one backspace  
  if (cond) {
    calculation='';
    outputArea.innerHTML='';
  } else {
    if (outputArea.innerHTML ) {
      calculation = calculation.slice(0, -1);
      outputArea.innerHTML = outputArea.innerHTML.slice(0,-1);
      
    };
  };

};



function calculate() {
  const result = eval(calculation).toFixed(3);

  outputArea.innerHTML = result;
  calculation = String(result);

}