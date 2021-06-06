export const numToBracketRound = {
    16 : 'top16',
    8 : 'quarters',
    4 : 'semis',
    2 : 'finals'
}

export const BracketRoundToNum = (b) => {
    return Object.keys(numToBracketRound).find(key => numToBracketRound[key] === b); 
} 