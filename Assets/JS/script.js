document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const scrollTopBtn = document.getElementById('scroll-top');
  
  // Scroll event for navbar
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
          if (scrollTopBtn) scrollTopBtn.classList.add('active');
      } else {
          navbar.classList.remove('scrolled');
          if (scrollTopBtn) scrollTopBtn.classList.remove('active');
      }
      
      // Reveal animations on scroll
      revealElements();
  });
  
  // Mobile menu toggle
  if (menuToggle) {
      menuToggle.addEventListener('click', function() {
          mobileMenu.classList.toggle('active');
          mobileMenu.classList.toggle('hidden');
      });
  }
  
  // Close mobile menu when clicking on a link
  mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
          setTimeout(() => {
              mobileMenu.classList.add('hidden');
          }, 500);
      });
  });
  
  // Scroll to top button
  if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  }
  
  // Gallery tabs
  const tabBtns = document.querySelectorAll('.modern-tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          const tabId = this.getAttribute('data-tab');
          
          // Remove active class from all buttons and contents
          tabBtns.forEach(b => b.classList.remove('active'));
          tabContents.forEach(c => c.classList.remove('active'));
          
          // Add active class to current button and content
          this.classList.add('active');
          document.getElementById(tabId).classList.add('active');
      });
  });
  
  // Gallery modal
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryModal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.getElementById('close-modal');
  
  galleryItems.forEach(item => {
      item.addEventListener('click', function() {
          const imgSrc = this.getAttribute('data-img');
          modalImg.src = imgSrc;
          galleryModal.classList.remove('hidden');
          galleryModal.classList.add('active');
          document.body.style.overflow = 'hidden';
      });
  });
  
  if (closeModal) {
      closeModal.addEventListener('click', function() {
          galleryModal.classList.remove('active');
          setTimeout(() => {
              galleryModal.classList.add('hidden');
              document.body.style.overflow = 'auto';
          }, 300);
      });
  }
  
  // Event filter buttons
  const eventFilterBtns = document.querySelectorAll('.event-filter-btn');
  
  eventFilterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          // Remove active class from all buttons
          eventFilterBtns.forEach(b => b.classList.remove('active'));
          
          // Add active class to current button
          this.classList.add('active');
      });
  });
  
  // Inicializar el carrusel de eventos
  const eventsSwiper = new Swiper('.events-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          640: {
              slidesPerView: 1,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 30,
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1280: {
              slidesPerView: 4,
              spaceBetween: 30,
          },
      },
  });
  
  // Reveal animations on scroll
  function revealElements() {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      
      for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = reveals[i].getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add('active');
          }
      }
  }
  
  // Initialize reveal animations
  revealElements();
  
  // Donation form submission
  const donationForm = document.getElementById('donation-form');
  
  if (donationForm) {
      donationForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Simple validation
          const amount = document.getElementById('amount').value;
          const name = document.getElementById('donor-name').value;
          const email = document.getElementById('donor-email').value;
          
          if (!amount || !name || !email) {
              alert('Por favor completa todos los campos requeridos.');
              return;
          }
          
          // Here you would normally send the form data to a server
          alert('¡Gracias por tu donación! Te contactaremos pronto para completar el proceso.');
          donationForm.reset();
      });
  }
});