// clear display//
function clearDisplay() {
  document.getElementById('display').value = "";
}

// display value //
function display(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  var a = document.getElementById('display').value;
  var b = eval(a);
  document.getElementById('display').value= b;

}
