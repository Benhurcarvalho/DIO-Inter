// 1 faça um algorítimo que que dado 3 notas tiradas por um aluno em um trimestre da faculdade calcule e umprima a sua média e sua classificação conforme a tabela abaixo:

// M = (nota1 + nota2 + nota3) / 3;

//     classificação:
//      M menor que 5 = reprovado;
//      M entre 5 e 7 = recuperação;
//      M maior que 7 = aprovado;

const media = (n1, n2, n3) => ((n1 + n2 + n3) / 3).toFixed(2);
function classific () {
    if (media(9, 5, 6) < 5){
        console.log('reprovado');
    }
    else if (media(9, 5, 6) >= 5 && media(9, 5, 6) <= 7) {
        console.log('recuperação');
    }
    else if (media(9, 5, 6) > 7) {
        console.log('aprovado');
    }
}
// console.log(media(9, 5, 6));
// classific();

// 2 Elabora um algorítimo que calcule o IMC

//     Fomula do IMC {
//         IMC = peso / (altura ** 2)
//     }

//     dependendo do resultado, imprima

// - abaixo de 18.5 'abaixo do peso';
// - entre 18.5 e 25 'peso ideal';
// - entre 25 e 30 'acima do peso';
// - entre 30 e 40 'obeso';
// - acima de 40 'obesidade grave'

const imc = (peso, altura) => {
    let resultado = (peso / (altura ** 2)).toFixed(2);

    if (resultado < 18.5) {
        return('abaixo do peso');
    }
    else if (resultado <= 25) {
        return('peso ideal');
    }
    else if (resultado <= 30) {
        return('acima do peso');
    }
    else if (resultado <= 40) {
        return('obeso');
    }
    else {
        return('obesidade grave')
    }
}

// console.log(imc(68,1.65))

// 3 Elabore um algorítimo que calculer o que deve ser pago por um produto, considerando 
// o preço normal de etiqueta e a escolha da opção de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e 
// efetuar o cálculo.

//     código para condição de pagamento:
//     - à vista no débito - 10% de desconto; 1
//     - à vista no dinheiro ou no pix - 15% de desconto; 2
//     - em 2x - preço da etiqueta; 3
//     - acima de 2x - 10% de juros. 4

function formaDePagamento (valor, opc) {
    let valorFinal = 0;

    if (opc === 1) {
        valorFinal = valor - valor * 0.1;
    }
    else if (opc === 2) {
        valorFinal = valor - valor * 0.15;
    }
    else if (opc === 3) {
        valorFinal = valor;
    }
    else {
        valorFinal = valor * 1.1;
    }

    return valorFinal.toFixed(2)
}

// console.log(formaDePagamento(100, 4))

