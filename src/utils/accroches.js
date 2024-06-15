const accroches = [
    "En attendant que ça commence, prépare-toi avec une boisson, des snacks, ou un cerveau bien frais !",
    "Avant de plonger dans l'action, prends un soda, des biscuits, ou l'âme d'un rival !",
    "En attendant l'ultime bataille, sirote un café, mange des cacahuètes, ou une main d'humain !",
    "Avant que le jeu ne démarre, savoure une limonade, des bonbons, ou le foie de ton adversaire !",
    "En attendant le coup d'envoi, attrape une boisson énergisante, des chips, ou les yeux de ton ennemi !",
    "Avant l'action, prends une bière, des olives, ou le cœur battant d'un compétiteur !",
    "En attendant le show, prends un cocktail, des pistaches, ou les entrailles d'un malheureux !",
    "Avant de débuter, sirote un thé glacé, grignote des bretzels, ou dévore un rein humain !",
    "En attendant l'aventure, rafraîchis-toi avec une boisson gazeuse, des crackers, ou un cerveau fraîchement prélevé !",
    "Avant le grand départ, prends une limonade, des chips, ou un estomac bien rempli !"
];

export default function getRandomSpitch() {
    const indexAleatoire = Math.floor(Math.random() * accroches.length);
    return accroches[indexAleatoire];
}