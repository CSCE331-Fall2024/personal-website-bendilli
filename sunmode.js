let sunmode = localStorage.getItem('sunmode');

const toggleTheme = () => {
    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'styles.css') { 
        theme.setAttribute('href', 'sun.css'); 
        document.getElementById('logo_image').src = "sun_logo.png"
        document.getElementById('profile').src = "profile2.jpg"
    }
    else{
        theme.setAttribute('href', 'styles.css'); 
        document.getElementById('logo_image').src = "judy-liu.png"
        document.getElementById('profile').src = "profile.jpg"
    }
}