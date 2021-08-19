const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
const filtre70 = function(entrepreneurs) {
    let list_seventies = [] ;
    entrepreneurs.forEach(rich => {
        if(rich.year > 1969 && rich.year < 1980 ){
            list_seventies.push(` ${rich.first} ${rich.last}`)
            }
        })
        console.log(`Ces entrepreneurs sont nés dans les années 70 : ${list_seventies}`)

    }

// Sors une array qui contient le prénom et le nom des entrepreneurs ;
const names_1 = function(entrepreneurs) {
    let names_list = [] ;
    entrepreneurs.forEach(rich => {
            names_list.push(` ${rich.first} ${rich.last}`)
        })
        console.log(`Voici les noms et prénoms des entrepreneurs : ${names_list}`)
    }

//VARIANTE
// Sors une array qui contient le prénom et le nom des entrepreneurs DANS DES CHAINES LITTERALLES

const names_2 = function(entrepreneurs) {
    let entrepreneurs_names = []
    entrepreneurs.forEach(rich => {
        // console.log(rich) ; 
        delete rich.year ;
        // console.log(rich) ;
        entrepreneurs_names.push(rich)
    })
    console.log("Voici les noms et prénoms des entrepreneurs : ")
    console.log(entrepreneurs_names)
    }

//Quel âge aurait chaque inventeur aujourd'hui ?

const age = function(entrepreneurs) {
    let year_now = new Date().getFullYear()
    entrepreneurs.forEach(rich => {
        let age = year_now - rich.year ; 
        console.log(`${rich.first} ${rich.last} aurait ${age} ans aujourd'hui`) 
    })
 }

 
//Trie les entrepreneurs par ordre alphabétique du nom de famille.
const ordered = function(entrepreneurs) {
    let ordered_list = entrepreneurs.sort(function(a, b){
        if(a.last < b.last) { return -1; }
        if(a.last > b.last) { return 1; }
        return 0;
    })
    console.log("Voici l'array des entrepreneurs classé par ordre alphabétique selon leur nom : ")
    console.log(ordered_list)
}