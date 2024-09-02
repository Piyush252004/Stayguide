// Selectors
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city');
const searchButton = document.querySelector('.btn-secondary');
const cityCards = document.querySelectorAll('.city-card');
const signupModal = document.getElementById('signup-modal');
const loginModal = document.getElementById('login-modal');

// Event Listeners
searchForm.addEventListener('submit', handleSearch);
searchButton.addEventListener('click', handleSearch);
cityCards.forEach((card) => {
  card.addEventListener('click', handleCityCardClick);
});
signupModal.addEventListener('shown.bs.modal', handleSignupModalShown);
loginModal.addEventListener('shown.bs.modal', handleLoginModalShown);

// Functions
function handleSearch(event) {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
      const redirectUrl = `property_${city.toLowerCase().replace(/\s+/g, '_')}.html`;
      console.log(`Redirecting to: ${redirectUrl}`);
      window.location.href = redirectUrl;
    } else {
      alert('Please enter a city');
    }
  }

  const cityCardContainers = document.querySelectorAll('.city-card-container');

  cityCardContainers.forEach((container) => {
    container.addEventListener('click', handleCityCardClick);
  });
  
  function handleCityCardClick(event) {
    const city = event.target.textContent.trim();
    const cityName = city.toLowerCase().replace(/\s+/g, '_');
    const redirectUrl = `/html/property_${cityName}.html`;
    window.location.href = redirectUrl;
  }

function handleSignupModalShown() {
  console.log('Signup modal shown');
  // TO DO: Implement signup modal functionality here
}

function handleLoginModalShown() {
  console.log('Login modal shown');
  // TO DO: Implement login modal functionality here
}



