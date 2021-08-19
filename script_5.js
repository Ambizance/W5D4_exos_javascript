const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
/*
Réalise un script script_5.js qui affichera dans la console les questions suivantes et leurs réponses :

Trouve le livre avec l'ID: 873495 ;
Supprime le livre avec l'ID: 133712 ;
Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
*/

// Est-ce que tous les livres ont été au moins empruntés une fois ?
once_borrowed  = function(entrepreneurs) {
    console.log("Tous les livres ont-ils été empruntés au moins une fois ? ")
    is_borrowed = 0
    books.forEach(book => {
        if(book.rented === 0){ is_borrowed ++ ; }
    })
    if (is_borrowed === 0) {
        console.log("Oui, tous les livres ont été empruntés au moins une fois ! :) ")
    }
    else {
        console.log("Non, tous les livres n'ont pas été empruntés au moins une fois ! :( ")
    }
}


//Quel est livre le plus emprunté ? Le moins emprunté ? 
const rented = function(books) {
console.log("Quel est le livre le + et le - emprunté ?")
    let ordered_list = books.sort(function(a, b){
        if(a.rented < b.rented) { return +1; }
        if(a.rented > b.rented) { return -1; }
        return 0;
    }) 
    console.log(`Le livre le + emprunté est : "${ordered_list[0].title}", il a été emprunté ${ordered_list[0].rented} fois ! :) ` )
    // console.log("Voici l'array des livres ordonné du + au - emprunté : ")
    console.log(`Le livre le - emprunté est : "${ordered_list[(ordered_list.length)-1].title}", il a été emprunté ${ordered_list[(ordered_list.length)-1].rented} fois ! :( `)
}

