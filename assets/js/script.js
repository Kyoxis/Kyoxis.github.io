const chapters = {
  debut: {
    titre: `Début insolite`,
    description: `Tu te réveilles dans une toilette qui pue et tu sors. Une fois sorti, tu entends une voix au loin... Veux-tu exploré les bruits suspects?`,
    image: "./assets/images/Shrek's_toilet.jpeg",
    bouttons: [
      {
        titre: "1- Ignore la voix en détresse ",
        destination: "ignore",
      },

      {
        titre: "2- Aller voir ce qui souffre autant",
        destination: "aventure",
      },
    ],
  },

  ignore: {
    titre: `Mort solitaire`,
    description: `Tu as ignoré la voix qui se lamentait. Malheureusement, tu n'as aucune expertise en survie et tu meurs de soif au bout de 4 jours de souffrance !`,
    image: `assets/images/faim.jpeg`,
    musique: `you_died_music.mp3`,
    audio: `./assets/effecs/death_by_ignore.mp3`,
    audioVolume: 0.5,
    bouttons: [{ titre: "... au début", destination: "debut" }],
  },

  aventure: {
    titre: `Rencontre insolite`,
    description: `Tu trouves une créature humanoïde qui gémit de douleur près d'un pin; elle semble effrayée...`,
    image: `./assets/images/trouve.jpeg`,
    audio: `./assets/effecs/huh_aventure.mp3`,
    musique: `musique_jeu_romance_horreur.mp3`,
    bouttons: [
      {
        titre: "1- Tu tente de la tuer",
        destination: "defence",
      },

      { titre: "2- Tu fuis", destination: "pitie" },

      { titre: "3- Tu essai de l'aider", destination: "aide" },
    ],
  },

  pitie: {
    titre: `Hésitation`,
    description: `Tu fuis la créature, mais ton cœur te ramène à l'écoute des gémissements de la créature en détresse!`,
    image: `./assets/images/pense.jpeg`,
    musique: `musique_jeu_romance_horreur.mp3`,
    audio: `./assets/effecs/guilty_heart.mp3`,
    bouttons: [
      {
        titre: "...",
        destination: "debut",
      },
    ],
  },

  defence: {
    titre: `Mort par autodéfense`,
    description: `La créature à un bon souper grâce à ton courage.`,
    musique: `you_died_music.mp3`,
    image: `./assets/images/bouffe.jpeg`,
    audio: `./assets/effecs/cris_mort.mp3`,
    audioVolume: 0.5,
    bouttons: [{ titre: "... au début", destination: "debut" }],
  },

  aide: {
    titre: `Une méthode de secours`,
    description: `La créature est piégée par un piège à ours, sa jambe est coincée!`,
    musique: `musique_jeu_romance_horreur.mp3`,
    audio: `./assets/effecs/help.mp3`,
    audioVolume: 0.2,
    image: `./assets/images/Peur.jpeg`,
    video: `./assets/video/traped_mp4_1920_1080.mp4`,
    bouttons: [
      { titre: "1- Tu utilises la force", destination: "force" },

      {
        titre: "2- Tu calmes la créature",
        destination: "rassure",
      },

      {
        titre: "3- Tu l'aide sans parler",
        destination: "silence",
      },
    ],
  },

  force: {
    titre: `Double suicide`,
    description: `La créature t'attaque de douleur puis vous mourrez les deux de  vos blessures.`,
    image: `./assets/images/suicide.jpeg`,
    musique: `you_died_music.mp3`,
    audio: `./assets/effecs/cris_mort.mp3`,
    audioVolume: 0.5,
    bouttons: [{ titre: "... au début", destination: "debut" }],
  },

  rassure: {
    titre: `Affection sauvage`,
    description: `La créature semble très prise de toi... `,
    image: `./assets/images/amour.jpeg`,
    musique: `musique_jeu_romance_horreur.mp3`,
    audio: `./assets/effecs/thank_you_rassure.mp3`,
    audioVolume: 1,
    bouttons: [
      { titre: "1- tu accepte", destination: "eternity" },

      { titre: "2- tu refuse", destination: "briser" },
    ],
  },

  eternity: {
    titre: `Amour illusoire`,
    description: `Félicitations, tu es l'âme sœur du Wendigo!
        Dommage que tu vas te réveiller dans les toilettes!`,
    image: `./assets/images/confused.png`,
    musique: `tu_as_jouer_pour_rein.mp3`,
    bouttons: [{ titre: "refaire une partie", destination: "debut" }],
  },

  briser: {
    titre: `Mort pour un rejet`,
    description: `Tu lui as brisé le cœur, donc la créature a pris le tien.`,
    image: `./assets/images/heart.jpeg`,
    video: `./assets/video/broken_mp4_1920_1080.mp4`,
    musique: `you_died_music.mp3`,
    audio: `./assets/effecs/cris_mort.mp3`,

    audioVolume: 0.5,
    bouttons: [{ titre: "... recommencez...", destination: "debut" }],
  },

  silence: {
    titre: `Aide silencieuse`,
    description: `La créature semble sourire et celle-ci te tend la main...`,
    image: `./assets/images/amour.jpeg`,
    musique: `musique_jeu_romance_horreur.mp3`,
    audio: `./assets/effecs/help_silent.mp3`,
    bouttons: [
      { titre: "1- tu accepte", destination: "incidieux" },
      { titre: "2- tu refuse", destination: "briser" },
    ],
  },

  incidieux: {
    titre: `Piège`,
    description: `La créature t'a piégé et elle te tue`,
    image: `./assets/images/piege.jpeg`,
    musique: `you_died_music.mp3`,
    audio: `./assets/effecs/incidieux_soundeffect.mp3`,
    audioVolume: 0.5,
    bouttons: [{ titre: "... au début", destination: "debut" }],
  },
};

