const homeURL = "https://martaba2021.github.io/wdd230/final/";
const pricesURL = "https://martaba2021.github.io/wdd230/final/data/prices.json";
const tableContainer = document.querySelector('.price-table');

async function getPrices() {
    const response = await fetch(pricesURL);
    const data = await response.json();
    //console.log(data);

    displayPrices(data.maxRentalPricing);
}
function displayPrices(rentalPrices) {
    // Create a table element
    const table = document.createElement('table');
    table.classList.add('price-table');

    // Add a table caption (name)
    const caption = table.createCaption();
    caption.textContent = 'Max Rental Pricing';

    // Create the table header
    const headerRow1 = table.insertRow();
    const headerRow2 = table.insertRow();

    const headerCell1 = headerRow1.insertCell(0);
    const headerCell2 = headerRow1.insertCell(1);
    const headerCell3 = headerRow1.insertCell(2);
    const headerCell4 = headerRow1.insertCell(3);
    const headerCell5 = headerRow2.insertCell(2);
    const headerCell6 = headerRow2.insertCell(3);

    headerCell1.textContent = 'Rental Type';
    headerCell2.textContent = 'Max Persons';
    headerCell3.textContent = 'Advance Reservation';
    headerCell4.textContent = 'Walk-in';
    headerCell5.textContent = 'Half day';
    headerCell6.textContent = 'Full day';

    rentalPrices.forEach((price) => {
        // Create a new row for each rental type
        const row = table.insertRow();

        // Create cells for each piece of data
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);

        cell1.textContent = price.rentalType;
        cell2.textContent = price.maxPerson;
        cell3.textContent = `Half day: ${price.reservatioHalf}`;
        cell4.textContent = `Full day: ${price.reservationFull}`;
        cell5.textContent = `Half day: ${price.walkinHalf}`;
        cell6.textContent = `Full day: ${price.walkinFull}`;
    });

    // Append the table to the container
    tableContainer.innerHTML = ''; // Clear previous content
    tableContainer.appendChild(table);
}
getPrices();
