// exoAnalyse_data.js
window.exoData = {
  phrases: [
    {
      id: "p1",
      raw: "Mais hier, l’équipe a joué très bien, dans le grand stade.",
      tokens: [
        {text:"Mais", role:"tok"},
        {text:"hier", role:"tok"},
        {text:",", role:"punct"},
        {text:"l’équipe", role:"tok", nom:"equipe"},      // sujet (tête)
        {text:"a joué", role:"tok", verbe:true},          // verbe
        {text:"très", role:"tok"},
        {text:"bien", role:"tok"},
        {text:",", role:"punct"},
        {text:"dans", role:"tok", isPreposition:true},
        {text:"le", role:"tok"},
        {text:"grand", role:"tok"},
        {text:"stade", role:"tok", nom:"stade"},
        {text:".", role:"punct"}
      ],
      zones: [
        // groupe prépo : "dans le grand stade"
        { from: 9, to: 11, expected:"cpl", prepIndex: 8 }
      ],
      npGroups: [
        // verbe
        { from: 4, to: 4, kind:"verb" },
        // sujet
        { from: 3, to: 3, kind:"sujet" }
        // (pas d'attribut ni CVD dans cet exemple)
      ]
    },

    {
      id: "p2",
      raw: "Les supporters ont chanté avec de belles chansons jusqu’à minuit.",
      tokens: [
        {text:"Les", role:"tok"},
        {text:"supporters", role:"tok", nom:"supporters"},
        {text:"ont chanté", role:"tok", verbe:true},
        {text:"avec", role:"tok", isPreposition:true},
        {text:"de", role:"tok", isPreposition:true},
        {text:"belles", role:"tok"},
        {text:"chansons", role:"tok", nom:"chansons"},
        {text:"jusqu’à", role:"tok", isPreposition:true},
        {text:"minuit", role:"tok", nom:"minuit"},
        {text:".", role:"punct"}
      ],
      zones: [
        // "de belles chansons" (régime de 'avec') → CN attendu
        { from: 5, to: 6, expected:"cn", prepIndex: 4 },
        // "jusqu’à minuit" → CPT attendu
        { from: 8, to: 8, expected:"cpt", prepIndex: 7 }
      ],
      npGroups: [
        // verbe
        { from: 2, to: 2, kind:"verb" },
        // sujet
        { from: 0, to: 1, kind:"sujet" }
      ]
    },

    {
      id: "p3",
      raw: "Il parle avec calme au téléphone le soir.",
      tokens: [
        {text:"Il", role:"tok", nom:"il"},
        {text:"parle", role:"tok", verbe:true},
        {text:"avec", role:"tok", isPreposition:true},
        {text:"calme", role:"tok", nom:"calme"},
        {text:"au", role:"tok", isPreposition:true},
        {text:"téléphone", role:"tok", nom:"telephone"},
        {text:"le", role:"tok"},
        {text:"soir", role:"tok", nom:"soir"},
        {text:".", role:"punct"}
      ],
      zones: [
        { from: 3, to: 3, expected:"cpm", prepIndex: 2 }, // avec calme → manière
        { from: 5, to: 5, expected:"cpl", prepIndex: 4 }  // au téléphone → lieu
      ],
      npGroups: [
        { from: 1, to: 1, kind:"verb" },            // verbe
        { from: 0, to: 0, kind:"sujet" },           // sujet
        { from: 7, to: 7, kind:"cpnp" }             // CP sans préposition: "le soir"
      ]
    }
  ]
};