let image = document.querySelector(`#back`);
let titre = document.querySelector(`h1`);
let description = document.querySelector(`p`);
let audio = document.createElement(`audio`);
let video = document.querySelector(`video`);
const musique = document.createElement(`audio`);
musique.volume = 0.3;
let muted = document.getElementById("mute");

/*mutebtn.addEventListener (change, fn(){
si ma valeur est à décoché, joue la musique ambiante
sinon ferme la

})*/
if(!muted.checked){
  setTimeout(function () {
  window.speechSynthesis.speak(msg);
  }, 1000);
}else{
 window.speechSynthesis.pause(msg);
 window.speechSynthesis.currentTime = 0;
}


muted.addEventListener('change', function() {
  //if muted === checked fait ceci!
  if(this.checked) {
    musique.pause();
    audio.pause();
    window.speechSynthesis.muted;
    window.speechSynthesis.currentTime = 0;
  }else{
    //if not fait ca!
    musique.play();
    audio.play();
    window.speechSynthesis.speak(msg);
  }
});

// Supprime tous les boutons enfants du div .boutons

const bouttons = document.querySelector(".boutons");
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.lang = "fr";
msg.volume = 5;
msg.rate = 1;
msg.pitch = 1;
msg.voice = voices[1];

function goToChapter(clef) {
  localStorage.setItem("sauvegarde", clef);
  while (bouttons.firstChild) {
    bouttons.removeChild(bouttons.firstChild);
  }
  window.speechSynthesis.cancel(msg);
  let chapitre = chapters[clef];
  if (chapitre) {
    titre.innerText = chapitre.titre;
    image.src = chapitre.image;
    description.innerText = chapitre.description;
    console.log(`${chapitre.titre} \n ${chapitre.description}`);
    let arr = chapitre.bouttons;
    msg.text = chapitre.description;

    arr.forEach((boutton) => {
      console.log(`\n \n ${boutton.titre} \n ${boutton.destination}`);
      if ("speechSynthesis" in window) {
        // Speech Synthesis supported 🎉
      } else {
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
      }
    });

    if (chapitre.audio && !muted.checked) {
      audio.src = chapitre.audio;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    if (chapitre.audioVolume) {
      audio.volume = chapitre.audioVolume;
    }

    if (chapitre.video) {
      video.classList.remove(`hidden`);
      image.classList.add(`hidden`);
      video.src = chapitre.video;
      video.play();
      video.currentTime = 0;
    } else {
      video.classList.add(`hidden`);
      image.classList.remove(`hidden`);
    }

    if (
      !musique.src.endsWith(chapitre.musique) &&
      chapitre.musique != undefined && !muted.checked
    ) {
      musique.src = "./assets/music/" + chapitre.musique;
      musique.play();
      console.log("New sound");
      console.log("chapter son -" + chapitre.musique);
      console.log("current son -" + musique.src);
    }

    for (let i = 0; i < chapitre.bouttons.length; i++) {
      // on crée un nouveau bouton
      const nouveauBtn = document.createElement("button");
      // on applique un libellé au boutons
      nouveauBtn.textContent = chapitre.bouttons[i].titre;
      // on appele goToChapter lorsqu'on clique le bouton
      nouveauBtn.addEventListener("click", () => {
        // la destination, c'est la destination du bouton!
        goToChapter(chapitre.bouttons[i].destination);
      });
      // enfin, on ajoute le bouton dans la page Web (dans le DOM)

      bouttons.appendChild(nouveauBtn);
    }
  } else {
    console.log(`there's nothing here human!`);
  }

}

let save = localStorage.getItem("sauvegarde");

if (save == null) {
  goToChapter(`debut`);
} else {
  goToChapter(save);
  console.log("save");
  console.log(save);
}

document.querySelector("#reset").addEventListener("click", () => {
  localStorage.clear();
  console.log(localStorage);
  goToChapter(`debut`);
});

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

//mon readme.md revient toujours en miniuscule à l'aide!

