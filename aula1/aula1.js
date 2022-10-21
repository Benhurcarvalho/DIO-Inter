// Faça um programa para calcular o valor de uma viagem.

//     Você terá três variáveis, sendo elas:
    
//         1 - preço do combustível;
//         2 - gasto médio de combustível por Km;
//         3 - distância em KM da viagem;

// Imprima no console o gasto total com a viagem:

const fuelPrice = 5.79;
const priceKm = 10;
const distanceKm = 193;
function fValorGasto () {

const listrosGasto = distanceKm / priceKm;
const valorGasto = listrosGasto * fuelPrice;
return valorGasto.toFixed(2)
}


console.log(fValorGasto());
