

function Start(){
    //set the initial language
    initialLanguage();

    //update the time of current job
    document.getElementById("timeInCurrentCompany").innerHTML = "Analista de software - " + CalculateCurrentTimeOnCompany() + ".";
}

function CalculateCurrentTimeOnCompany(){
    let dateNow = new Date(Date.now());
    let dateBegin = new Date(2021, 01, 01);

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

function openDescription(element) {
    clearInterval(flashIconInterval);

    let image = element.getElementsByTagName("img")[0].getAttribute("src");
    if (image === "icons/down-arrow16.png" || image === "icons/down-arrow16red.png") {
        element.getElementsByTagName("img")[0].setAttribute("src", "icons/up-arrow16.png");
        element.getElementsByClassName("description")[0].style.display = "";
    }
    else {
        element.getElementsByTagName("img")[0].setAttribute("src", "icons/down-arrow16.png");
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

function initialLanguage(){
    changeLanguage(navigator.language);
}

function changeLanguage(language){
    if(language === 'pt-BR'){
        $('[lang="pt-BR"]').toggle(true);
        $('[lang="en-US"]').toggle(false);
        $('[lang="fr"]').toggle(false);
    }
    else if(language === 'en-US'){
        $('[lang="pt-BR"]').toggle(false);
        $('[lang="en-US"]').toggle(true);
        $('[lang="fr"]').toggle(false);
    }
    else if(language === 'fr'){
        $('[lang="pt-BR"]').toggle(false);
        $('[lang="en-US"]').toggle(false);
        $('[lang="fr"]').toggle(true);
    }
    else{
        $('[lang="pt-BR"]').toggle(false);
        $('[lang="en-US"]').toggle(true);
        $('[lang="fr"]').toggle(false);
    }
}

function flashDownArrow(){
    let image = document.getElementById("flashIcon");
    if(image.getAttribute("src") == "icons/down-arrow16.png"){
        image.setAttribute("src", "icons/down-arrow16red.png")
    }
    else{
        image.setAttribute("src", "icons/down-arrow16.png")
    }
}

function flashLink(){
    let image = document.getElementById("flashLink");
    if(image.getAttribute("src") == "icons/fast-forward16.png"){
        image.setAttribute("src", "icons/fast-forward16red.png")
    }
    else{
        image.setAttribute("src", "icons/fast-forward16.png")
    }
}

function stopFlashLink(){
    clearInterval(flashLinkInterval);
    document.getElementById("flashLink").setAttribute("src", "icons/fast-forward16.png");
}

Start();

let flashIconInterval = setInterval(flashDownArrow, 1000);
let flashLinkInterval = setInterval(flashLink, 1000);