let chapters = {
  debut: {
    titre: `Début insolite`,
    description: `Tu te réveilles dans une toilette qui pue et tu sors. Une fois sorti, tu entends une voix au loin... Veux-tu exploré les bruts suspects`,
    image: "./images/Shrek's_toilet.jpeg",
    bouttons: [
      {
        titre: "1- Ignore la voix en détresse ",
        destination: 'goToChapter("ignore")',
      },

      {
        titre: "2- Aller voir ce qui souffre autant",
        destination: 'goToChapter("aventure")',
      },
    ],
  },

  ignore: {
    titre: `Mort solitaire`,
    description: `Tu as ignoré la voix qui se lamentait. Malheureusement, tu n'as aucune expertise en survie et tu meurs de faim au bout de 8 jours de souffrance !`,
    image: `images/faim.jpeg`,
    bouttons: [{ titre: "... au début", destination: 'goToChapter("debut")' }],
  },

  aventure: {
    titre: `Rencontre insolite`,
    description: `Tu trouves une créature humanoïde qui gémit de douleur près d'un pin; elle semble effrayée...`,
    image: `./images/trouve.jpeg`,
    bouttons: [
      {
        titre: "1- Tu tente de la tuer",
        destination: 'goToChapter("defence")',
      },

      { titre: "2- Tu fuis", destination: 'goToChapter("pitie")' },

      { titre: "3- Tu essai de l'aider", destination: 'goToChapter("aide")' },
    ],
  },

  pitie: {
    titre: `Hésitation`,
    description: `Tu fuis la créature, mais ton cœur te ramène à l'écoute des gémissements de la créature en détresse!`,
    image: `images/pense.jpeg`,
    bouttons: [
      {
        titre: "...",
        destination: 'goToChapter("debut")',
      },
    ],
  },

  defence: {
    titre: `Mort par autodéfense`,
    description: `La créature à un bon souper grâce à ton courage.`,
    image: `./images/bouffe.jpeg`,
    bouttons: [{ titre: "... au début", destination: 'goToChapter("debut")' }],
  },

  aide: {
    titre: `Une méthode de secours`,
    description: `La créature est piégée par un piège à ours, sa jambe est coincée!`,
    image: `images/Peur.jpeg`,
    bouttons: [
      { titre: "1- Tu utilises la force", destination: 'goToChapter("force")' },

      {
        titre: "2- Tu calmes la créature",
        destination: 'goToChapter("rassure")',
      },

      {
        titre: "3- Tu l'aide sans parler",
        destination: 'goToChapter("silence")',
      },
    ],
  },

  force: {
    titre: `Double suicide`,
    description: `La créature t'attaque de douleur puis vous mourrez les deux de  vos blessures.`,
    image: `./images/suicide.jpeg`,
    bouttons: [{ titre: "... au début", destination: 'goToChapter("debut")' }],
  },

  rassure: {
    titre: `Affection sauvage`,
    description: `La créature semble très prise de toi... `,
    image: `./images/amour.jpeg`,
    bouttons: [
      { titre: "1- tu accepte", destination: 'goToChapter("eternity")' },

      { titre: "2- tu refuse", destination: 'goToChapter("briser")' },
    ],
  },

  eternity: {
    titre: `Amour illusoire`,
    description: `Félicitations, tu es l'âme sœur du Wendigo!
        Dommage que tu vas te réveiller dans les toilettes!`,
    image: `images/confused.png`,
    bouttons: [
      { titre: "refaire une partie", destination: 'goToChapter("debut")' },
    ],
  },

  brisé: {
    titre: `Mort pour un rejet`,
    description: `Tu lui as brisé le cœur, donc la créature a pris le tien.`,
    image: `images/heart.jpeg`,
    bouttons: [{ titre: "... au début", destination: 'goToChapter("debut")' }],
  },

  silence: {
    titre: `Aide silencieuse`,
    description: `La créature semble sourire et celle-ci te tend la main...`,
    image: `./images/amour.jpeg`,
    bouttons: [
      { titre: "1- tu refuse", destination: 'goToChapter("briser")' },

      { titre: "2- tu accepte", destination: 'goToChapter("incidieux")' },
    ],
  },

  incidieux: {
    titre: `Piège`,
    description: `La créature t'a piégé et elle te tue`,
    image: `./images/piege.jpeg`,
    bouttons: [{ titre: "... au début", destination: 'goToChapter("debut")' }],
  },
};

function goToChapter(clef) {
  let chapitre = chapters[clef];
  if (chapitre) {
    console.log(`${chapitre.titre} \n ${chapitre.description}`);
    let arr = chapitre.bouttons;
    arr.forEach((bouton) => {
      console.log(`\n \n ${bouton.titre} \n ${bouton.destination}`);
    });
  } else {
    console.log(`there's nothing here human!`);
  }
}

goToChapter(`debut`);
 /*` \n \n options \n ---------------------------------------- \n ${chapters[clef].bouttons[0].titre} \n ${chapters[clef].bouttons[0].destination}\n ${chapters[clef].bouttons[1].titre} \n ${chapters[clef].bouttons[1].destination} \n \n ${chapters[clef].bouttons[2].titre} \n ${chapters[clef].bouttons[2].destination}`*/
/*chapters = {
    debut: {
         le titre
         la description
         l'image,
         Un tableau des boutons (chaque bouton est un objet qui contient un titre et une destination)
    },
     cle2 : 
     cle3 : 
     etc.
};
 
fonction goToChapter(chapter) {
    Si le chapitre existe
        On affiche avec console.log() son titre, sa description et ses boutons (clés)
    Sinon
        Afficher un message d'erreur
}
 
 Ici on doit appeler la fonction pour faire apparaitre le premier chapitre au chargement de la page.*/

//couleurs #040f0f, #6f1d1b, #657153, #e0e2db, #e5dcc5
