let date = new Date();
let copyrightYear = date.getFullYear();
document.getElementById("copyrightYear").innerHTML = copyrightYear;

let modified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = modified;