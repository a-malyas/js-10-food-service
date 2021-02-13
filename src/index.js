import itemsTemplate from './template.hbs';
import images from './menu.json';
import './styles.css';


const markup = itemsTemplate(images);
const imagesRef = document.querySelector('.js-menu');
imagesRef.insertAdjacentHTML('beforeend', markup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');
const savedTheme = localStorage.getItem('theme');

checkboxRef.addEventListener('change', handleCheckboxChange);
function handleCheckboxChange(event) {
    event.preventDefault();
    if (checkboxRef.checked) {
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

if (savedTheme === Theme.DARK) {
    bodyRef.classList.add(savedTheme);
    checkboxRef.checked = true;
}