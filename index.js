// Code your solutions in this file
function writeCards(name, msg = "surprise") {
    let cards = []
    for (let i = 0; i < name.length; i++) {
    cards.push(`Thank you, ${name[i]}, for the wonderful ${msg} gift!`)
    }
    return cards   
}

function countDown(n) {
    let count = n
    while(count >= 0) {
    console.log(count)
    count -= 1
}}