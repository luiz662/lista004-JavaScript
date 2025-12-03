// Obtém o elemento de saída
const outputDivDoWhile = document.getElementById('output_do_while');

// Função principal para executar o exercício
function executarExercicioDoWhile(numero) {
    let titulo = `Resultado do Exercício ${numero} (Do-While): `;
    let resultado = "";

    switch (numero) {
        case 1:
            resultado = exercicio1_doWhile();
            break;
        case 2:
            resultado = exercicio2_doWhile();
            break;
        case 3:
            resultado = exercicio3_doWhile();
            break;
        case 4:
            resultado = exercicio4_doWhile(); // Usa prompt
            break;
        case 5:
            resultado = exercicio5_doWhile(); // Usa prompt
            break;
        case 6:
            resultado = exercicio6_doWhile(); // Usa prompt
            break;
        case 7:
            resultado = exercicio7_doWhile(); // Usa prompt
            break;
        case 8:
            resultado = exercicio8_doWhile(); // Usa prompt
            break;
        case 9:
            resultado = exercicio9_doWhile(); // Usa prompt
            break;
        case 10:
            resultado = exercicio10_doWhile();
            break;
        case 11:
            resultado = exercicio11_doWhile(); // Usa prompt
            break;
        case 12:
            resultado = exercicio12_doWhile();
            break;
        case 13:
            resultado = exercicio13_doWhile(); // Usa prompt
            break;
        case 14:
            resultado = exercicio14_doWhile(); // Usa prompt
            break;
        case 15:
            resultado = exercicio15_doWhile(); // Usa prompt
            break;
        default:
            resultado = "Exercício não encontrado.";
    }

    outputDivDoWhile.innerHTML = `${titulo}\n\n${resultado}`;
}

// --- Funções de Resolução com Do-While ---

// 1) Exibir números de 1 a 10
function exercicio1_doWhile() {
    let num = 1;
    let resultado = "1 a 10: ";
    do {
        resultado += num + " ";
        num++;
    } while (num <= 10);
    return resultado;
}

// 2) Calcular a soma dos números de 1 a 100
function exercicio2_doWhile() {
    let contador = 1;
    let soma = 0;
    do {
        soma += contador;
        contador++;
    } while (contador <= 100);
    return `A soma de 1 a 100 é: ${soma}`;
}

// 3) Exibir números pares de 1 a 50
function exercicio3_doWhile() {
    let num = 2; // Começa pelo primeiro par
    let pares = "Pares de 1 a 50: ";
    do {
        pares += num + " ";
        num += 2;
    } while (num <= 50);
    return pares;
}

// 4) Ler 5 números e calcular a média
function exercicio4_doWhile() {
    let contador = 0;
    let soma = 0;
    const totalNumeros = 5;
    let listaNumeros = "";

    do {
        const entrada = prompt(` Digite o ${contador + 1}º número inteiro:`);
        const numero = parseInt(entrada);

        if (!isNaN(numero)) {
            soma += numero;
            listaNumeros += numero + (contador < totalNumeros - 1 ? ", " : "");
            contador++;
        } else {
            alert("Entrada inválida. Tente novamente.");
        }
    } while (contador < totalNumeros);
    
    const media = soma / totalNumeros;
    return `Números lidos: ${listaNumeros}\nSoma: ${soma}\nMédia: ${media.toFixed(2)}`;
}

// 5) Tabuada de um número
function exercicio5_doWhile() {
    const entrada = prompt(" Digite um número inteiro para a tabuada:");
    const num = parseInt(entrada);

    if (isNaN(num)) {
        return "Entrada inválida. Tente novamente.";
    }

    let multiplicador = 1;
    let tabuada = `Tabuada do ${num}:\n`;

    do {
        const resultado = num * multiplicador;
        tabuada += `${num} x ${multiplicador} = ${resultado}\n`;
        multiplicador++;
    } while (multiplicador <= 10);
    
    return tabuada;
}

