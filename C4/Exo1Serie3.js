// Exo1Serie3.js
window.C2_DATA = {
  series: {
    1: [
      // 1) ÊTRE — fém. pluriel (E1)
      {
        type: 'E1',
        template: "C’est elles qui sont {PP} de l’échelle.",
        altType: 'N',
        altTemplate: "Elles sont {PP} de l’échelle.",
        verbBase: "descendu",
        expectedEnding: "es",
        rationale: "Auxiliaire être → accord avec le sujet fém. pl. : descendu + es → descendues."
      },
      // 2) ÊTRE — masc. singulier (E2)
      {
        type: 'E2',
        template: "Le petit, il est {PP} en courant.",
        altType: 'N',
        altTemplate: "Le petit est {PP} en courant.",
        verbBase: "tombé",
        expectedEnding: "",
        rationale: "Auxiliaire être → accord avec « le petit » (masc. sg.) : tombé (terminaison nulle)."
      },
      // 3) AVOIR — invariable (E1)
      {
        type: 'E1',
        template: "C’est moi qui ai {PP} ce livre hier.",
        altType: 'N',
        altTemplate: "J’ai {PP} ce livre hier.",
        verbBase: "lu",
        expectedEnding: "",
        rationale: "Avec avoir, le participe ne s’accorde pas avec le sujet → lu (invariable)."
      },
      // 4) AVOIR — invariable (E2)
      {
        type: 'E2',
        template: "Les journalistes, ils ont {PP} l’annonce.",
        altType: 'N',
        altTemplate: "Les journalistes ont {PP} l’annonce.",
        verbBase: "entendu",
        expectedEnding: "",
        rationale: "Avec avoir, pas d’accord porté par le sujet → entendu (invariable)."
      },
      // 5) ÊTRE — fém. pluriel (E1)
      {
        type: 'E1',
        template: "C’est elles qui sont {PP} en 2012.",
        altType: 'N',
        altTemplate: "Elles sont {PP} en 2012.",
        verbBase: "né",
        expectedEnding: "es",
        rationale: "Auxiliaire être → accord fém. pl. : né + es → nées."
      },
      // 6) ÊTRE — fém. singulier (E2)
      {
        type: 'E2',
        template: "La directrice, elle est {PP} jusqu’à la fin.",
        altType: 'N',
        altTemplate: "La directrice est {PP} jusqu’à la fin.",
        verbBase: "resté",
        expectedEnding: "e",
        rationale: "Auxiliaire être → accord avec « la directrice » (fém. sg.) : resté + e → restée."
      }
    ]
  }
};
