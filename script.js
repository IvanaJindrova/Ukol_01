const stupen = Number(prompt("Zadej teplotu ve stupních Fahrenheita: "))

let citatel = 5 * (stupen - 32)
let stCelsia = citatel / 9

console.log(stCelsia)

document.body.innerHTML += "<p> Na troubě nastav " + Math.round(stCelsia) + " stupňů Celsia.</p>"