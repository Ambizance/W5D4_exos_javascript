// "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  // Utilisateur rentre un nombre (par ex 5)
//     #
//    ##
//   ###
//  ####
// #####


floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?") 
let line = "#" ;
//Détermine le nombre d'espace la première ligne en fonction de l'étage puis l'écrit
for(let i = 1 ; i < floor -1  ; i++ ){
    line = " " + line ;
}
console.log(line + "\n") ; 

//Supprime un espace et rajoute un diez par rapport à la ligne précédente puis l'écrit
for(i = floor-1 ; i > 0 ; i--){
line = line.replace(" #"," ##")
console.log(line); 
}   




