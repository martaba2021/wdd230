const pricesURL = "https://martaba2021.github.io/wdd230/final/data/prices.json";

async function fetchPrices() {
    try {
        const response = await fetch(pricesURL);
        const prices = await response.json();
        return prices.maxRentalPricing;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
}

async function displayPrices() {
    try {
        const rentalPrices = await fetchPrices();
        let p = document.querySelector('.price-table');
        let out = '';
        for (let price of rentalPrices) {
            out += `
            <tr>
                <td><img src='${price.image}'></td>
                <td>${price.rentalType}</td>
                <td>${price.maxPerson}</td>
                <td>${price.reservationHalf}</td>
                <td>${price.reservationFull}</td>
                <td>${price.walkinHalf}</td>
                <td>${price.walkinFull}</td>
            </tr>
            `;
        }
        p.innerHTML = out;
    } catch (error) {
        console.error('Error displaying prices:', error);
    }
}

// Call the async function
displayPrices();
