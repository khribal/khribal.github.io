// Navigation Bar Active //
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav li a');
  
    function updateActiveSection() {
      const scrollPosition = window.scrollY;
  
      sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
  
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              navLinks.forEach(link => link.classList.remove('active'));
              navLinks[index].classList.add('active');
          }
      });
  
      const currentURL = window.location.href;
      const resumeLink = document.querySelector('nav li a[href="resume.html"]');
      
      if (resumeLink) {
          if (currentURL.includes('resume.html')) {
              resumeLink.classList.add('active');
          } else {
              resumeLink.classList.remove('active');
          }
      }
  }
  
    // Add scroll event listener to update the active section on scroll
    window.addEventListener('scroll', updateActiveSection);
  
    // Call the function initially to set the active section on page load
    updateActiveSection();
  });
  
  