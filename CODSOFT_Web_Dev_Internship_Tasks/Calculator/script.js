let result = "";
function press(val) { result += val; document.getElementById("display").value = result; }
function calculate() { document.getElementById("display").value = eval(result); result = ""; }