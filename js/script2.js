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

const container = document.querySelector(".container");

  contestants.forEach((ele) => {
      let avg = 0;
      for(let i = 0; i < ele.scores.length; i++) {
        avg += ele.scores[i]
      }
      avg /= ele.scores.length;
      ele.avg = avg;
      console.log(avg);
  });

  contestants.sort(function (a, b) {
    return b.avg - a.avg;
});

console.log(contestants);

for(let i = 0; i < 3; i++) {
    container.innerHTML += `<div> <h1>rank ${i +1} </h1>
                            <h2> ${contestants[i].firstName} ${contestants[i].lastName} </h2>
                            <p>average score: ${contestants[i].avg} </p><p>scores: ${contestants[i].scores}</p></div>`
}