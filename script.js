// Menu burger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Initialisation du menu burger avec une icône claire
if (!hamburger.querySelector('i')) {
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
}

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Supprime l'icône existante et ajoute la nouvelle avec une transition fluide
  const currentIcon = hamburger.querySelector('i');
  if (currentIcon) {
    currentIcon.remove();
  }
  
  const newIcon = document.createElement('i');
  newIcon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
  
  // Assure que l'icône est rendue correctement avant l'animation
  requestAnimationFrame(() => {
    hamburger.appendChild(newIcon);
  });
  
  // Met à jour l'état d'accessibilité
  hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    
    // Supprime l'icône existante et ajoute l'icône du menu
    const currentIcon = hamburger.querySelector('i');
    if (currentIcon) {
      currentIcon.remove();
    }
    
    const newIcon = document.createElement('i');
    newIcon.className = 'fas fa-bars';
    hamburger.appendChild(newIcon);
    
    // Met à jour l'état d'accessibilité
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Back to top button visibility
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Smooth animation for gallery items (on scroll)
const galleryItems = document.querySelectorAll('.gallery-item');

function checkGalleryVisibility() {
  galleryItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.9;
    
    if (isVisible) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}

// Initial styles for gallery animation
galleryItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Check visibility on scroll and on page load
window.addEventListener('scroll', checkGalleryVisibility);
window.addEventListener('load', checkGalleryVisibility);

// Gestion de la sélection de formule dans le formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
  const formuleButtons = document.querySelectorAll('.btn-pricing[data-formule]');
  const formuleSelect = document.getElementById('formule-select');
    formuleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const formule = this.getAttribute('data-formule');
      if (formuleSelect) {
        formuleSelect.value = formule;
        
        // Animation de mise en évidence du champ
        formuleSelect.classList.add('highlight');
        setTimeout(() => {
          formuleSelect.classList.remove('highlight');
        }, 1500);
        
        // Affichage d'un petit message de confirmation
        const contactSection = document.getElementById('contact');
        const confirmationMessage = document.createElement('div');
        confirmationMessage.className = 'formule-confirmation';
        confirmationMessage.innerHTML = '<i class="fas fa-check-circle"></i> Formule sélectionnée !';
        
        // Supprimer les messages précédents
        const previousMessages = document.querySelectorAll('.formule-confirmation');
        previousMessages.forEach(msg => msg.remove());
        
        contactSection.querySelector('.section-header').after(confirmationMessage);
        
        // Faire disparaître le message après 3 secondes
        setTimeout(() => {
          confirmationMessage.style.opacity = '0';
          setTimeout(() => {
            confirmationMessage.remove();
          }, 500);
        }, 2500);
      }
    });
  });
});

// Form submission feedback
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simple form validation feedback
  const formElements = contactForm.elements;
  let isValid = true;
  
  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].hasAttribute('required') && !formElements[i].value) {
      isValid = false;
      break;
    }
  }
  
  if (isValid) {
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.';
    
    contactForm.after(successMessage);
    
    // Reset the form
    contactForm.reset();
    
    // Actually submit the form after 1 second (for demo)
    setTimeout(() => {
      contactForm.submit();
    }, 1000);
  }
});
