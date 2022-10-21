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
console.log(media(9, 5, 6));
classific();