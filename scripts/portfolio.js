$(document).ready(function() {
    $('.name').textillate({
        loop: false,
        initialDelay: 300,
        in: {
            effect: 'bounceIn',
            delay: 30,
        }
    });

    $('.job').textillate({
        loop: false,
        initialDelay: 800,
        in: {
            effect: 'bounceIn',
            delay: 30,
        }
    });

    
    // setTimeout(function() {
    //     $('.btn.work').css({
    //         "visibility": "visible",
    //         "animation": "fadeIn 1s ease 1"
    //     });
    // }, 2000);

    var mySwiper = new Swiper('.swiper-container', {
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    let shuffleArray = (array) => {
        var ctrl = array.length, temp, random;
        while(ctrl !== 0) {
            random = Math.floor(Math.random() * ctrl);
            ctrl--;
            temp = array[random];
            array[random] = array[ctrl];
            array[ctrl] = temp;
        }
        return array;
    }

    let string = 'Wordpress Prototyping Html CSS Javascript Jquery Bootstrap React Node.js PHP Static Dynamic';
    let wordsArray = string.split(' ');
    shuffleArray(wordsArray);
    let list_elements = document.querySelectorAll('.words_container ul li');
    for(let i=0; i<list_elements.length; i++ ) {
        console.log('hel');
        if(!(i%2 === 0)) {
            let word = wordsArray[Math.floor(i/2)];
            list_elements[i].innerHTML = `<span>${word}</span>`;
        }
    }

    let Options = {
        root: null,
        rootMargin: '-100px 0 0 100px',
        threshold: 1.0
    }

    let buildIntersectionObserverObject = (animation) => {
        return observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    entry.target.style.animation = animation;
                    observer.unobserve(entry.target);
                }
                else {
                    return;          
                }
            });
        });
    }

    const contents = document.querySelectorAll('.animation');

    contents.forEach(content => {
        let delay = content.getAttribute("data-delay");
        let animationName = content.getAttribute("data-animation");
        buildIntersectionObserverObject(`${animationName} 0.8s ${delay} forwards ease 1`).observe(content);
    });

    const contentOnes =  document.querySelectorAll('.animationOne');

    contentOnes.forEach(contentOne => {
        let delay = contentOne.getAttribute("data-delay");
        let duration = contentOne.getAttribute("data-duration");
        let animationName = contentOne.getAttribute("data-animation");
        buildIntersectionObserverObject(`${animationName} ${duration} ${delay} forwards ease 1`).observe(contentOne);
    });
    
    const paths = document.querySelectorAll('path');

    paths.forEach(path => {
        let delay = path.getAttribute("data-delay");
        let animationName = path.getAttribute("data-animation");
        buildIntersectionObserverObject(`${animationName} 1s ${delay} linear forwards 1`).observe(path);
    });
    
});