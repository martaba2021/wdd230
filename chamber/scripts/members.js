const chamberURL = "https://martaba2021.github.io/wdd230/chamber/";
const membersURL = "https://martaba2021.github.io/wdd230/chamber/data/members.json";

const directoryList = document.querySelector('#members');

async function getMembers() {
        const response = await fetch(membersURL);
        const data = await response.json();
        // console.log(data);
        displayMembers(data.members);
}

function displayMembers(companies) {
    companies.forEach((member) => {
        console.log(member);
        let section = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let companyURL = document.createElement('a');
        let image = document.createElement('img');
        let membershipLevel = document.createElement('p');
        let yearsInBusiness = document.createElement('p');
        
        name.textContent = `Company: ${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phoneNumber.textContent = `Phone: ${member.phoneNumber}`;
        companyURL.textContent = `${member.companyURL}`;
        companyURL.setAttribute('href', member.companyURL);
        companyURL.setAttribute('target', "_blank");
        image.setAttribute('src', member.image);
        image.setAttribute('alt', member.name);
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        yearsInBusiness.textContent = `Years in Business: ${member.yearsInBusiness}`;


        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phoneNumber);
        section.appendChild(membershipLevel);
        section.appendChild(yearsInBusiness);
        section.appendChild(companyURL)

        directoryList.appendChild(section);
    });
    
}

gridButton.addEventListener('click', () => {
    directory.classList.remove('list-view');
    directory.classList.add('grid-view');
});

listButton.addEventListener('click', () => {
    directory.classList.remove('grid-view');
    directory.classList.add('list-view');
});

getMembers();
