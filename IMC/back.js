const calculaIMC = () => {
    const form = document.getElementById("imcForm");
    const altura = parseFloat(form.elements["altura"].value.replace(',', '.'));
    const peso = parseFloat(form.elements["peso"].value.replace(',', '.'));

    // Verifica se altura e peso são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }


    const imc = peso / (altura * altura);

    const imcImage = document.getElementById("imcImage");
    const imcMessage = document.getElementById("imcMessage");


    if (imc < 18.5) {
        imcMessage.textContent = "Você esta abaixo do peso.";
        imcImage.src = "imagens/muitoabaixo_do_peso.png";
    } else if (imc >= 18.5 && imc <= 24.9) {
        imcMessage.textContent = "Você esta com o peso saúdavel";
        imcImage.src = "imagens/peso_saudavel.png";
    } else if (imc >= 25 && imc <= 29.9) {
        imcMessage.textContent = "Você está com sobrepeso. Preste atenção.";
        imcImage.src = "imagens/sobre_peso.png";
    } else if (imc >= 30 && imc <= 34.9) {
        imcMessage.textContent = "Você está com obesidade grau 1. Considere procurar um médico.";
        imcImage.src = "imagens/obesidade_grau_1.png";
    } else if (imc >= 35 && imc <= 39.9) {
        imcMessage.textContent = "Você está com obesidade grau 2. Considere procurar um médico.";
        imcImage.src = "imagens/obesidade_grau_2.png";
    } else if (imc >= 40) {
        imcMessage.textContent = "Você está com obesidade grau 3. É importante procurar um médico.";
        imcImage.src = "imagens/obesidade_grau_4.png";
    }
};

// Definição da função fora da calculaIMC para que possa ser chamada do HTML
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const trigger = document.createElement('div');
    trigger.className = 'menu-trigger';
    trigger.textContent = '☰'; // Ícone de menu
    document.body.appendChild(trigger);

    // Função para mostrar o menu
    function showMenu() {
        menu.classList.add('show');
    }

    // Função para esconder o menu
    function hideMenu() {
        menu.classList.remove('show');
    }

    // Adiciona eventos para mostrar o menu quando o mouse passa sobre o ícone ou o menu
    trigger.addEventListener('mouseover', showMenu);
    menu.addEventListener('mouseover', showMenu);

    // Adiciona eventos para esconder o menu quando o mouse sai do ícone e do menu
    menu.addEventListener('mouseleave', hideMenu);
    trigger.addEventListener('mouseleave', function() {
        // Adiciona um atraso antes de esconder o menu para permitir interação
        setTimeout(hideMenu, 100);
    });
});