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
    //console.log(rentalPrices);

    // Add a table caption (name)
    const caption = table.createCaption();
    caption.textContent = 'Max Rental Pricing';

    // Create the table header
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);
    const headerCell3 = headerRow.insertCell(2);
    const headerCell4 = headerRow.insertCell(3);

    headerCell1.textContent = 'Rental Type';
    headerCell2.textContent = 'Max Persons';
    headerCell3.textContent = 'Advance Reservation';
    headerCell4.textContent = 'Walk-in';

    rentalPrices.forEach((price) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = price.rentalType;
        cell2.textContent = price.maxPerson;
        

        cell3.textContent = (price.reservation)?
            `Half day: ${price.reservation[0].halfDay}, Full day: ${price.reservation[0].fullDay}` :'';
            
            //console.log('walkin:', price.walkin);
            //console.log('walkin[0]:', price.walkin && price.walkin[0]);
            
        cell4.textContent = (price.walkin)?
            `Half day: ${price.walkin[0].halfDay}, Full day: ${price.walkin[0].fullDay}` : '';
    });

    tableContainer.appendChild(table);
}
getPrices();