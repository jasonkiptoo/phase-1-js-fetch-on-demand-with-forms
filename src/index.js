const init = () => {

    const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const input=document.querySelector(`input#searchByID`)

    console.log(input.value)
    // console.log(event.target.children[1].value)

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      
        const Title=document.querySelector('section#movieDetails h4')
        const Summary=document.querySelector('section#movieDetails p')

        Title.innerText=data.title
        Summary.innerText=data.summary

});
  
});
}

document.addEventListener('DOMContentLoaded', init);

