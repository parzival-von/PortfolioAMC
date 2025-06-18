console.log('proyectos.js cargado');
// Esperar a que i18next esté disponible antes de definir proyectosPorTema
function getProyectosPorTema() {
  return {
    "interactivos": [
      {
        "titulo": i18next.t('projects.castellEmotion.title'),
        "descripcion": i18next.t('projects.castellEmotion.desc'),
        "programas": ["Unity", "C#", "Blender", "Maya"],
        "enlace": "https://ddd.uab.cat/pub/tfg/2024/303715/TFG_MartinezCorona_Asier.pdf",
        "media": {
          "imagenes": [
            "img/castellEmotion/castellEmotion1.webp",
            "img/castellEmotion/castellEmotion2.webp",
            "img/castellEmotion/castellEmotion3.webp"
          ],
          "video": "video/castellEmotionVideo.mp4"
        }
      },
      {
        "titulo": i18next.t('projects.orbitails.title'),
        "descripcion": i18next.t('projects.orbitails.desc'),
        "programas": [
          "Unity",
          "C#",
          "Blender"
        ],
        "enlace": "https://github.com/Videogamo/IOD_OrbiTails",
        "media": {
          "imagenes": [
            "img/orbitails/orbitails1.webp",
            "img/orbitails/orbitails2.png",
            "img/orbitails/orbitails3.png",
            "img/orbitails/orbitails4.png"
          ]
        }
      },
      {
        "titulo": i18next.t('projects.ajedrezDune.title'),
        "descripcion": i18next.t('projects.ajedrezDune.desc'),
        "programas": [
          "Unity",
          "C#",
          "Maya"
        ],
        "enlace": "https://github.com/Videogamo/IOD_OrbiTails",
        "media": {
          "imagenes": [
            "img/ajedrezDune/Escenario.webp",
            "img/ajedrezDune/Ajedrez2.webp"
          ],
          "video": "video/AsierAjedrezRender_10001_1.mp4"
        }
      }
    ],
    "web": [
      {
        "titulo": i18next.t('projects.fotografs.title'),
        "descripcion": i18next.t('projects.fotografs.desc'),
        "programas": ["WordPress"],
        "enlace": "https://asiercorona.es/wordpress14/",
        "media": {
          "imagenes": ["img/webFotografs/fotografsCastellers1.png"]
        }
      },
      {
        "titulo": i18next.t('projects.galactic.title'),
        "descripcion": i18next.t('projects.galactic.desc'),
        "programas": [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Vercel",
          "ChatGPT",
          "DALL·E",
          "AIVA",
          "Ideogram.ai",
          "MyEdit"
        ],
        "enlace": "https://galactic-assault.vercel.app",
        "media": {
          "imagenes": ["img/galacticAssault/galacticAssault1.png"]
        }
      },
      {
        "titulo": i18next.t('projects.notion.title'),
        "descripcion": i18next.t('projects.notion.desc'),
        "programas": [
          "Vue.js",
          "TailwindCSS",
          "TypeScript",
          "Vite"
        ],
        "enlace": "https://notionappasier.netlify.app/",
        "media": {
          "imagenes": ["img/notionApp/notionApp.png"]
        }
      }
    ],
    "fabricacion": [
      {
        "titulo": i18next.t('projects.lampara.title'),
        "descripcion": i18next.t('projects.lampara.desc'),
        "programas": [
          "Fusion 360",
          "Rhinoceros",
          "Impresión 3D"
        ],
        "enlace": "img/lamparaModular/Proyectos de impresión 3D (Presentación).pdf",
        "media": {
          "imagenes": ["img/lamparaModular/Lampara_componentes.png"]
        }
      },
      {
        "titulo": i18next.t('projects.mitoia.title'),
        "descripcion": i18next.t('projects.mitoia.desc'),
        "programas": [
          "Arduino",
          "Rhinoceros",
          "Grasshopper",
          "JavaScript",
          "p5.js",
          "Impresión 3D",
          "Corte CNC"
        ],
        "enlace": "img/lamparaModular/Proyectos de impresión 3D (Presentación).pdf",
        "media": {
          "imagenes": [
            "img/mitoIA/mitoIA2.jpeg",
            "img/mitoIA/mitoIA1.jpeg"
          ]
        }
      }
    ],
    "fotografia": [
      {
        "titulo": i18next.t('projects.instagram.title'),
        "descripcion": i18next.t('projects.instagram.desc'),
        "programas": ["Lightroom", "Photoshop"],
        "enlace": "https://instagram.com/ottermarc",
        "media": {
          "imagenes": [],
          "video": ""
        },
        "instagramFeed": true
      }
    ]
  };
}
window.getProyectosPorTema = getProyectosPorTema;
let proyectosPorTema;
function setProyectosPorTema() {
  window.proyectosPorTema = proyectosPorTema = getProyectosPorTema();
  console.log('proyectosPorTema (setProyectosPorTema):', window.proyectosPorTema);
}
if (window.i18next) {
  if (i18next.isInitialized) {
    setProyectosPorTema();
  }
  i18next.on('initialized', setProyectosPorTema);
  i18next.on('languageChanged', setProyectosPorTema);
} else {
  setProyectosPorTema();
}