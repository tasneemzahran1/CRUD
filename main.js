var site = document.getElementById("name")
var url = document.getElementById("url")
var allSites = []
function validName() {
    var regex = /^[A-Z][a-z]{3,}[0-9]{0,}$/
    if (regex.test(site.value) == true) {
        return true
    }

    return false

}
function validUrl() {
    var regex = /^(https:)/
    if (regex.test(url.value) == true) {
        return true
    }
    else {
        return false
    }
}
function catchValue() {
    if (validName() == true & validUrl() == true) {
        var website = {
            siteName: site.value,
            link: url.value
        }
        allSites.push(website)
        localStorage.setItem("all",JSON.stringify(allSites))
        clearInputs()
        display()
        console.log(allSites);
    }
    else {
        window.alert(`Site Name or Url is not valid, Please follow the rules below :
        Site name must contain at least 3 characters
        Site URL must be a valid one`)
        clearInputs()

    }
}
function clearInputs() {
    site.value = ""
    url.value = ""
}
function display() {
    var cartoona = ""
    for (var i = 0; i < allSites.length; i++) {
        cartoona +=
            `<tr>
                <td>${i}</td>
                <td>${allSites[i].siteName}</td>
                <td><button class="btn  fs-6"><a class="text-decoration-none text-white" href="${allSites[i].link}"/><i class="fa-solid fa-eye pe-2"></i>Visit</a></button></td>
                <td><button class="btn text-white fs-6 bg-danger del"><i class="fa-solid fa-trash  pe-2"></i> Delete</button></td>
            </tr>`
    }
    document.getElementById("demo").innerHTML = cartoona
}
if (localStorage.getItem("all") != null) {
    allSites = JSON.parse(localStorage.getItem("all"))
    console.log(allSites)
    display()
}
