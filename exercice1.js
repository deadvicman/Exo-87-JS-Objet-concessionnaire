let voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Contructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

let nom = document.createElement("h1");
nom.innerText = voiture.Nom;
document.body.append(nom);

let img = document.createElement("img");
img.src = voiture.imgUrl;
document.body.append(img);

let nbRoues = document.createElement("p");
nbRoues.innerText = voiture.nombresRoues + " Roues";
document.body.append(nbRoues);

let couleur = document.createElement("p");
couleur.innerText = 'La voiture est de couleur ' + voiture.Couleur;
document.body.append(couleur);

let constructeur = document.createElement("p");
constructeur.innerText = 'Voiture construite par ' + voiture.Contructeur;
document.body.append(constructeur);

let carburant = document.createElement("p");
carburant.innerText = 'La voiture utilise le carburant suivant: ' + voiture.Carburant;
document.body.append(carburant);

let nbPortes = document.createElement("p");
nbPortes.innerText = 'Nombre de portes: ' + voiture.nombrePortes;
document.body.append(nbPortes);

let autonomie = document.createElement("p");
autonomie.innerText = 'Autonomie de ' + voiture.Autonomie;
document.body.append(autonomie);

let vitesseMax = document.createElement("p");
vitesseMax.innerText = 'Vitesse de pointe: ' + voiture.vitesseMaxi;
document.body.append(vitesseMax);




