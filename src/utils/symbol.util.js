export const concatSymbols = (symbols) => {
    let concatenation = ''
    symbols.forEach(symbol => {
        concatenation = concatenation.concat(
            typeof symbol === 'string' ? symbol : symbol.description ?? ''
        )
    })

    return concatenation
}
