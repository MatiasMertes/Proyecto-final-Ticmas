var element = document.getElementById('Dark-mode');
var light_styles = 'index.css';
var dark_styles  = 'dark-mode.css';

var theme = 'light';

function Darkmode()
{
    if (theme == 'light') {
        theme = 'dark';
        element.setAttribute('href', dark_styles);
    } else {
        theme = 'light';
        element.setAttribute('href', light_styles);
    }
}