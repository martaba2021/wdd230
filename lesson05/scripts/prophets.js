const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayProphets = (prophets) => {
    prophets.forEach ((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let potrait = document.createElement('img');
        let birthDate = document.createElement('p')
        let birthPlace = document.createElement('P')

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        potrait.setAttribute('src', prophet.imageurl);
        potrait.setAttribute('alt', `Potrait of ${prophet.name} ${prophet.lastname}`);
        potrait.setAttribute('loading', 'lazy');
        potrait.setAttribute('width', '200px');
        potrait.setAttribute('height', '250px');

        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(potrait);

        cards.appendChild(card);
    });
}
getProphetData();
