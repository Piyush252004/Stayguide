document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch property data from an API
    async function fetchPropertyData(propertyId) {
        try {
            const response = await fetch(`/api/properties/${propertyId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching property data:', error);
            // Handle the error appropriately in your application
            return null;
        }
    }

    // Function to update the page with property data
    function updatePropertyDetails(propertyData) {
        if (!propertyData) {
            console.error('No property data available');
            return;
        }

        document.getElementById('property-name').textContent = propertyData.name;
        document.getElementById('property-address').textContent = propertyData.address;
        document.getElementById('property-rent').textContent = `Rs ${propertyData.setupRooms.map(room => room.monthlyRent).join(', ')}/-`;
        document.getElementById('property-description').textContent = propertyData.description;

        // Populate images
        const imageElement = document.getElementById('carousel-image-1');
        if (imageElement && propertyData.image) {
            imageElement.src = propertyData.image;
        } else {
            console.error('Image element or propertyData.image not available');
        }

        // Populate amenities
        const amenitiesContainer = document.getElementById('amenities-container');
        amenitiesContainer.innerHTML = ''; // Clear existing content
        propertyData.amenities.forEach(amenity => {
            const div = document.createElement('div');
            div.className = 'col-md-4';
            div.textContent = amenity;
            amenitiesContainer.appendChild(div);
        });

        // Populate ratings
        function fillStars(elementId, rating) {
            const container = document.getElementById(elementId);
            container.innerHTML = ''; // Clear existing stars
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('i');
                star.className = i < rating ? 'fas fa-star' : 'far fa-star';
                container.appendChild(star);
            }
        }

        fillStars('cleanliness-rating', propertyData.ratings?.cleanliness || 0);
        fillStars('food-quality-rating', propertyData.ratings?.foodQuality || 0);
        fillStars('safety-rating', propertyData.ratings?.safety || 0);

        const totalRatingContainer = document.getElementById('total-rating');
        totalRatingContainer.textContent = propertyData.ratings?.total || 0;
        fillStars('rating-circle-star-container', propertyData.ratings?.total || 0);

        // Populate testimonials
        const testimonialsContainer = document.getElementById('testimonials-container');
        testimonialsContainer.innerHTML = ''; // Clear existing content
        propertyData.testimonials.forEach(testimonial => {
            const div = document.createElement('div');
            div.className = 'testimonial';
            div.innerHTML = `<strong>${testimonial.name}</strong>: ${testimonial.comment}`;
            testimonialsContainer.appendChild(div);
        });
    }

    // Get property ID from URL or other source
    const propertyId = new URLSearchParams(window.location.search).get('id');

    if (propertyId) {
        fetchPropertyData(propertyId).then(propertyData => {
            updatePropertyDetails(propertyData);
        });
    } else {
        console.error('Property ID not found in URL');
    }
});
