const chamberURL = "https://martaba2021.github.io/wdd230/chamber/";
const membersURL = "https://martaba2021.github.io/wdd230/chamber/data/members.json";

const directoryList = document.querySelector('#members');

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function displayMembers(memberships) {
    const membersList = document.getElementById('members');

    memberships.forEach((member) => {
        let listItem = document.createElement('li');

        // Display member name
        let nameElement = document.createElement('h3');
        nameElement.textContent = member.name;
        listItem.appendChild(nameElement);

        // Create a sub-list for member details
        let detailsList = document.createElement('ul');
        detailsList.innerHTML = `
            <li><strong>Address:</strong> ${member.address}</li>
            <li><strong>Phone Number:</strong> ${member.phoneNumber}</li>
            <li><strong>Website:</strong> <a href="${chamberURL + member.websiteURL}" target="_blank">${member.websiteURL}</a></li>
            <li><strong>Membership Level:</strong> ${member.membershipLevel}</li>
            <li><strong>Years in Business:</strong> ${member.yearsInBusiness}</li>
        `;

        listItem.appendChild(detailsList);

        // Display member image
        let imageElement = document.createElement('img');
        imageElement.setAttribute('src', chamberURL + member.image);
        imageElement.setAttribute('alt', `${member.name} Image`);
        listItem.appendChild(imageElement);

        membersList.appendChild(listItem);
    });
}
getMembers()