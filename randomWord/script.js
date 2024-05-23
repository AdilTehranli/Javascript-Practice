let btn = document.querySelector(".card button")
let card = document.querySelector(".card")

let wordsH2= [" Never hit a man when he is down.","Two heads are better than one."," East or West, home is best"]
let wordsP = ["Robert","Alex","Yulia"]

function randomWordGenerator() {
    const randomIndex = Math.floor(Math.random() * wordsH2.length)
    const randomParag = Math.floor(Math.random() * wordsP.length)
    const randomH2= wordsH2[randomIndex]
    const randomP= wordsP[randomParag]
    document.querySelector(".card h2").innerHTML = randomH2
    document.querySelector(".card p").innerHTML = randomP
}

btn.addEventListener("click", randomWordGenerator)