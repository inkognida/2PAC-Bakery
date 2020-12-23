function equation() {
    var a = parseInt(document.getElementById('firstNumber').value);
    var b = parseInt(document.getElementById('secondNumber').value);
    var c = parseInt(document.getElementById('thirdNumber').value);
    var per = (a+b+c)/2
    console.log(per)
    var square = Math.sqrt(per*(per-a)*(per-b)*(per-c));
    document.getElementById('answer').value = square;
  }
  function cancel() {
    document.getElementById('firstNumber').value = null;
    document.getElementById('secondNumber').value = null;
    document.getElementById('thirdNumber').value = null;
    document.getElementById('answer').value = null;
 
  }
  