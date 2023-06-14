var textInput = document.querySelector('#input-text');
var outInput = document.querySelector('#output-text');
var originalText = '';

function cripto() {
  var texto = textInput.value;

  var resultCripto = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  originalText = texto;
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

  originalText = texto;
  document.getElementById('output-text').innerHTML = resultDescripto;
}

function reset() {
  textInput.value = '';
  document.getElementById('output-text').innerHTML = '<img class="message-img" src="img/quasimoto.gif"alt="gif"><h2>Nenhuma mensagem encontrada</h2><p>Digite um texto que você deseja criptografar ou descriptografar.</p>';
}

function copy() {
  var textCopy = document.getElementById('output-text').innerHTML;
  navigator.clipboard.writeText(textCopy);
  alert('Texto copiado com sucesso.');
}

let counter = 0;
let imagem = document.querySelector('body');

function changeBackground() {
  if (counter % 2 == 0) {
    imagem.style.backgroundImage = "url(../img/light.jpg)";
  } else {
    imagem.style.backgroundImage = "url(../img/teste2.webp)";
  }
  counter++;
}