const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.image');
let slideNumber = 1;
const length = images.length;
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 880}px)`;
    slideNumber++;
}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 880}px)`;
    slideNumber--;
}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;

}
const getlastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 880}px`;
    slideNumber = length;

}

right.addEventListener('click', () => {

    slideNumber < length ? nextSlide() : getFirstSlide();
});

left.addEventListener('click', () => {

    slideNumber > 1 ? prevSlide() : getlastSlide();
});
const bottom = document.querySelector('.bottom');


for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);

};
const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent';
        // buttons.style.backgroundColor = 'trancparent';
        
    });
};

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        resetBg();

        slider.style.transform = `translateX(-${i * 880}px)`;
        slideNumber = i + 1;

        button.style.backgroundColor = 'white';


    })
});


// nav bar js
function set() {
    document.getElementById("fa-solid").addEventListener("click", () => {
        console.log("adding event");
        let a = document.getElementById("hide");
        if (a.style.display == 'none') {
            a.style.display = 'block';
        }
        else {
            a.style.display = 'none';
        }
    });
}


