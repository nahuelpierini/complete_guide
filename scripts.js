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
                link: "https://www.google.es/maps/place/Bar+Los+Grana%C3%ADnos+(Cala+de+Mijas)/@36.497758,-4.687715,18z/data=!4m10!1m2!2m1!1slos+granainos!3m6!1s0xd731fcad28519e9:0x31b4c68f4c706985!8m2!3d36.4980999!4d-4.6865999!15sCg1sb3MgZ3JhbmFpbm9zIgOIAQFaDyINbG9zIGdyYW5haW5vc5IBCnJlc3RhdXJhbnTgAQA!16s%2Fg%2F11c0r5z1zv?hl=es&entry=ttu"
            },
            {
                nombre: "La Butibamba",
                img: "images/butibamba.png",
                especialidad: "Pork loin, sandwich",
                ranking: "Excellent",
                city: "La Cala de Mijas",
                link: "https://www.google.es/maps/place/Venta+Restaurante+La+Butibamba/@36.50156,-4.6854991,18.5z/data=!4m10!1m2!2m1!1sla+butibamba!3m6!1s0xd731e291c0daa61:0xb669920ad764b6d8!8m2!3d36.5016937!4d-4.6847124!15sCgxsYSBidXRpYmFtYmFaDiIMbGEgYnV0aWJhbWJhkgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F1tpf8g_h?hl=es&entry=ttu"
            },
            {
                nombre: "Utopia",
                img: "images/utopia.png",
                especialidad: "Fish, gourmet",
                ranking: "Excellent",
                city: "La Cala de Mijas",
                link: "https://www.google.es/maps/place/UTOPIA/@36.5001938,-4.687869,17z/data=!3m1!4b1!4m6!3m5!1s0xd731e34bf059563:0xb6e3285f2d771d0b!8m2!3d36.5001895!4d-4.6852941!16s%2Fg%2F11c7vtmvs9?hl=es&entry=ttu"
            },
            {
                nombre: "El Torreon",
                img: "images/el_torreon.png",
                especialidad: "Fish",
                ranking: "Excellent",
                city: "La Cala de Mijas",
                link: "https://www.google.es/maps/place/Restaurante+El+Torre%C3%B3n/@36.5029895,-4.6813102,17z/data=!3m1!4b1!4m6!3m5!1s0xd72584973de187f:0x67860686295ab025!8m2!3d36.5029852!4d-4.6787353!16s%2Fg%2F1hc1jwxdp?hl=es&entry=ttu"
            }
        ],
        chiringuito: [
            {
                nombre: "Merendero Pepe 'El Bombo'",
                img: "images/el_bombo.png",
                especialidad: "Espeto sardina, fish",
                ranking: "OK",
                city: "La Cala de Mijas",
                link: "https://www.google.es/maps/place/Merendero+Pepe+'El+Bombo'/@36.4953381,-4.6896842,20z/data=!4m6!3m5!1s0xd731fb590064b79:0x25c1ad849f02c5c6!8m2!3d36.4951705!4d-4.68963!16s%2Fg%2F11ckvb3nvt?hl=es&entry=ttu"
            },
            {
                nombre: "La Familia Beach Club",
                img: "images/la_familia_beach_club.png",
                especialidad: "Espeto sardina, fish",
                ranking: "OK",
                city: "La Cala de Mijas",
                link: "https://www.google.es/maps/place/La+Familia+Beach+Club/@36.4941723,-4.6927264,17z/data=!3m1!4b1!4m6!3m5!1s0xd731fb5bf527339:0xdf79a312d954f0f4!8m2!3d36.494168!4d-4.6901515!16s%2Fg%2F1tgzcpzw?hl=es&entry=ttu"
            }
        ],
        japanese: [
            {
                nombre: "Tako Boy",
                img: "images/tako_boy.png",
                especialidad: "Takoyaki, rammen, not sushi",
                ranking: "Excellent",
                city: "Fuengirola",
                link: "https://www.google.es/maps/place/Restaurante+Japon%C3%A9s+-+TAKO+BOY/@36.551339,-4.6176409,17z/data=!3m1!4b1!4m6!3m5!1s0xd72e2453f61b565:0x2f3556e1c7ba2ccb!8m2!3d36.5513347!4d-4.615066!16s%2Fg%2F11c0rpmfm7?hl=es&entry=ttu"
            }
        ],
        burger: [
            {
                nombre: "Dak Burger",
                img: "images/dak.png",
                especialidad: "Gourmet burger",
                ranking: "Excellent",
                city: "La Cala de Mijas",
                link: "https://www.google.es/maps/place/Dak+Burger/@36.5080434,-4.6875948,17z/data=!3m1!4b1!4m6!3m5!1s0xd731f4bf14ec351:0xe2a308d1790e6538!8m2!3d36.5080391!4d-4.6850199!16s%2Fg%2F11jp04679c?hl=es&entry=ttu"
            }
        ],
        pizza: [
            {
                nombre: "Pizza Nono",
                img: "images/pizza_nono.png",
                especialidad: "Italian pizza",
                ranking: "OK",
                city: "La Cala de Mijas",
                link: "https://www.google.es/maps/place/Pizza+Nonno/@36.5010398,-4.6869661,17z/data=!3m1!4b1!4m6!3m5!1s0xd731e3484c5b7c5:0x624cf4e1e874fc5!8m2!3d36.5010355!4d-4.6843912!16s%2Fg%2F11g6hvvs0y?hl=es&entry=ttu"
            }
        ],
        cocktail: [
            {
                nombre: "Bar lo Del Nanet",
                img: "images/bar_lo_del_nanet.png",
                especialidad: "Cocktail",
                ranking: "Good",
                city: "La Cala de Mijas",
                link: "https://www.google.es/maps/place/Bar+Lo+Del+Nanet/@36.5041627,-4.6781919,17z/data=!3m1!4b1!4m6!3m5!1s0xd731e3a7b6779e7:0x3e064dae326f4684!8m2!3d36.5041584!4d-4.675617!16s%2Fg%2F11b_31mjvq?hl=es&entry=ttu"
            }
        ]
    };

    const festivalData = {
        ferias: [
            {
                nombre: "Feria La Cala de Mijas",
                img: "images/feria_la_cala.png",
                descripcion: "24 to 28 of July",
                link: "https://www.venamijas.com/ocio-mijas/feria-cala-mijas/",
                city: "La Cala de Mijas"
            },
            {
                nombre: "Feria Malaga",
                img: "images/feria_malaga.png",
                descripcion: "17 to 24 August",
                link: "https://www.malaga.eu/feria-de-malaga/",
                city: "Malaga"
            }
        ],
        concerts: [
            {
                nombre: "Marenostrum",
                img: "images/marenostrum.png",
                link: "https://marenostrumfuengirola.com/",
                city: "Fuengirola"
            },
            {
                nombre: "Starlite Festival",
                img: "images/starlite.png",
                link: "https://starlitemarbella.koobin.com/?idioma=ES&utm_source=GoogleAds_GenericBranding&utm_medium=searchpaid&utm_campaign=GoogleAds_GenericBranding_searchpaid&gad_source=1&gclid=CjwKCAjw74e1BhBnEiwAbqOAjNLeqPWsrUk3wDbX9-9i2j6sfdj0v7ocAQTpD6es4ezq48IL2Ja9pBoCEvgQAvD_BwE",
                city: "Marbella"
            }
        ]
    };

    navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            // Clear details section
            detailsSection.innerHTML = '';

            const tipo = navItem.getAttribute('data-tipo');

            if (tipo === 'restaurants') {
                createCategoryButtons();
                displayRestaurantCategories();
            } else if (tipo === 'festivals') {
                displayFestivalCategories();
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
                    { name: 'Fire Department', number: '+34952586382' },
                    { name: 'Police', number: '+34952197090' },
                    { name: 'Local Police 1', number: '+34952460808' },
                    { name: 'Local Police 2', number: '+34952460909' },
                    { name: 'Host Xelu', number: '+34663046431' },
                    { name: 'Host Nahuel', number: '+34613887624' },
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
                    <p class="specialty">Specialty: ${restaurant.especialidad}</p>
                    <p class="ranking">Ranking: ${restaurant.ranking}</p>
                    <a href="${restaurant.link}" target="_blank" class="restaurant-button">Google Maps</a>
                `;
                cityContainer.appendChild(restaurantDiv);
            });

            subcategoriesContainer.appendChild(cityContainer);
        });
    }

    function displayFestivalCategories() {
        subcategoriesContainer.innerHTML = '';

        const festivalTypes = Object.keys(festivalData);
        festivalTypes.forEach(type => {
            const button = document.createElement('button');
            button.classList.add('category-button');
            button.textContent = capitalizeFirstLetter(type);
            button.addEventListener('click', () => {
                displayFestivals(type);
            });
            subcategoriesContainer.appendChild(button);
        });
    }

    function displayFestivals(category) {
        // Clear previous festival items
        const festivalItems = subcategoriesContainer.querySelectorAll('.festival-item, .city-container');
        festivalItems.forEach(item => item.remove());

        // Filter festivals based on the selected category
        const festivals = festivalData[category] || [];

        if (festivals.length === 0) {
            subcategoriesContainer.innerHTML = '<p>No festivals available.</p>';
            return;
        }

        // Sort festivals by city
        const sortedFestivals = festivals.sort((a, b) => a.city.localeCompare(b.city));

        // Group festivals by city
        const groupedFestivals = sortedFestivals.reduce((acc, festival) => {
            if (!acc[festival.city]) {
                acc[festival.city] = [];
            }
            acc[festival.city].push(festival);
            return acc;
        }, {});

        // Display festivals grouped by city
        Object.keys(groupedFestivals).forEach(city => {
            // Create a container for city and its festivals
            const cityContainer = document.createElement('div');
            cityContainer.classList.add('city-container');

            // Create and display city title
            const cityTitle = document.createElement('h3');
            cityTitle.classList.add('city-title');
            cityTitle.textContent = city;
            cityContainer.appendChild(cityTitle);

            // Display festivals for the city
            groupedFestivals[city].forEach(festival => {
                const festivalDiv = document.createElement('div');
                festivalDiv.classList.add('festival-item');
                festivalDiv.innerHTML = `
                    <img src="${festival.img}" alt="${festival.nombre}" class="festival-img">
                    <h4>${festival.nombre}</h4>
                    <p class="description">${festival.descripcion || ''}</p>
                    <button onclick="window.location.href='${festival.link || '#'}'" class="festival-button">
                    ${festival.link ? 'Go to website' : 'Go to website'}
                    </button>
                `;
                cityContainer.appendChild(festivalDiv);
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

                // Assign specific classes for styling
                switch (subcategory.name.toLowerCase()) {
                    case 'host nahuel':
                        button.classList.add('button-nahuel');
                        break;
                    case 'host xelu':
                        button.classList.add('button-xelu');
                        break;
                    case 'fire department':
                        button.classList.add('button-fire-department');
                        break;
                    case 'police':
                        button.classList.add('button-police');
                        break;
                    case 'local police':
                        button.classList.add('button-police');
                        break;
                    case 'local police 1':
                        button.classList.add('button-police');
                        break;
                    case 'local police 2':
                        button.classList.add('button-police');
                        break;
                    case 'emergencies':
                        button.classList.add('button-emergencies');
                        break;
                    case 'medical':
                        button.classList.add('button-emergencies');
                        break;
                    case 'guardia civil':
                        button.classList.add('button-guardia-civil');
                        break;
                }

                button.addEventListener('click', () => {
                    detailsSection.innerHTML = `
                        <div class="details-content">
                            <h4>${subcategory.name}</h4>
                            <p><a href="tel:${subcategory.number}">${subcategory.number}</a></p>
                        </div>
                    `;
                });
            } else {
                button.textContent = subcategory;
                button.addEventListener('click', () => {
                    detailsSection.innerHTML = `
                        <div class="details-content">
                            <h4>${subcategory}</h4>
                            <p>Details about ${subcategory}...</p>
                        </div>
                    `;
                });
            }
            subcategoriesContainer.appendChild(button);
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
