let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

/*form data*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbwzBCgjwRsTFmqtiyRgLsvdWA7ECKlaaZs0kad8ssy5cXoKhKMBhA5eZYaeWm8ROMe9/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Subscribing to us..! "))
                .catch(error => console.error('Error!', error.message))
            })