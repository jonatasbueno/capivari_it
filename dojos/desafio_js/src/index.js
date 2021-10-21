// contruindo um array
const linhas = [];

// pegou as referencias do html
const btnAdd = document.getElementById('btnAdd');
const table = document.getElementById('table-body');


btnAdd.addEventListener('click', function (event) {
  // evita que a pagina seja recarregada a cada evento de submit
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  // definindo um objeto
  const novaLinha = { nome, idade };

  // adicionando um novo elemento no array
  linhas.push(novaLinha);

  //chamar a funcao imprimeLinhas
  imprimeLinhas();
})

function imprimeLinhas() {
  //console.table(linhas);
  let novaLinha = "<tbody>";

  let linhasParaImpressao = linhas.map(function (linha) {
    return `<tr>
    <td>${linha.nome}</td>
    <td>${linha.idade}</td>
    <td class="column-delete">
      <button type="button" class="btn btn-warning">Excluir</button>
    </td>
    </tr>`
  });

  linhasParaImpressao = linhasParaImpressao.join("");

  novaLinha += linhasParaImpressao;
  novaLinha += "</tbody>";
  table.innerHTML = novaLinha;
}