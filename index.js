// Code your solutions in this file

//The for loop
/*
for (let age =30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/

//Using for with arrays
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++)
    {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/

//Assignment



function writeCards(names, day){
    const ans = []
    for (let i = 0; i < names.length; i++){
        ans[i] = `Thank you, ${names[i]}, for the wonderful ${day} gift!`;

    }
    return ans;
}

console.log (writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));



function countDown(num){

    while(num >= 0){
        console.log(num);
        num --;
    }

}