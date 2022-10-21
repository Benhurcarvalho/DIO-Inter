// introdução as variáveis condicionais

// let numero = 15;

// let numeroDivisivelPor5 = (numero % 5) === 0;

// if (numero === 0 && numero === 5) {
//     console.log('número inválido')
// }
// else if (numeroDivisivelPor5) {
//     console.log('sim') 
// }
// else {
//     console.log('não')
// }
const typeFuel = 'Gasolina';
const fuelPriceE = 5.79;
const fuelPriceG = 6.66;
const priceKm = 10;
const distanceKm = 193;
function fValorGasto () {
    const listrosGasto = distanceKm / priceKm;
    let valorGasto = 0;
    if (typeFuel === 'Etanol') {
        valorGasto = listrosGasto * fuelPriceE;
    } else {
        valorGasto = listrosGasto * fuelPriceG;
    }
return valorGasto.toFixed(2)
}


console.log(fValorGasto());
