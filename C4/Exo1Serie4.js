// Exo1Serie4.js
window.C2_DATA = {
  series: {
    1: [
      // 1) ÊTRE — masc. pl. (E1)
      {
        type: 'E1',
        template: "C’est eux qui sont {PP} par la mauvaise porte.",
        altType: 'N',
        altTemplate: "Ils sont {PP} par la mauvaise porte.",
        verbBase: "sorti",
        expectedEnding: "s",
        rationale: "Auxiliaire être → accord avec « eux/ils » (masc. pl.) : sorti + s → sortis."
      },
      // 2) ÊTRE — fém. sg. (E2)
      {
        type: 'E2',
        template: "Ma sœur, elle est {PP} à Lyon pour deux ans.",
        altType: 'N',
        altTemplate: "Ma sœur est {PP} à Lyon pour deux ans.",
        verbBase: "parti",
        expectedEnding: "e",
        rationale: "Auxiliaire être → accord avec « ma sœur » (fém. sg.) : parti + e → partie."
      },
      // 3) AVOIR — invariable (E1)
      {
        type: 'E1',
        template: "C’est nous qui avons {PP} la bonne réponse.",
        altType: 'N',
        altTemplate: "Nous avons {PP} la bonne réponse.",
        verbBase: "choisi",
        expectedEnding: "",
        rationale: "Avec avoir, pas d’accord porté par le sujet → choisi (invariable ici)."
      },
      // 4) AVOIR — invariable (E2)
      {
        type: 'E2',
        template: "Le professeur, il a {PP} le poème par cœur.",
        altType: 'N',
        altTemplate: "Le professeur a {PP} le poème par cœur.",
        verbBase: "appris",
        expectedEnding: "",
        rationale: "Avec avoir, le participe ne s’accorde pas avec le sujet → appris (invariable)."
      },
      // 5) ÊTRE — masc. sg. (E1)
      {
        type: 'E1',
        template: "C’est lui qui est {PP} de voyage ce matin.",
        altType: 'N',
        altTemplate: "Il est {PP} de voyage ce matin.",
        verbBase: "revenu",
        expectedEnding: "",
        rationale: "Auxiliaire être → accord avec « il » (masc. sg.) : revenu (terminaison nulle)."
      },
      // 6) ÊTRE — fém. pl. (E2)
      {
        type: 'E2',
        template: "Les athlètes, elles sont {PP} très vite après la pause.",
        altType: 'N',
        altTemplate: "Les athlètes sont {PP} très vite après la pause.",
        verbBase: "retourné",
        expectedEnding: "es",
        rationale: "Auxiliaire être → accord avec « elles » (fém. pl.) : retourné + es → retournées."
      }
    ]
  }
};
