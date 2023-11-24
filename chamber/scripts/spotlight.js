const chamberURL = "https://martaba2021.github.io/wdd230/chamber/";
const membersURL = "https://martaba2021.github.io/wdd230/chamber/data/members.json";
const spotlight = document.querySelector('#spotlight');

async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  const goldOrSilverMember = data.members.filter(
    (item) => item.membershipLevel === "Gold" || item.membershipLevel === "Silver"
  );
  displayRandomMembers(goldOrSilverMember, 3);
}

function displayRandomMembers(membersList, itemNumber) {
  let randomSpotlight = [...membersList].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, itemNumber);

  randomSpotlight.forEach((member) => {
    let section = document.createElement('section');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    //let websiteURL = document.createElement('a');
    let image = document.createElement('img');
    let membershipLevel = document.createElement('p');
    let yearsInBusiness = document.createElement('p');

    section.classList.add("card");

    name.textContent = `${member.name}`;
    
    //create anchor tag
    let nameLink = document.createElement('a');
  
    nameLink.setAttribute('href', member.websiteURL);
    nameLink.setAttribute('target', "_blank");
    nameLink.appendChild(name);

    address.textContent = `Address: ${member.address}`;
    phoneNumber.textContent = `Phone: ${member.phoneNumber}`;
    image.setAttribute('src', member.image);
    image.setAttribute('alt', member.name);
    membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
    yearsInBusiness.textContent = `Years in Business: ${member.yearsInBusiness}`;

    section.appendChild(image);
    section.appendChild(nameLink); // Append the anchor tag
    section.appendChild(address);
    section.appendChild(phoneNumber);
    section.appendChild(membershipLevel);
    section.appendChild(yearsInBusiness);
    //section.appendChild(websiteURL)

    spotlight.appendChild(section);
  });
}

getMembers();
