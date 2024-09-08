let curStyleSheet = localStorage.getItem('curStyleSheet');

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