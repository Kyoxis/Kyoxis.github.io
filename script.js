let chapters = {
    debut : {
        titre: `début insolite`,
        description: `Tu te réveilles dans une toilette qui pue et tu sors. Une fois sorti, tu entends une voix au loin... Veux-tu exploré les bruts suspects`,
        image: ``,
        bouttons : [ 
            {titre: 'ignore la voix en détresse ', 'destination': 'type goToChapter("ignore")'}, 
          
            {titre: 'aller voir ce qui souffre autant', 'destination': 'type goToChapter("aventure")'},
          ]
    },

    ignore : {
        titre: `mort solitaire`,
        description: `Tu as ignoré la voix qui se lamentait. Malheureusement, tu n'as aucune expertise en survie et tu meurs de faim au bout de 8 jours de souffrance !`,
        image: ``,
        bouttons: [
            {titre: 'retour au début', 'destination': 'type goToChapter("debut")'}, 
        ]    
    },

    aventure : {
        titre: `rencontre insolite`,
        description: `Tu trouves une créature humanoïde qui gémit de douleur près d'un pin; elle semble effrayée...`,
        image: ``,
        bouttons: [
            {titre: 'tu tente de la tuer', 'destination': 'type goToChapter("defence")'},

            {titre: 'tu fuis', 'destination': 'type goToChapter("pitie")'},

            {titre: 'tu essai de l\'aider', 'destination': 'type goToChapter("aide")'},
        ]    
    },

    pitie : {
        titre: `hésitation`,
        description: `Tu fuit la créature, mais ton coeur te ramène à l'écoute des gémissements de la créature en détresse!`,
        image: ``,
        bouttons: [{
            titre: '...', 'destination': 'type goToChapter("debut")'}
        ]    
    },

    defence : {
        titre: `mort par auto-défence`,
        description: `La créature à un bon souper grâce ton courage.`,
        image: ``,
        bouttons: [
            {titre: 'retour au début', 'destination': 'type goToChapter("debut")'}
        ]    
    },

    aide : {
        titre: `Une méthode de secours`,
        description: `La créature est piégé par un piège à ours, sa jambe est coincé!`,
        image: ``,
        bouttons: [
            {titre: 'tu utilise la force', 'destination': 'type goToChapter("force")'},

            {titre: 'tu calme la créature', 'destination': 'type goToChapter("rassure")'},

            {titre: 'tu l\'aide sans parler', 'destination': 'type goToChapter("silence")'}, 
        ]    
    },

    force : {
        titre: `double suicide`,
        description: `La créature t'attaque de douleur puis vous mourrez les deux de  vos blessures.`,
        image: ``,
        bouttons: [
            {titre: 'retour au début', 'destination': 'type goToChapter("debut")'}
        ]    
    },

    rassure : {
        titre: `affection sauvage`,
        description: `La créature semble très prise de toi... `,
        image: ``,
        bouttons: [
            {titre: 'tu accepte', 'destination': 'type goToChapter("eternity")'},

            {titre: 'tu refuse', 'destination': 'type goToChapter("briser")'}, 
        ]    
    },

    eternity : {
        titre: `amour illusoir`,
        description: `Félicitation, tu est l'âme soeur du Wendigo!
        Domage que tu vas te réveiller dans les toilettes!`,
        image: ``,
        bouttons: [{titre: 'refaire une partie', 'destination': 'type goToChapter("debut")'}]    
    },

    brisé : {
        titre: `mort pour un rejet`,
        description: `Tu lui a brisé le coeur, donc la créature à prit le tien.`,
        image: ``,
        bouttons: [
            {titre: 'retour au début', 'destination': 'type goToChapter("debut")'}
        ]    
    },

    silence : {
        titre: `aide silencieuse`,
        description: `La créature semble sourir et celle-ci te tend la main...`,
        image: `wendigo`,
        bouttons: [
            {titre: 'tu refuse', 'destination': 'type goToChapter("briser")'}, 

            {titre: 'tu accepte', 'destination': 'type goToChapter("incidieux")'}, 
        ]    
    },

    incidieux : {
        titre: `piège`,
        description: `La créature t'a piégé et elle te tue`,
        image: ``,
        bouttons: [
            {titre: 'retour au début', 'destination': 'type goToChapter("debut")'}
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