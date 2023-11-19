const visitMessages = document.getElementById('visit-message');

if (visitMessages) {
    let visitMessage = Number(window.localStorage.getItem('localNumberVisits')) || 0
    if (visitMessage !== 0) {
        visitMessages.textContent = "You have visited " + visitMessage + " times.";
    }
    else {
        visitMessages.textContent = "Welcome! Let us know if you have any questions."
    }
    visitMessage++;
    localStorage.setItem('localNumberVisits', visitMessage);
}

const lastVisitL = document.getElementById("last-visit");
	
if (lastVisitL){
	const msToDays = 84600000;
	const todaysDate = Date.now();
	let lastVisit = Number(window.localStorage.getItem("lastVisit")) || 0;

	if (todaysDate - lastVisit < msToDays){
		lastVisitL.textContent = "Back so soon! Awesome! ";
	} 
    else if (lastVisit !== 0) {
		const numbDays = Math.ceil((todaysDate - lastVisit) / msToDays);
        const daysText = numbDays === 1 ? "day" : "days";
        lastVisitL.textContent = "You last visited " + numbDays + " " + daysText + " ago.";
	} 
    else {
		lastVisitL.textContent = "Welcome! Let us know if you have any questions.";
	}
	
	localStorage.setItem("lastVisit", todaysDate);
}

