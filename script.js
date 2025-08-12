
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

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}