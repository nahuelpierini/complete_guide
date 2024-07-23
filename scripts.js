document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const subcategoriesContainer = document.getElementById('subcategories');
    const detailsSection = document.getElementById('details');

    const restaurantData = {
        spanish: [
            {
                nombre: "Los Granainos",
                img: "images/los_granainos.png",
                especialidad: "Fish",
                ranking: "Excellent",
                city: "La Cala de Mijas",
                link: "a"
            },
            {
                nombre: "La Butibamba",
                img: "images/butibamba.png",
                especialidad: "Pork loin, sandwich",
                ranking: "Excellent",
                city: "La Cala de Mijas",
                link: "b"
            },
            {
                nombre: "Utopia",
                img: "images/utopia.png",
                especialidad: "Fish, gourmet",
                ranking: "Excellent",
                city: "La Cala de Mijas",
                link: "c"
            },
            {
                nombre: "El Torreon",
                img: "images/el_torreon.png",
                especialidad: "Fish",
                ranking: "Excellent",
                city: "La Cala de Mijas",
                link: "d"
            }
        ],
        chiringuito: [
            {
                nombre: "Merendero Pepe 'El Bombo'",
                img: "images/el_bombo.png",
                especialidad: "Espeto sardina, fish",
                ranking: "OK",
                city: "La Cala de Mijas",
                link: "e"
            },
            {
                nombre: "La Familia Beach Club",
                img: "images/la_familia_beach_club.png",
                especialidad: "Espeto sardina, fish",
                ranking: "OK",
                city: "La Cala de Mijas",
                link: "f"
            }
        ],
        japanese: [
            {
                nombre: "Tako Boy",
                img: "images/tako_boy.png",
                especialidad: "Takoyaki, rammen, not sushi",
                ranking: "Excellent",
                city: "Fuengirola",
                link: "g"
            }
        ],
        burger: [
            {
                nombre: "Dak Burger",
                img: "images/dak.png",
                especialidad: "Gourmet burger",
                ranking: "Excellent",
                city: "La Cala de Mijas",
                link: "h"
            }
        ],
        pizza: [
            {
                nombre: "Pizza Nono",
                img: "images/pizza_nono.png",
                especialidad: "Italian pizza",
                ranking: "OK",
                city: "La Cala de Mijas",
                link: "i"
            }
        ],
        cocktail: [
            {
                nombre: "Bar lo Del Nanet",
                img: "images/bar_lo_del_nanet.png",
                especialidad: "Cocktail",
                ranking: "Good",
                city: "La Cala de Mijas",
                link: "j"
            }
        ]
    };

    navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            // Clear details section
            detailsSection.innerHTML = '';

            const tipo = navItem.getAttribute('data-tipo');

            if (tipo === 'restaurants') {
                // Create or refresh category buttons
                createCategoryButtons();
                
                // Display category buttons for restaurants
                displayRestaurantCategories();
            } else if (tipo === 'sports') {
                const subcategories = ['Acuáticos', 'Padel', 'Tenis'];
                displaySubcategories(subcategories);
            } else if (tipo === 'emergencies') {
                const subcategories = [
                    { name: 'Emergencies', number: '112' },
                    { name: 'Medical', number: '061' },
                    { name: 'Police', number: '091' },
                    { name: 'Local Police', number: '092' },
                    { name: 'Guardia Civil', number: '062' },
                    { name: 'Fire Department', number: '952586382' },
                    { name: 'Police', number: '952197090' },
                    { name: 'Local Police 1', number: '952460808' },
                    { name: 'Local Police 2', number: '952460909' }
                ];
                displaySubcategories(subcategories);
            }
        });
    });

    function createCategoryButtons() {
        // Clear previous buttons
        subcategoriesContainer.innerHTML = '';

        // Create category buttons for restaurant types
        const restaurantTypes = Object.keys(restaurantData);
        restaurantTypes.forEach(type => {
            const button = document.createElement('button');
            button.classList.add('category-button');
            button.textContent = capitalizeFirstLetter(type);
            button.addEventListener('click', () => {
                // Display restaurants for the selected type
                displayRestaurants(type);
            });
            subcategoriesContainer.appendChild(button);
        });
    }

    function displayRestaurantCategories() {
        subcategoriesContainer.innerHTML = '';

        const restaurantTypes = Object.keys(restaurantData);
        restaurantTypes.forEach(type => {
            const button = document.createElement('button');
            button.classList.add('category-button');
            button.textContent = capitalizeFirstLetter(type);
            button.addEventListener('click', () => {
                displayRestaurants(type);
            });
            subcategoriesContainer.appendChild(button);
        });
    }

    function displayRestaurants(category) {
        // Clear previous restaurant items
        const restaurantItems = subcategoriesContainer.querySelectorAll('.restaurant-item, .city-container');
        restaurantItems.forEach(item => item.remove());
    
        // Filter restaurants based on the selected category
        const restaurants = restaurantData[category] || [];
    
        if (restaurants.length === 0) {
            subcategoriesContainer.innerHTML = '<p>No restaurants available.</p>';
            return;
        }
    
        // Sort restaurants by city
        const sortedRestaurants = restaurants.sort((a, b) => a.city.localeCompare(b.city));
    
        // Group restaurants by city
        const groupedRestaurants = sortedRestaurants.reduce((acc, restaurant) => {
            if (!acc[restaurant.city]) {
                acc[restaurant.city] = [];
            }
            acc[restaurant.city].push(restaurant);
            return acc;
        }, {});
    
        // Display restaurants grouped by city
        Object.keys(groupedRestaurants).forEach(city => {
            // Create a container for city and its restaurants
            const cityContainer = document.createElement('div');
            cityContainer.classList.add('city-container');
    
            // Create and display city title
            const cityTitle = document.createElement('h3');
            cityTitle.classList.add('city-title');
            cityTitle.textContent = city;
            cityContainer.appendChild(cityTitle);
    
            // Display restaurants for the city
            groupedRestaurants[city].forEach(restaurant => {
                const restaurantDiv = document.createElement('div');
                restaurantDiv.classList.add('restaurant-item');
                restaurantDiv.innerHTML = `
                    <img src="${restaurant.img}" alt="${restaurant.nombre}" class="restaurant-img">
                    <h4>${restaurant.nombre}</h4>
                    <p>Specialty: ${restaurant.especialidad}</p>
                    <p>Ranking: ${restaurant.ranking}</p>
                    <a href="${restaurant.link}" target="_blank">Location</a>
                `;
                cityContainer.appendChild(restaurantDiv);
            });
    
            subcategoriesContainer.appendChild(cityContainer);
        });
    }
    
    
    function displaySubcategories(subcategories) {
        subcategoriesContainer.innerHTML = '';

        subcategories.forEach(subcategory => {
            const button = document.createElement('button');
            button.classList.add('category-button');
            if (typeof subcategory === 'object') {
                button.textContent = `${subcategory.name}: ${subcategory.number}`;
                button.addEventListener('click', () => {
                    detailsSection.innerHTML = `
                        <h4>${subcategory.name}</h4>
                        <p><a href="tel:${subcategory.number}">${subcategory.number}</a></p>
                    `;
                });
            } else {
                button.textContent = subcategory;
                button.addEventListener('click', () => {
                    detailsSection.innerHTML = `<h4>${subcategory}</h4><p>Details about ${subcategory}...</p>`;
                });
            }
            subcategoriesContainer.appendChild(button);
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
