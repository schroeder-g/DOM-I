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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


// Create selectors by using any of the DOM element's methods
const logo = document.querySelector('#logo-img')
//Note that IDs have been used on all images. Use the IDs to update src path content
logo.setAttribute('src', 'img/logo.png')
console.log(logo)

const callToAction = document.getElementById('cta-img')
callToAction.setAttribute('src', 'img/header-img.png')
console.log(callToAction)

const accentImg = document.getElementById('middle-img')
accentImg.setAttribute('src', 'img/mid-page-accent.jpg')
console.log(accentImg)

const navItems = document.querySelectorAll('a')
navItems[0].innerHTML = "Services"
navItems[1].innerHTML = "Product"
navItems[2].innerHTML = "Vision"
navItems[3].innerHTML = "Features"
navItems[4].innerHTML = "About"
navItems[5].innerHTML = "Contact"
console.log(navItems)

let title = document.querySelector('.cta-text h1')
title.innerHTML = 'DOM <br> Is <br> Awesome'

let ctaBtn = document.querySelector('.cta-text button')
ctaBtn.innerHTML = siteContent.cta.button

// main content: top- / bottom-content
let firstH4 = document.querySelector('.top-content .text-content:nth-of-type(1) h4')
firstH4.innerHTML = siteContent["main-content"]["features-h4"]

let firstContent = document.querySelector('.top-content .text-content:nth-of-type(1) p')
firstContent.innerHTML = siteContent["main-content"]["features-content"]

let secondH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
secondH4.innerHTML = siteContent["main-content"]["about-h4"]

let secondContent = document.querySelector('.top-content .text-content:nth-of-type(2) p')
secondContent.innerHTML = siteContent["main-content"]["about-content"]

let thirdH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
thirdH4.innerHTML = siteContent["main-content"]["services-h4"]

let thirdContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')
thirdContent.innerHTML = siteContent['main-content']['services-content']

let fourthH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
fourthH4.innerHTML = siteContent["main-content"]["product-h4"]

let fourthContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
fourthContent.innerHTML = siteContent['main-content']['product-content']

let fifthH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
fifthH4.innerHTML = siteContent['main-content']['vision-h4']

let fifthContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
fifthContent.innerHTML = siteContent['main-content']['vision-content']

//contact page

let contactTitle = document.querySelector(".contact h4")
contactTitle.innerHTML = siteContent.contact["contact-h4"]

let address = document.querySelector(".contact p:nth-of-type(1)")
address.innerHTML = siteContent.contact.address
console.log(address)

let phone = document.querySelector(".contact p:nth-of-type(2)")
phone.innerHTML = siteContent.contact.phone

let email = document.querySelector(".contact p:nth-of-type(3)")
email.innerHTML = siteContent.contact.email