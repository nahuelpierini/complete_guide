document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const subcategoriesContainer = document.getElementById('subcategories');
    const detailsSection = document.getElementById('details');

    navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            // Clear subcategories buttons and details
            subcategoriesContainer.innerHTML = '';
            detailsSection.innerHTML = '';

            const tipo = navItem.getAttribute('data-tipo');
            let subcategories;

            if (tipo === 'restaurants') {
                subcategories = [
                    'Spanish Food',
                    'Chiringuitos',
                    'Japanese Food',
                    'Burger',
                    'Pizzas',
                    'Cocktail'
                ];
            } else if (tipo === 'sports') {
                subcategories = [
                    'Acuáticos',
                    'Padel',
                    'Tenis'
                ];
            } else if (tipo === 'emergencies') {
                subcategories = [
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
            }

            if (subcategories) {
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
        });
    });
});
