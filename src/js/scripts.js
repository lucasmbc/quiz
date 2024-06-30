const questions = [
    "Quem foi o primeiro presidente do Brasil?",
    "Qual é o maior estado do Brasil em termos de área territorial?",
    "Quem foi a primeira mulher a ser eleita presidente do Brasil?",
    "Qual evento histórico brasileiro ocorreu no dia 7 de setembro de 1822?",
];
const options = [
    [
        "Getúlio Vargas",
        "Marechal Deodoro da Fonseca",
        "Juscelino Kubitschek",
        "Dom Pedro II",
    ],
    ["Amazonas", "Pará", "Mato Grosso", "Minas Gerais"],
    ["Dilma Rousseff", "Marina Silva", "Marta Suplicy", "Luiza Erundina"],
    [
        "Proclamação da República",
        "Independência do Brasil",
        "Abolição da escravatura",
        "Descobrimento do Brasil",
    ],
];
const correctAnswers = [1, 0, 0, 1];

let reloadButton = document.getElementById("reload");
reloadButton.style.display = "none";
let nowQuestion = Math.floor(Math.random() * questions.length);

generateQuestions();
selectButton();

function generateQuestions() {
    document.getElementById("question").innerHTML = questions[nowQuestion];

    const optionsContainer = document.querySelectorAll("button");
    optionsContainer.forEach((element, index) => {
        element.textContent = options[nowQuestion][index];
    });
}

function selectButton() {
    const alternatives = document.querySelectorAll(".alternative");

    alternatives.forEach((button) => {
        button.addEventListener("click", () => {
            const answer = button.value;
            checkAnswer(answer);
        });
    });
}

function checkAnswer(answer) {
    answer = parseInt(answer);
    let statusAnswer = document.getElementById("statusAnswer");
    if (answer == correctAnswers[nowQuestion]) {
        statusAnswer.innerHTML = "Acertou!!!";
    } else {
        console.log;
        statusAnswer.innerHTML = `Errou meu chapa, resposta correta ${
            options[nowQuestion][correctAnswers[nowQuestion]]
        }`;
    }
    reloadButton.style.display = "block";
}

document
    .getElementById("reload")
    .addEventListener("click", () => location.reload());
