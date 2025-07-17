let CurrentIndex = 1
const TotalImage = 2 // Skriv hur många bilder/banner som existerar i "./img/banner" mappen. (Bildernas filformat måste vara avif)

const BannerIMG = document.getElementById("BannerIMG")
const LeftArrow = document.getElementById("LeftArrow")
const RightArrow = document.getElementById("RightArrow")

if (TotalImage > 1) { // Om det finns mer än en bild/banner i "./img/banner" mappen så kommer man se höger/vänster ikonerna.
    LeftArrow.style.display = "block"
    RightArrow.style.display = "block"
}

function UpdateImage() {
    BannerIMG.src = `./img/banner/${CurrentIndex}.avif`
}

function NextImage() { // "Nästa bild" knappen (Läger 1 till CurrentIndex och om CurrentIndex är större än TotalImage så blir den 1)
    CurrentIndex++ // CurrentIndex++ => CurrentIndex = CurrentIndex + 1
    if (CurrentIndex > TotalImage) CurrentIndex = 1
    UpdateImage()
}

function PrevImage() { // Gör samma sak som NextImage fast tvärtom
    CurrentIndex-- // CurrentIndex-- => CurrentIndex = CurrentIndex - 1
    if (CurrentIndex < 1) CurrentIndex = TotalImage
    UpdateImage()
}

const ItemsContainer = document.querySelector(".lb-wrapper")

const StarContainer = document.getElementById("item-content-rating")

const SvgCode = `
    <svg style="height: 1rem;" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill="orange">
        <path d='m10.4 14.8l-5.5 3.7 1.8-6.4L1.5 8l6.7-.2 2.3-6.3 2.3 6.3 6.6.2-5.3 4.1 1.8 6.4-5.5-3.7z'/>
    </svg>
`

for (let i = 0; i < 5; i++) {
    const Items = `
        <div class="lb-wrapper-item">
            <div class="lb-wrapper-item-header">
                <div class="lb-wrapper-item-header-compare">
                    <img src="./img/compare-icon.png">
                    <p>Jämför</p>
                </div>
                <img src="./img/favorite-icon.png">
            </div>
            <div class="lb-wrapper-item-content">
                <div class="lb-wrapper-item-content-img">
                    <img id="itemimg" src="./img/tv.avif" style="width: 226px; height: 152px; transition: scale 0.3s ease;">
                    <img src="./img/rea-icon.svg" style="width: 90px; height: 90px; left: 0; top: .5rem; position: absolute;">
                </div>
                <div class="lb-wrapper-item-content-info">
                    <p style="color: hsl(0 0% 46.3% / 1); font-size: .875rem; line-height: 1.25rem; font-weight: 350;">Finns i andra varianter</p>
                    <h4 style="font-size: 1.125rem; font-weight: 700;">Samsung 70" DU7175 4K LED Smart TV (2024)</h4>
                    <div>
                        <div id="item-content-rating">
                            ${SvgCode.repeat(4)}
                            <svg style="height: 1rem;" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill="#e5e7eb">
                                <path d='m10.4 14.8l-5.5 3.7 1.8-6.4L1.5 8l6.7-.2 2.3-6.3 2.3 6.3 6.6.2-5.3 4.1 1.8 6.4-5.5-3.7z'/>
                            </svg>
                        </div>
                        <p style="margin-left: .4rem;">4.0</p>
                        <p style="margin-left: .2rem; opacity: .4;">(24 omdömen)</p>
                    </div>
                    <ul id="ItemList" style="display: none;">
                        <li>60Hz, 3x HDMI, HDMI eArc</li>
                        <li>4K Upscaling, PurColor, HDR</li>
                        <li>Smart TV, Crystal Processor 4K</li>
                    </ul>
                </div>
                <div class="lb-wrapper-item-content-price">
                    <div class="lb-wrapper-item-cp-price">
                        <p style="font-size: 1.8rem; font-weight: 600;">7990.-</p>
                        <div>
                            <span>SPARA 7000</span>
                            <p>Tidigare pris 14990.-</p>
                        </div>
                    </div>
                    <div class="lb-wrapper-item-cp-description">
                        <p>REA! Gäller t.o.m. söndag 13 april med reservation för slutförsäljning</p>
                    </div>
                </div>
                <div class="lb-wrapper-item-content-description">
                    <span style="font-size: .75rem; color: hsl(89 86% 28% / 1); font-weight: 500;">I lager online (100+) <span style="color: black; font-weight: 400;">| Finns i lager i 42 butik(er)</span> </span>
                </div>
            </div>
        </div>
    `
    ItemsContainer.innerHTML += Items
}

const ItemHover = document.getElementsByClassName("lb-wrapper-item-content-img")
const ChangeOtherItem = document.getElementsByClassName("lb-wrapper-item-content-info")

function HoverEffect(i) {
    const ItemIMG = ItemHover[i].querySelector("img");
    const ItemList = ChangeOtherItem[i].querySelector("#ItemList")
    ItemIMG.style.transform = 'scale(.7)';
    ItemHover[i].style.height = '180px';
    ChangeOtherItem[i].style.height = '176px';
    ItemList.style.display = 'block'
}

function RemoveHoverEffect(i) {
    const ItemIMG = ItemHover[i].querySelector("img");
    const ItemList = ChangeOtherItem[i].querySelector("#ItemList")
    ItemIMG.style.transform = 'scale(1)';
    ItemHover[i].style.height = '240px';
    ChangeOtherItem[i].style.height = '116px';
    ItemList.style.display = 'none';
}

for (let i = 0; i < ItemHover.length; i++) {
    ItemHover[i].addEventListener("mouseenter", () => HoverEffect(i));
    ItemHover[i].addEventListener("mouseleave", () => RemoveHoverEffect(i));

    ChangeOtherItem[i].addEventListener("mouseenter", () => HoverEffect(i));
    ChangeOtherItem[i].addEventListener("mouseleave", () => RemoveHoverEffect(i));
}

// Scroll knappen
const LBWrapper = document.querySelector('.lb-wrapper');

const RightScroll = document.querySelector('.lbw-scroll-right');
const LeftScroll = document.querySelector('.lbw-scroll-left');

// 200 => Använder px
RightScroll.addEventListener('click', function() {
    LBWrapper.scrollLeft += 200;
});

LeftScroll.addEventListener('click', function() {
    LBWrapper.scrollLeft -= 200;
});

LBWrapper.addEventListener('scroll', function() {
    if (LBWrapper.scrollLeft + LBWrapper.clientWidth >= LBWrapper.scrollWidth) {
        RightScroll.style.display = 'none';
    } else {
        RightScroll.style.display = 'flex';
    }

    if (LBWrapper.scrollLeft <= 0) {
        LeftScroll.style.display = 'none';
    } else {
        LeftScroll.style.display = 'flex';
    }
});

// Kontrollerar scroll i början när hemsidan laddar
window.addEventListener('load', function() {
    LBWrapper.dispatchEvent(new Event('scroll'));
});

// Drop down menu
const toggle = document.querySelector('.menu')
const dropdownMenu = document.querySelector('.dropdown-menu')
const menuIcon = document.getElementById('menuIcon')

toggle.addEventListener('click', () => {
    const isOpen = dropdownMenu.style.display == 'flex'

    dropdownMenu.style.display = isOpen ? 'none' : 'flex'
    menuIcon.src = isOpen ? './img/menu-icon.png' : './img/close-icon-blue.png'
});