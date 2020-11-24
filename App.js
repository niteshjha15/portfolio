const modal = document.querySelector('.modal')
const images = document.querySelectorAll('.portfolio__img')
const fullImage = document.querySelector('.modal-img')
const caption = document.querySelector('.caption')
console.log(images)

images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.classList.add('open')
        fullImage.classList.add('open')
        const original = image.getAttribute('data-original')
        console.log(original)
        fullImage.src = `./full.js/${original}`
        const altText = image.alt
        caption.textContent = altText
    })
})

modal.addEventListener('click',() => {
    if(event.target.classList.contains('modal')){
        modal.classList.remove('open')
        fullImage.classList.remove('open')
    }
})