let btnPlay = document.getElementById('btnPlay')

btnPlay.addEventListener("click", RandomQuestion);



let items = [
    "L ennemi du jeune Mowgli, le serpent Kaa, était en fait son ami dans le livre écrit par Rudyard Kipling, Le Livre de la jungle.",
    "Jafar et son méchant complice Iago (le perroquet), se font pulvériser à la fin du film Aladdin.",
    "Dans La Belle et la Bête, le méchant et machiste Gaston mange des épinards pour être « le Roi des balèzes. »."
];

function RandomQuestion(items)
{
    return items[Math.floor(Math.random()*items.length)];
}
console.log(RandomQuestion(items));

let saveQuestion = RandomQuestion(items)
const p = document.querySelector('.question');
p.innerHTML += saveQuestion


// function showQuestion(items){
//     let saveQuestion = RandomQuestion(items)
//     const p = document.querySelector('.question');
//     p.innerHTML = saveQuestion
// }