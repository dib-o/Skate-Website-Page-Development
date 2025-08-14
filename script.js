
const priceSets = document.querySelectorAll('.pricing-set');
const SetDiv = document.querySelector('.set.chosen');

priceSets.forEach(set => {
    set.addEventListener('click', () => {
        const title = set.querySelector('h3').textContent;
        const price = set.querySelector('h4').textContent;

        const exists = [...SetDiv.querySelectorAll('h3')]
            .some(h3 => h3.textContent === title)
        
        if (!exists && SetDiv.querySelectorAll('h3').length < 1) {
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            p.textContent = price;
            h3.textContent = title;
            SetDiv.appendChild(h3);
            SetDiv.appendChild(p);
        }
    })
})

const images = document.querySelectorAll('.designs img');
const DesDiv = document.querySelector('.des.chosen'); 

images.forEach(img => {
    img.addEventListener('click', () => {
        const altVal = img.alt;
        const srcVal = img.src;

        const exists = [...DesDiv.querySelectorAll('p')]
            .some(p => p.textContent === altVal);

        if (!exists && DesDiv.querySelectorAll('p').length <= 10) {
            const line = document.createElement('div');
            const icon = document.createElement('img');
            const p = document.createElement('p');
            line.classList.add('line');          
            p.textContent = altVal;
            icon.src = srcVal;

            line.appendChild(icon);
            line.appendChild(p);
            DesDiv.appendChild(line);
        }
    });
});


let design_containers = document.querySelectorAll('.design-content .containers .container');

design_containers.forEach(design_container => {
    const icon = design_container.querySelector('.title .bx');

    design_container.addEventListener('click', (e) => {
        const isIconClick = e.target === icon;
        const isActive = design_container.classList.contains('active');

        design_containers.forEach(dc => {
            const ico = dc.querySelector('.title .bx');
            dc.classList.remove('active');
            if (ico) {
                ico.classList.remove('bx-minus');
                ico.classList.add('bx-plus');
            }
        });

        if (!isActive || !isIconClick) {
            design_container.classList.add('active');
            if (icon) {
                icon.classList.add('bx-minus');
                icon.classList.remove('bx-plus');
            }
        }
    });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });
    
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    
    footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2);
}

window.addEventListener("load", () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('skate-content'); 

    setTimeout(() => {
        preloader.classList.add('fade-out');

        setTimeout(() => {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 1000);
    }, 5500);
});