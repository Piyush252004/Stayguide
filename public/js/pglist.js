document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:5000/properties';

    function updatePropertyCount(id, newCount) {
        fetch(`http://localhost:5000/properties/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ interested: newCount })
        })
        .then(response => response.json())
        .catch(error => console.error('Error updating property count:', error));
    }

    function renderProperties(properties) {
        const container = document.querySelector('.page-container');
        container.innerHTML = '';
        properties.forEach(property => {
            const interestedCount = property.interested || 0; // Ensure interested count defaults to 0 if not present
            container.innerHTML += `
                <div class="property-card row">
                    <div class="image-container col-md-4">
                        <img src="<%= url('/images/' + property.image) %>" alt="${property.name}" />
                    </div>
                    <div class="content-container col-md-8">
                        <div class="row no-gutters justify-content-between">
                            <div class="star-container" title="${property.rating}">
                                <!-- Add stars dynamically if needed -->
                            </div>
                            <div class="interested-container">
                                <i class="far fa-heart" id="heart-icon-${property._id}"></i>
                                <div class="interested-text" id="interested-text-${property._id}">${interestedCount} interested</div>
                            </div>
                        </div>
                        <div class="detail-container">
                            <div class="property-name">${property.name}</div>
                            <div class="property-address">${property.propertyAddress}</div>
                            <div class="property-gender">
                                <img src="/img/${property.gender}.png" />
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="rent-container col-6">
                                <div class="rent">Rs ${property.setupRooms[0]?.monthlyRent || 'N/A'}/-</div>
                                <div class="rent-unit">per month</div>
                            </div>
                            <div class="rooms-container col-6">
                                <div class="rooms">${property.rooms || 'N/A'} rooms available</div>
                            </div>
                            <div class="button-container col-6">
                                <a href="/html/property_details.html?id=${property._id}" class="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        properties.forEach(property => {
            const heartIcon = document.getElementById(`heart-icon-${property._id}`);
            const interestedText = document.getElementById(`interested-text-${property._id}`);

            heartIcon.addEventListener('click', () => {
                let count = parseInt(interestedText.innerText.split(' ')[0], 10) || 0;
                if (heartIcon.classList.contains('far')) {
                    heartIcon.classList.remove('far');
                    heartIcon.classList.add('fas');
                    count += 1;
                } else {
                    heartIcon.classList.remove('fas');
                    heartIcon.classList.add('far');
                    count -= 1;
                }
                interestedText.innerText = `${count} interested`;
                updatePropertyCount(property._id, count);
            });
        });
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(properties => renderProperties(properties))
        .catch(error => console.error('Error fetching properties:', error));
});

// document.addEventListener('DOMContentLoaded', function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const propertyId = urlParams.get('id');

//     if (!propertyId) {
//         console.error('Property ID not found in URL');
//         alert('Property ID not found in URL');
//         return; 
//     }
// });
