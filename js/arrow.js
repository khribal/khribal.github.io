//Homepage arrow (scroll) ref: ChatGPT//
document.addEventListener('DOMContentLoaded', function() {
    const scrollArrow = document.querySelector('.down-arrow');
    const targetSection = document.querySelector('#about');
  
    scrollArrow.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Calculate the target position of the section
        const targetPosition = targetSection.offsetTop;
  
        // Use window.scrollTo to animate the scroll
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Use 'smooth' for smooth scrolling
        });
    });
  });
  