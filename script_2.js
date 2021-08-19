// Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24"


let number = prompt("De quel nombre veux-tu calculer la factorielle ?")
let facto = 1
for(n = number ; n > 0 ; n --){
    facto = n * facto
}

console.log(`Le résultat de ${number}! est ${facto}`)

