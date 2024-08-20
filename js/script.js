let vetor = [];

function adicionarValor() {
  const valor = (document.getElementById('valor').value);
  vetor.push(valor);

  const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];
  const novaLinha = tabela.insertRow();
  const celula = novaLinha.insertCell(0);
  celula.textContent = valor;

  document.getElementById('valor').value = '';
}

var arr = ['banana', 'maçã', 'uva', 'maçã', 'pera', 'uva'];
var novaArr = arr.filter(function(este, i) {
    return arr.indexOf(este) === i;
});
console.log(novaArr); //dá ['foo', 'bar']