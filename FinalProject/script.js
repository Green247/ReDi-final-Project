
// Hamburger menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
// gallery

const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems.forEach((item) => {
  item.addEventListener('click', handleImageClick);
});

function handleImageClick(event) {
  const target = event.target;
  
  if (target.tagName.toLowerCase() === 'img') {
    const expandedImg = document.createElement('img');
    expandedImg.src = target.src;

    const container = document.createElement('div');
    container.classList.add('expanded-image');
    container.appendChild(expandedImg);

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', closeExpandedImage);

    container.appendChild(closeButton);

    document.body.appendChild(container);
  }
}

function closeExpandedImage() {
  const expandedImage = document.querySelector('.expanded-image');
  
  if (expandedImage) {
    expandedImage.remove();
  }
}

// contact form
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  alert('Thank you for your message! We will get back to you soon.');
});
