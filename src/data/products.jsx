import merClaire from "../assets/mer-claire.jpg";
import nuitIndigo from "../assets/nuit-indigo.jpg";
import fleurDeCiel from "../assets/fleur-de-ciel.jpg";
import oudSaphir from "../assets/oud-saphir.jpg";
import brumeBlanche from "../assets/brume-blanche.jpg";
import cedreBleu from "../assets/cedre-bleu.jpg";
import azurDore from "../assets/azur-dore.jpg";
import minuitPoudre from "../assets/minuit-poudre.jpg";

// data Json style array , App.jsx imports it and passes it to the pages 
export const products = [
  {
    "id": 1,
    "name": "Mer Claire",
    "category": "Unisex",
    "price50": 30,
    "price100": 50,
    "image": merClaire,
    "top": "Sea salt, bergamot",
    "heart": "White iris, jasmine",
    "base": "Driftwood, musk",
    "description": "A clean, salty opening that settles into soft iris. Made for warm Mediterranean evenings and long walks by the water.",
  },
  {
    "id": 2,
    "name": "Nuit Indigo",
    "category": "For Him",
    "price50": 35,
    "price100": 55,
    "image": nuitIndigo,
    "top": "Black pepper, cardamom",
    "heart": "Lavender, cedar",
    "base": "Vetiver, amber",
    "description": "Deep and calm. Spiced lavender over dry woods, with an amber finish that lasts through the night.",
  },
  {
    "id": 3,
    "name": "Fleur de Ciel",
    "category": "For Her",
    "price50": 50,
    "price100": 80,
    "image": fleurDeCiel,
    "top": "Pear, pink pepper",
    "heart": "Peony, lily of the valley",
    "base": "Cashmere wood, vanilla",
    "description": "Light florals with a soft, powdery base. Fresh enough for the morning, warm enough for dinner.",
  },
  {
    "id": 4,
    "name": "Oud Saphir",
    "category": "Unisex",
    "price50": 30,
    "price100": 55,
    "image": oudSaphir,
    "top": "Saffron, rose",
    "heart": "Oud, geranium",
    "base": "Leather, patchouli",
    "description": "A rich oud blended with rose and saffron. Intense, long lasting and sold in small batches.",
  },
  {
    "id": 5,
    "name": "Brume Blanche",
    "category": "For Her",
    "price50": 60,
    "price100": 120,
    "image": brumeBlanche,
    "top": "Mandarin, neroli",
    "heart": "Orange blossom, tea",
    "base": "White musk, sandalwood",
    "description": "Soft like morning fog. Citrus and white tea resting on a clean musk.",
  },
  {
    "id": 6,
    "name": "Cèdre Bleu",
    "category": "For Him",
    "price50": 50,
    "price100": 80,
    "image": cedreBleu,
    "top": "Grapefruit, juniper",
    "heart": "Blue cedar, sage",
    "base": "Oakmoss, tonka",
    "description": "Crisp juniper and cedar with a green, mossy base. A daily scent that stays out of the way.",
  },
  {
    "id": 7,
    "name": "Azur Doré",
    "category": "Unisex",
    "price50": 40,
    "price100": 75,
    "image": azurDore,
    "top": "Pineapple, lemon",
    "heart": "Ylang-ylang, ambergris",
    "base": "Benzoin, cedar",
    "description": "Bright fruit and sea air over a golden resin base. Summer in a bottle.",
  },
  {
    "id": 8,
    "name": "Minuit Poudré",
    "category": "For Her",
    "price50": 50,
    "price100": 80,
    "image": minuitPoudre,
    "top": "Blackcurrant, violet",
    "heart": "Heliotrope, iris",
    "base": "Tonka, vanilla",
    "description": "Dark berries and powdery violet over warm vanilla. Made for the evening.",
  },
];

export const categories = ["All", "For Her", "For Him", "Unisex"];
