//import React from 'react' 
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../config-firebase';


const batmanProducts = [
    {
        id: "1",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/superman-react-app-api-a16ea.appspot.com/o/Mug.jpg?alt=media&token=0fd83386-49f0-4362-b1f4-0f33dc53d101",
        categorie: "goodies",
        univers: "superman",
        nom: "Mug",
        description: "Mug Superman en céramique arborant le légendaire logo rouge et jaune. Sa forme ergonomique offre une prise confortable. Parfait pour les amateurs de bandes dessinées, ce mug incarne la puissance emblématique de Superman.",
        prix: 25
    },
    {
        id: "2",
        categorie: "goodies",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/batman-sayna-react-app.appspot.com/o/article_3.png?alt=media&token=5945b9b9-b6ae-47cf-aee2-b431fa13df87",
        prix: 10,
        nom: "Poster",
        description: "Le poster captivant de Superman incarne la puissance iconique du héros, avec une posture héroïque, un symbole emblématique de l'espoir et des couleurs vibrantes qui évoquent la grandeur épique.",
        univers: "superman",
    },
    {
        id: "3",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/batman-sayna-react-app.appspot.com/o/article_5.png?alt=media&token=970db59f-3b8f-4fbe-a72d-52e10596b554",
        univers: "superman",
        description: "Sweat Superman : Symbole emblématique de la puissance et du courage. Confort optimal, design dynamique. Affirmez votre force intérieure avec ce sweat à l'effigie du héros légendaire, un incontournable audacieux.",
        categorie: "vetement",
        prix: 50,
        nom: "Sweat bleu"
    },
    {
        id: "4",
        nom: "Sac à Dos",
        categorie: "Sac à Dos",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/batman-sayna-react-app.appspot.com/o/article_6.png?alt=media&token=8f23cfa2-7180-4412-9cbd-166bd410e501",
        prix: 100,
        univers: "superman",
        description: "Le sac à dos Superman incarne la puissance et le style emblématique du super-héros. Robuste, avec le logo emblématique, il offre une capacité spacieuse, alliant fonctionnalité et flair héroïque."
    },
    {
        id: "5",
        nom: "oreiller",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/batman-sayna-react-app.appspot.com/o/article_7.png?alt=media&token=8e974d54-e9a6-434f-b2ff-ad4ec0b4e1c5",
        categorie: "goodies",
        univers: "batmanSuperman",
        description: "L'oreiller Superman offre un confort invincible avec son rembourrage doux et son design inspiré du super-héros emblématique. Un repos puissant et reposant pour tous les amateurs de superpouvoirs nocturnes.",
        prix: 40
    },
];

export function AddProducts(productsArray) {
    productsArray.forEach(async (item) => {
        await setDoc(doc(db, 'products', item.id), {
            nom: item.nom,
            categorie: item.categorie,
            description: item.description,
            prix: item.prix,
            imgUrl: item.imgUrl,
            univers: item.univers,
          });
    }); 
}

export default AddProducts