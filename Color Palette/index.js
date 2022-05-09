const colours = ['Red', 'green', 'rgba(132, 135, 200)', '#f15025'];

const btn = document.getElementById('btn');
const colour = document.querySelector('.color')

btn.addEventListener('click', function() {
    const randomNumber = getRandomColour()
    document.body.style.backgroundColor = colours[randomNumber]
    colour.textContent = colours[randomNumber]
});


function getRandomColour() {
    return Math.floor(Math.random() * colours.length)
}