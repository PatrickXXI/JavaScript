const calculaIMC = () => {
    const form = document.getElementById("imcForm");
    const altura = parseFloat(form.elements["altura"].value.replace(',', '.'));
    const peso = parseFloat(form.elements["peso"].value.replace(',', '.'));

    // Verifica se altura e peso são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    // Verifica se a altura e o peso são positivos e não nulos
    if (altura <= 0 || peso <= 0) {
        alert("Altura e peso devem ser números positivos.");
        return;
    }

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert("Você está abaixo do peso.");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Você está com o peso saudável.");
    } else if (imc >= 25 && imc <= 29.9) {
        alert("Você está com sobrepeso. Preste atenção.");
    } else if (imc >= 30 && imc <= 34.9) {
        alert("Você está com obesidade grau 1. Considere procurar um médico.");
    } else if (imc >= 35 && imc <= 39.9) {
        alert("Você está com obesidade grau 2. Considere procurar um médico.");
    } else if (imc >= 40) {
        alert("Você está com obesidade grau 3. É importante procurar um médico.");
    }
};

// Definição da função fora da calculaIMC para que possa ser chamada do HTML
const exibirMensagem = () => {
    document.getElementById("mensagem").innerText = "Olá, este é um texto exibido com JavaScript!";
}