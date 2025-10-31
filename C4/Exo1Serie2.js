// Exo1Serie2.js
window.C2_DATA = {
  series: {
    1: [
      // 1) ÊTRE — accord sujet fém. pluriel (E1)
      {
        type: 'E1',
        template: "C’est Anna et Zoé qui sont {PP} au musée.",
        altType: 'N',
        altTemplate: "Anna et Zoé sont {PP} au musée.",
        verbBase: "allé",
        expectedEnding: "es",
        rationale: "Auxiliaire être → accord avec sujet fém. pl. : allé + es → allées."
      },
      // 2) ÊTRE — accord sujet masc. singulier (E2)
      {
        type: 'E2',
        template: "Paul, il est {PP} de bonne heure.",
        altType: 'N',
        altTemplate: "Paul est {PP} de bonne heure.",
        verbBase: "parti",
        expectedEnding: "",
        rationale: "Auxiliaire être → accord avec sujet masc. sg. : parti (terminaison nulle)."
      },
      // 3) AVOIR — invariable avec le sujet (E1)
      {
        type: 'E1',
        template: "C’est vous qui avez {PP} ces erreurs.",
        altType: 'N',
        altTemplate: "Vous avez {PP} ces erreurs.",
        verbBase: "corrigé",
        expectedEnding: "",
        rationale: "Avec avoir, le participe ne s’accorde pas avec le sujet → corrigé (invariable)."
      },
      // 4) AVOIR — invariable avec le sujet (E2)
      {
        type: 'E2',
        template: "Les enfants, ils ont {PP} le vase.",
        altType: 'N',
        altTemplate: "Les enfants ont {PP} le vase.",
        verbBase: "cassé",
        expectedEnding: "",
        rationale: "Avec avoir, accord non porté par le sujet → cassé (invariable)."
      },
      // 5) ÊTRE — accord sujet pluriel (E1)
      {
        type: 'E1',
        template: "C’est nous qui sommes {PP} derrière vous.",
        altType: 'N',
        altTemplate: "Nous sommes {PP} derrière vous.",
        verbBase: "passé",
        expectedEnding: "s",
        rationale: "Auxiliaire être → accord avec « nous » (par défaut masc. pl.) : passé + s → passés."
      },
      // 6) ÊTRE — accord sujet fém. singulier (E2)
      {
        type: 'E2',
        template: "La reine, elle est {PP} au balcon.",
        altType: 'N',
        altTemplate: "La reine est {PP} au balcon.",
        verbBase: "monté",
        expectedEnding: "e",
        rationale: "Auxiliaire être → accord avec « la reine » (fém. sg.) : monté + e → montée."
      }
    ]
  }
};
