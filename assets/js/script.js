// ============================================
//  script.js - Lista de Tarefas
// ============================================

// TODO 1: Crie uma variável chamada "contadorTarefas" iniciando em 0.
//         Ela vai controlar quantas tarefas existem na lista.

let contadorTarefas = 0;

// ============================================================
// FUNÇÃO: adicionarTarefa
// Objetivo: Ler o valor do input, criar um <li> com o texto
//           da tarefa e os botões de ação, e adicionar à lista.
// ============================================================
function adicionarTarefa() {
  const input = document.getElementById("inputTarefa");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar");
    return;
  }

  const lista = document.getElementById("lista");
  const item = document.createElement("li");

  item.innerHTML = `
  <span class="textoTarefa">${texto}</span>
  <div>
  <button onclick="concluirTarefa(this)">Concluir</button>
  <button onclick="removerTarefa(this)">Remover</button>
  </div>
  `;

  lista.appendChild(item);
  input.value = "";
  input.focus();

  contadorTarefas++;

  atualizarContador();
  // TODO 2: Obtenha o elemento input pelo id "inputTarefa" e
  //         armazene em uma constante chamada "input"
  // TODO 3: Leia o valor do input, removendo espaços em branco
  //         nas extremidades (.trim()), e armazene em "texto"
  // TODO 4: Valide o texto. Se estiver vazio, exiba um alert
  //         com a mensagem "Digite uma tarefa antes de adicionar!"
  //         e retorne (return) para interromper a função.
  // TODO 5: Obtenha o elemento <ul> pelo id "lista" e
  //         armazene em uma constante chamada "lista"
  // TODO 6: Crie um elemento <li> usando document.createElement
  //         e armazene em uma constante chamada "item"
  // TODO 7: Defina o innerHTML do "item" com o seguinte modelo:
  //
  //  <span class="textoTarefa">TEXTO_AQUI</span>
  //  <div>
  //    <button onclick="concluirTarefa(this)">✔ Concluir</button>
  //    <button onclick="removerTarefa(this)">✖ Remover</button>
  //  </div>
  //
  //  Substitua TEXTO_AQUI pela variável "texto"
  // TODO 8: Adicione o "item" como filho do elemento "lista"
  //         usando appendChild
  // TODO 9: Limpe o valor do input (input.value = "")
  //         e coloque o foco nele (input.focus())
  // TODO 10: Incremente a variável "contadorTarefas" em 1
  //          e chame a função atualizarContador()
}

// ============================================================
// FUNÇÃO: removerTarefa
// Recebe o botão clicado e remove o <li> pai correspondente.
// ============================================================
function removerTarefa(botao) {
  // TODO 11: A partir do "botao" recebido, acesse:
  //          botao → div pai → li avô
  //          Dica: use .parentElement duas vezes
  //          Armazene o <li> em uma constante "item"

  const item = botao.parentElement.parentElement;

  // TODO 12: Remova o "item" da lista usando item.remove()
  item.remove();
  // TODO 13: Decremente "contadorTarefas" em 1
  //          e chame atualizarContador()
  contadorTarefas--;
  atualizarContador();
}

// ============================================================
// FUNÇÃO: concluirTarefa
// Recebe o botão clicado e alterna a classe "concluida"
// no <span> com o texto da tarefa.
// ============================================================
function concluirTarefa(botao) {
  // TODO 14: A partir do "botao", acesse o <li> pai (dois .parentElement)
  //          e dentro dele selecione o elemento com a classe "textoTarefa"
  //          usando querySelector(".textoTarefa")
  //          Armazene em "span"
  const item = botao.parentElement.parentElement;
  const span = item.querySelector(".textoTarefa");

  // TODO 15: Alterne a classe "concluida" no "span"
  //          usando span.classList.toggle("concluida")

  span.classList.toggle("concluida");
}

// ============================================================
// FUNÇÃO: atualizarContador
// Atualiza o texto do elemento #contadorTexto com a
// quantidade atual de tarefas.
// ============================================================
function atualizarContador() {
  // TODO 16: Obtenha o elemento com id "contadorTexto"

  const contador = document.getElementById("contadorTexto");

  // TODO 17: Atualize o innerHTML do elemento com:
  //  - Se contadorTarefas === 0: "Nenhuma tarefa adicionada."
  //  - Se contadorTarefas === 1: "1 tarefa na lista."
  //  - Caso contrário: `${contadorTarefas} tarefas na lista.`
  //  Dica: use um if / else if / else
  if (contadorTarefas === 0) {
    contador.innerHTML = "Nenhuma tarefa foi adicionada";
  } else if (contadorTarefas === 1) {
    contador.innerHTML = "1 tarefa na lista";
  } else contador.innerHTML = `${contadorTarefas} tarefas na lista.`;
}
