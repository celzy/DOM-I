const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// created selectors for elements to point to data


const title = document.querySelector("h1")

// added nav menu names
const navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"]
navItems[1].textContent = siteContent["nav"]["nav-item-2"]
navItems[2].textContent = siteContent["nav"]["nav-item-3"]
navItems[3].textContent = siteContent["nav"]["nav-item-4"]
navItems[4].textContent = siteContent["nav"]["nav-item-5"]
navItems[5].textContent = siteContent["nav"]["nav-item-6"]

// matching index page content to original page content
let newTitle = document.querySelector(".cta .cta-text h1");
newTitle.textContent = siteContent["cta"]["h1"];
// creating text for get started button
let buttonInfo = document.querySelector("button");
buttonInfo.textContent = "Get Started";
//fixing img src for top container
document.getElementById("cta-img").src = "img/header-img.png";
//top two main content titles
const toptitles = document.querySelectorAll(".main-content .top-content h4");
toptitles[0].textContent = siteContent["main-content"]["features-h4"];
toptitles[1].textContent = siteContent["main-content"]["about-h4"];
//top two main content paragraphs
const topParagraphs = document.querySelectorAll(".main-content .top-content p");
topParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topParagraphs[1].textContent = siteContent["main-content"]["about-content"];
//middle img
document.getElementById("middle-img").src = "img/mid-page-accent.jpg";
//bottom three parahraph titles
const bottomtitles = document.querySelectorAll(".main-content .bottom-content h4");
bottomtitles[0].textContent = siteContent["main-content"]["services-h4"];
bottomtitles[1].textContent = siteContent["main-content"]["product-h4"];
bottomtitles[2].textContent = siteContent["main-content"]["vision-h4"];
//bottom three paragraph info
const bottomParagraphs = document.querySelectorAll(".main-content .bottom-content p");
bottomParagraphs[0].textContent = siteContent["main-content"]["services-content"];
bottomParagraphs[1].textContent = siteContent["main-content"]["product-content"];
bottomParagraphs[2].textContent = siteContent["main-content"]["vision-content"];
// contact section h4 tag
const contactTitle = document.querySelectorAll(".contact h4");
contactTitle[0].textContent = siteContent["contact"]["contact-h4"];
//contact section p tags
const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

// copyright section
const copyrightInfo = document.querySelectorAll("footer p");
copyrightInfo[0].textContent = siteContent["footer"]["copyright"];

//changing nav bar color
 let aElements = document.getElementsByTagName("a");
 for (let i = 0; i < aElements.length; i++) {
   aElements[i].style.color = "green";
}
//adding new navigation link
let navSection = document.querySelector("nav");

let newNavText1 = document.createElement("a");
newNavText1.textContent = "Home";
newNavText1.style.color = "green";

let newNavText2 = document.createElement("a");
newNavText2.textContent = "Customer Service";
newNavText2.style.color = "green";

navSection.prepend(newNavText1);
navSection.appendChild(newNavText2);