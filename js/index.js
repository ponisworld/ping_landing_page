const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
        document.querySelector('main').classList.add('none');
        document.querySelector('.value').innerText = input.value;
        document.querySelector('#thankYou').classList.remove('none');
    } else if (input.value === '') {
        input.classList.add('invalid');
        document.querySelector('p.error').innerText = 'Please type your email! We won\'t steal your data.'
    } else {
        input.classList.add('invalid');
        document.querySelector('p.error').innerText = 'Please provide a valid email!';
    }
})