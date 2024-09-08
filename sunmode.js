let currentTheme = localStorage.getItem('currentTheme');

window.onload = function(){
    const savedStylesheet = localStorage.getItem('currentTheme');

    // If there is a saved stylesheet, apply it
    if (savedStylesheet) {
        document.getElementById('curTheme').setAttribute('href', savedStylesheet);
        var theme = document.getElementsByTagName('link')[0];
        if(theme.getAttribute('href') == 'styles.css'){
            document.getElementById('logo_image').src = "judy-liu.png";
            document.getElementById('profile').src = "profile.jpg";
        }
        else{
            document.getElementById('logo_image').src = "sun_logo.png";
            document.getElementById('profile').src = "profile2.jpg";
        }
    }
}

function load_style()
{
    page_style = localStorage.getItem("currentTheme");
    if (page_style === null)
    {
   	    page_style = "styles.css";
    }
    document.getElementById("curTheme").setAttribute("href", page_style);

    if(page_style == "styles.css"){
        document.getElementById('logo_image').src = "judy-liu.png";
        document.getElementById('profile').src = "profile.jpg";
    }
    else{
        document.getElementById('logo_image').src = "sun_logo.png";
        document.getElementById('profile').src = "profile2.jpg";
    }
}

function toggleTheme(){
    var theme = document.getElementsByTagName('link')[0];
    if(theme.getAttribute('href') == 'styles.css'){
        localStorage.setItem("currentTheme", "sun.css");
        load_style();
    }
    else{
        localStorage.setItem("currentTheme", "styles.css");
        load_style();
        
    }
   
}

/*let curStyleSheet = localStorage.getItem('curStyleSheet');

const toggleTheme = () => {
    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'styles.css') { 
        theme.setAttribute('href', 'sun.css'); 
        document.getElementById('logo_image').src = "sun_logo.png";
        document.getElementById('profile').src = "profile2.jpg";
    }
    else{
        theme.setAttribute('href', 'styles.css'); 
        document.getElementById('logo_image').src = "judy-liu.png";
        document.getElementById('profile').src = "profile.jpg";
    }
}
*/

/*
function toggleTheme(){
    page_theme = localStorage.getElementById("curTheme");

    // if no value, stick to moon
    if (page_theme.getAttribute('href') === null) { 
        page_theme = 'styles.css';
    }
    // if it starts on moon switch to sun
    else if(page_theme.getAttribute('href') == "styles.css"){
        page_theme = 'sun.css';
        toggleSun();
    }
    // if it starts on sun switch to moon
    else{
        page_theme = 'styles.css';
        toggleMoon();
    }

    document.getElementById('curTheme').setAttribute("href", page_theme);
}

function toggleMoon(){
    document.getElementById( "curTheme").src = "styles.css" ;
    load_style();
}

function toggleSun(){
    localStorage.setElementById("curTheme").src = "sun.css";
    load_style();
}
*/