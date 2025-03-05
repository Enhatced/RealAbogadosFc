document.addEventListener("DOMContentLoaded", () => {
    // Menú móvil
    const menuToggle = document.getElementById("menu-toggle")
    const mobileMenu = document.getElementById("mobile-menu")
  
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
      })
    }
  
    // Galería de imágenes
    const galleryItems = document.querySelectorAll(".gallery-item")
    const galleryModal = document.getElementById("gallery-modal")
    const modalImg = document.getElementById("modal-img")
    const closeModal = document.getElementById("close-modal")
  
    if (galleryItems.length && galleryModal && modalImg && closeModal) {
      galleryItems.forEach((item) => {
        item.addEventListener("click", function () {
          const imgSrc = this.getAttribute("data-img")
          modalImg.src = imgSrc
          galleryModal.classList.remove("hidden")
          document.body.style.overflow = "hidden"
        })
      })
  
      closeModal.addEventListener("click", () => {
        galleryModal.classList.add("hidden")
        document.body.style.overflow = "auto"
      })
  
      galleryModal.addEventListener("click", (e) => {
        if (e.target === galleryModal) {
          galleryModal.classList.add("hidden")
          document.body.style.overflow = "auto"
        }
      })
    }
  
    // Botones de donación
    const donationBtns = document.querySelectorAll(".donation-btn")
    const customAmount = document.getElementById("custom-amount")
  
    if (donationBtns.length && customAmount) {
      donationBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          donationBtns.forEach((b) => b.classList.remove("active"))
          this.classList.add("active")
  
          if (this.textContent === "Otro") {
            customAmount.classList.remove("hidden")
          } else {
            customAmount.classList.add("hidden")
          }
        })
      })
    }
  
    // Botones de método de pago
    const paymentMethodBtns = document.querySelectorAll(".payment-method-btn")
  
    if (paymentMethodBtns.length) {
      paymentMethodBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          paymentMethodBtns.forEach((b) => b.classList.remove("active"))
          this.classList.add("active")
        })
      })
    }
  
    // Formulario del foro
    const forumForm = document.getElementById("forum-form")
  
    if (forumForm) {
      forumForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Aquí iría la lógica para enviar el formulario
        alert("¡Gracias por tu mensaje! Será publicado después de ser revisado.")
        forumForm.reset()
      })
    }
  
    // Animación al hacer scroll
    const animateOnScroll = () => {
      const sections = document.querySelectorAll("section")
  
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add("animate-fadeIn")
        }
      })
    }
  
    // Ejecutar animación al cargar la página
    animateOnScroll()
  
    // Ejecutar animación al hacer scroll
    window.addEventListener("scroll", animateOnScroll)
  })
  
  