// 6) Divisores de um número positivo
function exercicio6_doWhile() {
    const entrada = prompt(" Digite um número inteiro positivo para encontrar seus divisores:");
    const num = parseInt(entrada);

    if (isNaN(num) || num <= 0) {
        return "Entrada inválida. Digite um número inteiro positivo.";
    }

    let divisor = 1;
    let divisores = `Divisores de ${num}: `;

    do {
        if (num % divisor === 0) {
            divisores += divisor + " ";
        }
        divisor++;
    } while (divisor <= num);
    
    return divisores;
}

// 7) Verificar se é um número primo
function exercicio7_doWhile() {
    const entrada = prompt("[Ex 7 Do-While] Digite um número inteiro para verificar se é primo:");
    const num = parseInt(entrada);

    if (isNaN(num) || num <= 1) {
        return `${num} NÃO é primo.`;
    }

    let divisor = 2;
    let ehPrimo = true;

    // Se o número for 2, o loop nem executa, mas ehPrimo já é true (correto)
    if (num > 2) { 
        do {
            if (num % divisor === 0) {
                ehPrimo = false;
                break;
            }
            divisor++;
        } while (divisor * divisor <= num);
    }
    
    return `O número ${num} ${ehPrimo ? 'é primo' : 'NÃO é primo'}.`;
}

// 8) Sequência de Fibonacci até o número lido (limite máximo do termo)
function exercicio8_doWhile() {
    const entrada = prompt(" Digite um número inteiro (limite máximo do termo) para Fibonacci:");
    const limite = parseInt(entrada);

    if (isNaN(limite) || limite < 0) {
        return "Por favor, insira um número inteiro não negativo.";
    }

    let a = 0;
    let b = 1;
    let temp;
    let fibonacci = `Fibonacci até ${limite}: `;

    // Se o limite for 0, o 'a=0' é adicionado e o loop para.
    do {
        fibonacci += a + ", ";
        temp = a + b;
        a = b;
        b = temp;
    } while (a <= limite);

    // Remove a última vírgula e espaço
    // Nota: Se limite for 0, teremos "0, " e slice(-2) remove a vírgula e espaço.
    // Se o último termo foi adicionado antes de estourar o limite, removemos a última vírgula.
    return fibonacci.slice(0, -2);
}

// 9) Média de idade de 5 pessoas
function exercicio9_doWhile() {
    let contador = 0;
    let somaIdades = 0;
    const totalPessoas = 5;
    let detalhes = "";

    do {
        const nome = prompt(` Digite o nome da ${contador + 1}ª pessoa:`);
        const entradaIdade = prompt(` Digite a idade de ${nome}:`);
        const idade = parseInt(entradaIdade);

        if (nome && !isNaN(idade) && idade >= 0) {
            somaIdades += idade;
            detalhes += `- ${nome}: ${idade} anos\n`;
            contador++;
        } else {
            alert("Entrada inválida. Tente novamente para a mesma pessoa.");
        }
    } while (contador < totalPessoas);

    const mediaIdades = somaIdades / totalPessoas;
    return `${detalhes}\nSoma total das idades: ${somaIdades}\nMédia das idades: ${mediaIdades.toFixed(2)}`;
}

// 10) Primeiros 20 números da sequência de Fibonacci
function exercicio10_doWhile() {
    const limite = 20;
    let contador = 0;
    let a = 0;
    let b = 1;
    let temp;
    let fibonacci = "Primeiros 20 termos: ";

    do {
        fibonacci += a + (contador < limite - 1 ? ", " : "");
        temp = a + b;
        a = b;
        b = temp;
        contador++;
    } while (contador < limite);
    
    return fibonacci;
}

