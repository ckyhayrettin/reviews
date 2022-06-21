const reviews = [
    {
        image: 'img/person-1.jpg',
        name: 'hayrettin cky',
        job: 'engineer',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur veniam earum. Officia porro esse, odit dolorem quas, maxime, doloribus perferendis doloremque possimus placeat eveniet?'
    },
    {
        image: 'img/person-2.jpg',
        name: 'hasan bşr',
        job: 'teacher',
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita unde ipsam, quia impedit vero voluptatem suscipit iure commodi! Perferendis, quidem.'
    },
    {
        image: 'img/person-3.jpg',
        name: 'kasım svd',
        job: 'dentist',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta facilis ea hic, velit molestiae veritatis cumque pariatur possimus facere culpa mollitia consequatur autem sed in maxime consectetur ipsam officia!'
    },
    {
        image: 'img/person-4.jpg',
        name: 'ibrahim min',
        job: 'doctor',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea nam magnam consectetur fuga impedit in at!'
    }
];

var index = 0;
var slaytCount = reviews.length;
var interval;

var settings = {
    duration: '2000',
    random: true
}

init(settings);

document.querySelector('.fa-angle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index)
});

document.querySelector('.fa-angle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index)
});

document.querySelectorAll('.angle').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval)
    })
});

document.querySelectorAll('.angle').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
})

function init(settings) {

    var prev;

    interval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount)
            } while (index == prev) {
                prev = index;
            }
        } else {
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
        }
        showSlide(index);
        index++;
    }, settings.duration)
}

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.images').setAttribute('src', reviews[index].image);

    document.querySelector('.person-name').textContent = reviews[index].name;

    document.querySelector('.job').textContent = reviews[index].job;

    document.querySelector('.about').textContent = reviews[index].about;
}

const button = document.querySelector('.btn');
const showAbout = document.querySelector('.show-about');
const closeBtn = document.querySelector('.close-btn');
const showText = document.querySelector('.show-text');

button.addEventListener('click', function () {
    showAbout.className = 'show-mobile'
    clearInterval(interval)



});

closeBtn.addEventListener('click', function () {
    //showAbout.classList.remove('show-mobile')
    showAbout.className = 'close-mobile'
    init(settings);
});