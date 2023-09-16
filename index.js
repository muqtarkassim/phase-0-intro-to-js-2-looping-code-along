// Code your solutions in this file
name=["Guadalupe","Ollie","Aki"];
function writeCards(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
}

const names = ["Guadalupe", "Ollie", "Aki"];
const messages = writeCards(names);
console.log(messages);
writeCards()

function countDown(number){
    for(let i=number;i>=0;i--){
        console.log(i)
    }
    return number
}

countDown(10)