// 11) Soma de todos os números pares entre 1 e o número lido
function exercicio11_doWhile() {
    const entrada = prompt(" Digite um número inteiro (N):");
    const N = parseInt(entrada);

    if (isNaN(N) || N < 2) {
        return "Por favor, insira um número inteiro maior ou igual a 2.";
    }

    let somaPares = 0;
    let num = 2; // Começa com o primeiro par

    // Usa um 'if' para garantir que o 'do-while' só rode se houver pares para somar
    if (num <= N) {
        do {
            somaPares += num;
            num += 2;
        } while (num <= N);
    }

    return `Número limite (N): ${N}\nA soma dos números pares entre 1 e ${N} é: ${somaPares}`;
}

// 12) Exibir números ímpares de 1 a 50
function exercicio12_doWhile() {
    let num = 1; // Começa pelo primeiro ímpar
    let impares = "Ímpares de 1 a 50: ";

    do {
        impares += num + " ";
        num += 2;
    } while (num <= 50);
    
    return impares;
}

// 13) Exibir dígitos de um número separadamente
function exercicio13_doWhile() {
    const entrada = prompt(" Digite um número inteiro para ver seus dígitos separados:");
    const numOriginal = parseInt(entrada);

    if (isNaN(numOriginal)) {
        return "Entrada inválida. Por favor, insira um número inteiro.";
    }

    let num = Math.abs(numOriginal);
    let resultado = "";

    if (num === 0) {
        resultado = "Dígitos: 0";
    } else {
        let temp = num;
        let digitos = [];

        do {
            let digito = temp % 10;
            digitos.unshift(digito); // Adiciona no início (ordem correta)
            temp = Math.floor(temp / 10);
        } while (temp > 0);
        
        resultado = "Dígitos: " + digitos.join(", ");
    }
    
    return `Número original: ${numOriginal}\n${resultado}`;
}

// 14) Calcular o fatorial de um número
function exercicio14_doWhile() {
    const entrada = prompt("[Ex 14 Do-While] Digite um número inteiro não negativo para o Fatorial:");
    const N = parseInt(entrada);

    if (isNaN(N) || N < 0) {
        return "Por favor, insira um número inteiro não negativo válido.";
    }

    let fatorial = 1;
    let contador = 1;
    let formula = "";

    // O do-while executa pelo menos uma vez, o que funciona bem para N=0 (1!)
    if (N === 0) {
        return `O Fatorial de 0 (0!) é: 1`;
    }

    do {
        fatorial *= contador;
        formula += contador + (contador < N ? " x " : "");
        contador++;
    } while (contador <= N);
    
    return `O Fatorial de ${N} (${N}!) é: ${fatorial}\nCálculo: ${formula}`;
}

// 15) Média de idade de várias pessoas (loop com parada "fim")
function exercicio15_doWhile() {
    let nome = "";
    let somaIdades = 0;
    let totalPessoas = 0;
    let listaPessoas = "";

    do {
        nome = prompt(" Digite o nome da pessoa (ou 'fim' para encerrar):");

        // Verifica a condição de parada antes de processar
        if (nome && nome.toLowerCase() === "fim") {
            break;
        }

        if (nome) {
            const entradaIdade = prompt(` Digite a idade de ${nome}:`);
            const idade = parseInt(entradaIdade);

            if (!isNaN(idade) && idade >= 0) {
                somaIdades += idade;
                totalPessoas++;
                listaPessoas += `- ${nome}: ${idade} anos\n`;
            } else {
                alert(`Idade inválida para ${nome}. Esta pessoa será desconsiderada.`);
            }
        } else {
            alert("Nome não pode ser vazio. Digite novamente.");
        }
    } while (true); // Loop infinito que é interrompido pelo 'break'

    if (totalPessoas > 0) {
        const mediaIdades = somaIdades / totalPessoas;
        return `Pessoas computadas:\n${listaPessoas}\nTotal de Pessoas: ${totalPessoas}\nMédia das Idades: ${mediaIdades.toFixed(2)}`;
    } else {
        return "Nenhuma pessoa foi computada para o cálculo da média.";
    }
}