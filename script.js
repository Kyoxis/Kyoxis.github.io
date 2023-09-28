let chapters = {
    debut : {
        titre: `début insolite`,
        description: `Tu te réveilles dans une toilette qui pue et tu sors. Une fois sorti, tu entends une voix au loin... Veux-tu exploré les bruts suspects`,
        image: "./images/Shrek's_toilet.jpeg",
        bouttons : [ 
            {titre: 'Ignore la voix en détresse ', 'destination': 'goToChapter("ignore")'}, 
          
            {titre: 'Aller voir ce qui souffre autant', 'destination': 'goToChapter("aventure")'},
          ]
    },

    ignore : {
        titre: `mort solitaire`,
        description: `Tu as ignoré la voix qui se lamentait. Malheureusement, tu n'as aucune expertise en survie et tu meurs de faim au bout de 8 jours de souffrance !`,
        image: `images/faim.jpeg`,
        bouttons: [
            {titre: '... au début', 'destination': 'goToChapter("debut")'}, 
        ]    
    },

    aventure : {
        titre: `rencontre insolite`,
        description: `Tu trouves une créature humanoïde qui gémit de douleur près d'un pin; elle semble effrayée...`,
        image: `./images/trouve.jpeg`,
        bouttons: [
            {titre: 'Tu tente de la tuer', 'destination': 'goToChapter("defence")'},

            {titre: 'Tu fuis', 'destination': 'goToChapter("pitie")'},

            {titre: 'Tu essai de l\'aider', 'destination': 'goToChapter("aide")'},
        ]    
    },

    pitie : {
        titre: `hésitation`,
        description: `Tu fuis la créature, mais ton cœur te ramène à l'écoute des gémissements de la créature en détresse!`,
        image: `images/pense.jpeg`,
        bouttons: [{
            titre: '...', 'destination': 'goToChapter("debut")'}
        ]    
    },

    defence : {
        titre: `mort par auto-défence`,
        description: `La créature à un bon souper grâce à ton courage.`,
        image: `./images/bouffe.jpeg`,
        bouttons: [
            {titre: '... au début', 'destination': 'goToChapter("debut")'}
        ]    
    },

    aide : {
        titre: `Une méthode de secours`,
        description: `La créature est piégée par un piège à ours, sa jambe est coincée!`,
        image: `images/Peur.jpeg`,
        bouttons: [
            {titre: 'Tu utilises la force', 'destination': 'goToChapter("force")'},

            {titre: 'Tu calmes la créature', 'destination': 'goToChapter("rassure")'},

            {titre: 'Tu l\'aide sans parler', 'destination': 'goToChapter("silence")'}, 
        ]    
    },

    force : {
        titre: `Double suicide`,
        description: `La créature t'attaque de douleur puis vous mourrez les deux de  vos blessures.`,
        image: `./images/suicide.jpeg`,
        bouttons: [
            {titre: '... au début', 'destination': 'goToChapter("debut")'}
        ]    
    },

    rassure : {
        titre: `Affection sauvage`,
        description: `La créature semble très prise de toi... `,
        image: `./images/amour.jpeg`,
        bouttons: [
            {titre: 'tu accepte', 'destination': 'goToChapter("eternity")'},

            {titre: 'tu refuse', 'destination': 'goToChapter("briser")'}, 
        ]    
    },

    eternity : {
        titre: `Amour illusoir`,
        description: `Félicitations, tu es l'âme sœur du Wendigo!
        Dommage que tu vas te réveiller dans les toilettes!`,
        image: `images/confused.png`,
        bouttons: [{titre: 'refaire une partie', 'destination': 'goToChapter("debut")'}]    
    },

    brisé : {
        titre: `mort pour un rejet`,
        description: `Tu lui as brisé le cœur, donc la créature a pris le tien.`,
        image: `images/heart.jpeg`,
        bouttons: [
            {titre: '... au début', 'destination': 'goToChapter("debut")'}
        ]    
    },

    silence : {
        titre: `Aide silencieuse`,
        description: `La créature semble sourire et celle-ci te tend la main...`,
        image: `./images/amour.jpeg`,
        bouttons: [
            {titre: 'tu refuse', 'destination': 'goToChapter("briser")'}, 

            {titre: 'tu accepte', 'destination': 'goToChapter("incidieux")'}, 
        ]    
    },

    incidieux : {
        titre: `Piège`,
        description: `La créature t'a piégé et elle te tue`,
        image: `./images/piege.jpeg`,
        bouttons: [
            {titre: '... au début', 'destination': 'goToChapter("debut")'}
        ]    
    }
}


function goToChapter(clef) {
 if(chapters[clef]) {
    console.log(`${chapters[clef].titre} \n ${chapters[clef].description} \n \n option \n ---------------------------------------- \n ${chapters[clef].bouttons[0].titre} \n ${chapters[clef].bouttons[0].destination}`);
    if (chapters[clef].bouttons[1]) {
        console.log(`\n ${chapters[clef].bouttons[1].titre} \n ${chapters[clef].bouttons[1].destination}`);
    }
    if (chapters[clef].bouttons[2]) {
        console.log(`\n ${chapters[clef].bouttons[2].titre} \n ${chapters[clef].bouttons[2].destination}`);
    }
 }
 else {
    console.log(`fuck you`);
 }
}

goToChapter(`debut`);

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