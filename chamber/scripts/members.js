const chamberURL = "https://martaba2021.github.io/wdd230/chamber/";
const membersURL = "https://martaba2021.github.io/wdd230/chamber/data/members.json/";

const directoryCard = document.querySelector("#cards");

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.info);
}
getMembers();