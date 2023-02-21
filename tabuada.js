function calculatabuada() {
  // obtendo do DOM o tbody da tabela
  let tabuada = document.querySelector("#tabuada tbody");
  // obtendo e convertendo o valor do input valorA
  let valorA = parseInt(document.querySelector("#valorA").value);
  // limpando o conteúdo do tbody
  tabuada.innerHTML = "";
  // criando um laço de repetição de 0 a 10
  for (let valorB = 0; valorB <= 10; valorB++) {
    // calculando o resultado da linha atual
    let resultado = valorA * valorB;
    // criando o template das colunas da linha atual
    let template = `     
    
    <td>${valorA}</td>
    <td>*</td>
    <td>${valorB}</td>
    <td>=</td>
    <td>${resultado}</td>
    `;
    // criando o elemnto tr
    let tr = document.createElement("tr");
    // inserindo as colunas nas linhas
    tr.innerHTML = template;
    // inseridno a linha na tabela
    tabuada.append(tr);
  }
}

// chmando a nossa função pela primeira vez
calculatabuada();
// adcionando o evento de alteração ao campo número
document.querySelector("#valorA").addEventListener("change", calculatabuada);
