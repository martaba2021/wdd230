const homeURL = "https://martaba2021.github.io/wdd230/final/";
const pricesURL = "https://martaba2021.github.io/wdd230/final/data/prices.json";
const directory = document.querySelector('.grid-view');

async function getPrices() {
        const response = await fetch(pricesURL);
        const data = await response.json();
        // console.log(data);
        displayPrices(data.maxRentalPricing);
}

function displayPrices(maxRentalPricing) {
    maxRentalPricing.forEach((price) => {
        //console.log(member);
        let section = document.createElement('section');
        let rentalType = document.createElement('h3');
        let maxPerson = document.createElement('p');
        let reservation = document.createElement('h4');
        let halfDay = document.createElement('p');
        let fullDay = document.createElement('p');
        let walkin = document.createElement('h4');
        let halfDay = document.createElement('p');

        section.classList.add("card");
        
        name.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phoneNumber.textContent = `Phone: ${member.phoneNumber}`;
        websiteURL.textContent = `${member.websiteURL}`;
        websiteURL.setAttribute('href', member.websiteURL);
        websiteURL.setAttribute('target', "_blank");
        image.setAttribute('src', member.image);
        image.setAttribute('alt', member.name);
        membeipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        yearsInBusiness.textContent = `Years in Business: ${member.yearsInBusiness}`;

        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phoneNumber);
        section.appendChild(membershipLevel);
        section.appendChild(yearsInBusiness);
        section.appendChild(websiteURL)

        directory.appendChild(section);
    });
    
}
getMembers();

document.addEventListener('DOMContentLoaded', () => {
const gridButton = document.getElementById('gridButton');
const listButton = document.getElementById('listButton');
const display = document.querySelector('article')

gridButton.addEventListener('click', () => {
    display.classList.remove('list-view');
    display.classList.add('grid-view');
});

listButton.addEventListener('click', () => {
    display.classList.remove('grid-view');
    display.classList.add('list-view');
});
})