/**
 * Données de la galerie
 * 
 * Pour ajouter une nouvelle image à la galerie, il suffit d'ajouter un nouvel objet
 * dans le tableau galleryData ci-dessous en suivant le même format.
 * 
 * Exemple :
 * {
 *   id: 4, // Incrémenter l'ID pour chaque nouvelle image
 *   image: "nom-du-fichier.jpg", // Nom du fichier image dans le dossier racine
 *   alt: "Description alternative de l'image pour l'accessibilité",
 *   title: "Titre de l'image",
 *   description: "Description courte qui apparaît sous l'image"
 * }
 */
const galleryData = [
  {
    id: 1,
    image: "happy.png",
    alt: "Client heureux à Bali profitant d'une expérience authentique",
    title: "Expériences authentiques",
    description: "Des moments de bonheur à vivre pleinement"
  },
  {
    id: 2,
    image: "planning-voyage.jpg",
    alt: "Planning de voyage personnalisé avec itinéraires détaillés",
    title: "Planification personnalisée",
    description: "Des itinéraires sur-mesure pour chaque voyageur"
  },
  {
    id: 3,
    image: "plage-coucher-soleil.jpg",
    alt: "Magnifique plage au coucher de soleil, destination de rêve",
    title: "Destinations de rêve",
    description: "Des lieux sélectionnés pour leur beauté et leur authenticité"
  }
  // Pour ajouter une nouvelle image, copiez le bloc ci-dessus
  // et modifiez les valeurs selon vos besoins
];

/**
 * Fonction utilitaire pour ajouter facilement de nouvelles images à la galerie
 * @param {string} image - Nom du fichier image
 * @param {string} alt - Texte alternatif de l'image
 * @param {string} title - Titre de l'image
 * @param {string} description - Description de l'image
 */
function addGalleryImage(image, alt, title, description) {
  // Déterminer le prochain ID disponible
  const nextId = Math.max(...galleryData.map(item => item.id)) + 1;
  
  // Ajouter la nouvelle image
  galleryData.push({
    id: nextId,
    image,
    alt,
    title,
    description
  });
  
  // Si la page est déjà chargée, mettre à jour la galerie
  if (document.readyState === 'complete' && typeof loadDynamicGallery === 'function') {
    loadDynamicGallery();
  }
}

// Exemple d'utilisation (à commenter/supprimer en production) :
// addGalleryImage(
//   "nouvelle-image.jpg",
//   "Description alternative de la nouvelle image",
//   "Titre de la nouvelle image",
//   "Description qui apparaîtra sous l'image"
// );
