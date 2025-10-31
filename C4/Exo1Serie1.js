// Exo1Serie1.js
window.C2_DATA = {
  series: {
    1: [
      // 1) ÊTRE — accord sujet fém. pluriel
      {
        type: 'E1',
        template: "C’est elles qui sont {PP} à la dernière minute.",
        altType: 'N',
        altTemplate: "Elles sont {PP} à la dernière minute.",
        verbBase: "arrivé",
        expectedEnding: "es",
        rationale: "Auxiliaire être → accord avec le sujet « elles » (fém. pl.) : arrivé + es → arrivées."
      },
      // 2) ÊTRE — accord sujet fém. singulier (apposition)
      {
        type: 'E2',
        template: "Marie, elle est {PP} très tôt ce matin.",
        altType: 'N',
        altTemplate: "Marie est {PP} très tôt ce matin.",
        verbBase: "parti",
        expectedEnding: "e",
        rationale: "Auxiliaire être → accord avec « Marie » (fém. sg.) : parti + e → partie."
      },
      // 3) AVOIR — invariable avec le sujet (E1)
      {
        type: 'E1',
        template: "C’est toi qui as {PP} cette décision.",
        altType: 'N',
        altTemplate: "Tu as {PP} cette décision.",
        verbBase: "pris",
        expectedEnding: "",
        rationale: "Auxiliaire avoir → pas d’accord avec le sujet : pris (invariable ici)."
      },
      // 4) AVOIR — invariable avec le sujet (apposition)
      {
        type: 'E2',
        template: "Nous, nous avons {PP} tout notre courage.",
        altType: 'N',
        altTemplate: "Nous avons {PP} tout notre courage.",
        verbBase: "gardé",
        expectedEnding: "",
        rationale: "Auxiliaire avoir → pas d’accord avec le sujet : gardé (invariable ici)."
      },
      // 5) ÊTRE — accord sujet masc. pluriel
      {
        type: 'E1',
        template: "C’est eux qui sont {PP} les premiers.",
        altType: 'N',
        altTemplate: "Ils sont {PP} les premiers.",
        verbBase: "venu",
        expectedEnding: "s",
        rationale: "Auxiliaire être → accord avec « eux/ils » (masc. pl.) : venu + s → venus."
      },
      // 6) ÊTRE — accord sujet fém. singulier (apposition)
      {
        type: 'E2',
        template: "La professeure, elle est {PP} dans la classe avant tout le monde.",
        altType: 'N',
        altTemplate: "La professeure est {PP} dans la classe avant tout le monde.",
        verbBase: "entré",
        expectedEnding: "e",
        rationale: "Auxiliaire être → accord avec « la professeure » (fém. sg.) : entré + e → entrée."
      }
    ]
  }
};
