var textInput = document.querySelector('#input-text');
var outInput = document.querySelector('#output-text');

function cripto() {
  var texto = textInput.value;

  var resultCripto = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  document.getElementById('output-text').innerHTML = resultCripto;
}

function descripto() {
  var texto = textInput.value;

  var resultDescripto = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  document.getElementById('output-text').innerHTML = resultDescripto;
}

function copy() {
  var textCopy = document.getElementById('output-text').value;
  navigator.clipboard.writeText(textCopy);
  alert('Texto copiado com sucesso.');
}
