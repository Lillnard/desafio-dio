//VARIAVEL QUE DETERMINA O NOME DO HERÓI
let nomeDoHeroi = "Lillnard - O caça-ratos"

//VARIAVEL QUE DETERMINA A QUANTIDADE DE XP (APÓS CAÇAR MUITOS RATOS)
let xp = 9967564975867566856;

//CONDIÇÃO PARA DETERMINAR QUAL O NIVEL DO HERÓI BASEADO NA QUANTIDADE DE XP OBTIDA
    if (xp <= 1000) {
    console.log("O Herói chamado " + nomeDoHeroi + " está no nível FERRO")
    } else if (xp >= 1001 && xp < 2000) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no nível BRONZE")
    } else if (xp >= 2001 && xp < 5000) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no nível PRATA")
    } else if (xp >= 5001 && xp < 7000) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no nível OURO")
    }else if (xp >= 7001 && xp < 8000) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no nível PLATINA")
    }else if (xp >= 8001 && xp < 9000) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no nível ASCENDENTE")
    }else if (xp >= 9001 && xp <= 10000) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no nível IMORTAL")
    }else {
        console.log("Nível máximo alcançado... Parabéns!!! O Herói chamado " + nomeDoHeroi + " está no nível RADIANTE")
    }