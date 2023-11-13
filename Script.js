console.log('E Commerce Website Project');
var cardContainer = Array.from(document.getElementsByClassName('cardContainer'));
const webImages = [
    {
        imageUrl: "Images/Supreme.jpg",
        cardHeading: "Winter Quilt Filling",
        cardText: "A wonderfully lightweight duvet inserts for a comfortable sleep",
        button: "Shop Now",
    },
    {
        imageUrl: "Images/download.png",
        cardHeading: "Shop By Budget",
        cardText: " ",
        button:"Shop Now",
    },
    {
        imageUrl: "Images/event.jpg",
        cardHeading: " ",
        cardText: " ",
        button: "Event Sales", 
    },
    {
        imageUrl: "Images/Untitled-03.png",
        cardHeading: "Embroidered Collection",
        cardText: "Add a touch of Elegance to your bedroom.",
        button: "Shop Now",
    },
    {
        imageUrl: "Images/chair.png",
        cardHeading: "Furniture",
        cardText: "Furniture must have Personality as well as be beautiful.",
        button: "Shop Now",
    },
    {
        imageUrl: "Images/Untitled-3.png",
        cardHeading: "Bridal Collection",
        cardText: "The most Luxurious item is the beautiful bed with Best duvet set.",
        button: "Shop Now",
    }
]

cardContainer.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = webImages[i].imageUrl;
    element.getElementsByTagName('button')[0].innerText = webImages[i].button;
    element.getElementsByClassName('card-title')[0].innerText = webImages[i].cardHeading;
    element.getElementsByClassName('card-text')[0].innerText = webImages[i].cardText;
})

// card carousel

var swiper = new swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});