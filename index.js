function Start(){
    document.getElementById("timeInCurrentCompany").innerHTML = "Analista de software - " + CalculateCurrentTimeOnCompany() + ".";
}

function CalculateCurrentTimeOnCompany(){
    let dateNow = new Date(Date.now());
    let dateBegin = new Date(2019, 08, 10);

    let pastTimeInYears = dateNow - dateBegin;
    pastTimeInYears = pastTimeInYears/1000/60/60/24/365;
    let yearsPast = Math.trunc(pastTimeInYears);
    let monthsPast = Math.trunc((pastTimeInYears - yearsPast)*365/30);
    
    let message = yearsPast;
    if(yearsPast > 1){
        message += " anos";
    }
    else{
        message += " ano "
    }
    message += "e " + monthsPast;
    if(monthsPast > 1){
        
        message += " meses";
    }
    else{
        message += " mês"
    }

    return message;
}

function hideSection(element){
    if (element.getElementsByTagName("i")[0].innerHTML === "expand_more") {
        element.getElementsByTagName("i")[0].innerHTML = "expand_less";
        element.getElementsByClassName("description")[0].style.display = "";
    }
    else {
        element.getElementsByTagName("i")[0].innerHTML = "expand_more";
        element.getElementsByClassName("description")[0].style.display = "none";
    }
}

function openDescription(element) {
    if (element.getElementsByTagName("i")[0].innerHTML === "expand_more") {
        element.getElementsByTagName("i")[0].innerHTML = "expand_less";
        element.getElementsByClassName("description")[0].style.display = "";
    }
    else {
        element.getElementsByTagName("i")[0].innerHTML = "expand_more";
        element.getElementsByClassName("description")[0].style.display = "none";
    }
}

function changeTheme() {
    let themeFile = document.getElementById("themeFile");

    if (themeFile.getAttribute("href") == "light.css") {
        themeFile.setAttribute("href", "dark.css");
    }
    else {
        themeFile.setAttribute("href", "light.css");
    }
}

Start();