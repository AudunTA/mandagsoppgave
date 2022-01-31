const contestants = [
    {
      firstName: "Silje",
      lastName: "Kristiansen",
      birthYear: 1991,
      scores: [19, 22, 10, 15, 17],
    },
    {
      firstName: "Anja",
      lastName: "Torgeirsdottir",
      birthYear: 1993,
      scores: [18, 90, 15, 16, 14],
    },
    {
      firstName: "Emma",
      lastName: "Larsen",
      birthYear: 1990,
      scores: [22, 17, 26, 24, 32],
    },
    {
      firstName: "Olga",
      lastName: "Elvrum",
      birthYear: 1989,
      scores: [23, 122, 29, 30, 17],
    },
    {
        firstName: "Olgas",
        lastName: "Elvrumee",
        birthYear: 1989,
        scores: [2, 12, 29, 30, 8],
      },
      {
        firstName: "Audun",
        lastName: "Elvrumee",
        birthYear: 1989,
        scores: [2, 12, 29, 130, 8],
      },
      {
        firstName: "Elisabeth",
        lastName: "Elvrumee",
        birthYear: 1989,
        scores: [2, 12, 23, 30, 8],
      },
  ];

 
emptyArray =[];
for(let i=0; i < contestants.length; i++) {
    console.log(contestants[i].firstName);
    const score = getScore(contestants[i].scores);
    emptyArray.push({firstName: contestants[i].firstName,lastName: contestants[i].lastName, birthYear: contestants[i].birthYear, scores: score});
}

function getScore(score) {
    let total =0;
    for(let i in score) {
        //console.log(score[i]);   
        total += score[i];
        let ny = total;

    }return total
}

emptyArray.sort(function (a, b) {
    return a.scores - b.scores;
});
console.log(emptyArray);
let number = 3;
let year = 2022;
const length = emptyArray.length;
console.log(length);
const arrayLenght = length-number;
const container = document.querySelector(".container");
for(let i= 0; i < 3; i++) {
    console.log(arrayLenght+i);
    container.innerHTML += `<div> <h2> navn: ${emptyArray[arrayLenght+i].firstName} ${emptyArray[arrayLenght+i].lastName}</h2><h4>alder:${year -emptyArray[arrayLenght+i].birthYear}</h4>  <p> sammenlagt score: ${emptyArray[arrayLenght+i].scores}</div>`;
}

//   Bruk listen av objekter til å oppdatere nettsiden med hvem som har vunnet sammenlagt i verdenscuppen i solo-rumpeldunk. Gjennomsnittet av scores gir sammenlagt seier. Du må selv lage fornuftig HTML, og supplimentere med JavaScript. De tre beste sammenlagt skal vises på siden. Ranking, sammenlagt score, beste score, fult navn og alder skal vises. Hvordan dette vises er opp til deg.



// const container = document.querySelector(".container");

// function start () {
//     let totalsum = 0;
//     for(let i =0; i < contestants.length; i++){
//         let score = contestants[i].scores;
//         let getTotalScore = getScore(contestants[i].scores);
//         console.log(getTotalScore);
//         if(totalsum < getTotalScore) {
//                         container.innerHTML += `<div> <h4>${contestants[i].firstName}</h4> <p> totalscore: ${getTotalScore} </p></div>`;
//                         console.log(contestants[i].firstName);
//                         totalsum = getTotalScore;
//         }
//         else {
//             console.log("y "+getTotalScore);
//         }
//     } console.log("høyeste: " + totalsum);
// }
// //console.log(totalsum);

// function getScore(score) {
//     let total =0;
//     for(let i in score) {
//         //console.log(score[i]);   
//         total += score[i];
//         let ny = total;
        
        
        
//     }
//     return total
// }

// start();

