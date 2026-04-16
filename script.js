const projetos = [
  {
    nome: "Projeto de Leitura",
    descricao: "Atividades para incentivar o hábito da leitura nos anos iniciais."
  },
  {
    nome: "Alfabetização Lúdica",
    descricao: "Uso de jogos e dinâmicas para facilitar a alfabetização."
  },
  {
    nome: "Projeto Matemática Divertida",
    descricao: "Ensino de matemática com atividades práticas e interativas."
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  container.appendChild(div);
});