function multiploDeA (a, N) {
    let soma = 0
    for (let i = 1; i <= N; i++) {
        if (i % a === 0) {
            return soma = soma + i
        } 
    }
    return soma
}
multiploDeA (3, 18);