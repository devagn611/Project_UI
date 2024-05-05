document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a'); // Select all navigation links
  
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      
      const targetId = link.getAttribute('href'); // Get the target section ID
      const targetElement = document.querySelector(targetId); // Find the section
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'start' // Scroll to the top of the section
        });
      }
    });
  });
});
