const navLinks = document.querySelector('.navbar');
function toggleMenu() {
    navLinks.classList.toggle('active');
}
function closeMenu() {
    navLinks.classList.remove('active');
}
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.setProperty('--delay', `${index * 0.2}s`);
});
let currentIndex = 0; // لتتبع الصورة الحالية
let imgInterval;
let imgChange = document.querySelector(".specaialImg");
let imagesArray = ["shop1.png", "shop2.png", "shop3.png"]
function changeImages() {
    imgInterval = setInterval(() => {
        imgChange.src = `images/${imagesArray[currentIndex]}`
        currentIndex++;
        if (currentIndex >= imagesArray.length) {
            currentIndex = 0;
        }
    }, 4000)
}
let navLinksA = document.querySelectorAll('.navbar li a');

navLinksA.forEach(link => {
    link.addEventListener('click', function () {
        navLinksA.forEach(l => l.classList.remove('active')); // إزالة active من الجميع
        this.classList.add('active'); // إضافة active للعنصر المضغوط
    });
});
changeImages();