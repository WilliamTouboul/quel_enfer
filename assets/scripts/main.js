/* ----------------------------------- nav ---------------------------------- */
const nav = document.querySelector('.navbar');
const close_button = document.querySelector('.close_button');

close_button.addEventListener('click', function () {
    if (nav.classList.contains("nav_show")) {
        nav.classList.remove('nav_show');
        nav.classList.add('nav_hide')
        close_button.style.backgroundImage = ("url('/assets/icons/navbar_toggle.svg')")
    } else if (nav.classList.contains("nav_hide")) {
        nav.classList.remove('nav_hide')
        nav.classList.add('nav_show');
        close_button.style.backgroundImage = ("url('/assets/icons/close_tag.svg')")
    }
})


/* ------------------------- hover projects recents ------------------------- */
const title = document.querySelector('#project_title');
const date = document.querySelector('#project_date');
const cat_1 = document.querySelector('#cat_1');
const cat_2 = document.querySelector('#cat_2');
const proj_img = document.querySelector('#project_img');

const elem_1 = document.querySelector('.section_element_1');
const elem_2 = document.querySelector('.section_element_2');
const elem_3 = document.querySelector('.section_element_3');
const elem_4 = document.querySelector('.section_element_4');

const target_1 = document.querySelector('#target_elem_1');
const target_2 = document.querySelector('#target_elem_2');
const target_3 = document.querySelector('#target_elem_3');
const target_4 = document.querySelector('#target_elem_4');


var elem_1_data = {
    img: 'projects/emergence/MAIN.jpg',
    title: 'EMERGENCE',
    date: '2021',
    category_1: 'Branding',
    category_2: 'graphic design'
}

var elem_2_data = {
    img: 'projects/silkykiss/MAIN.jpg',
    title: 'SILKY KISS',
    date: '2022',
    category_1: 'Branding',
    category_2: 'graphic design'
}

var elem_3_data = {
    img: 'projects/softlybrutal/MAIN.jpg',
    title: 'SOFTLY BRUTAL',
    date: '2022',
    category_1: 'Web Design',
    category_2: 'UI/UX Design'
}

var elem_4_data = {
    img: 'projects/noise/MAIN.jpg',
    title: 'NOISE',
    date: '2022',
    category_1: 'DEV',
    category_2: 'Web Design'
}

target_1.addEventListener('mouseover', function () {
    title.innerHTML = elem_1_data.title;
    date.innerHTML = elem_1_data.date;
    cat_1.innerHTML = elem_1_data.category_1;
    cat_2.innerHTML = elem_1_data.category_2;
    proj_img.src = elem_1_data.img;
    proj_img.style.filter = "url('#turbulence')";
    let tl = gsap.timeline();
    tl.to('#feTurb', {
        delay: .2,
        attr: {
            ['baseFrequency']: '0',
        },
        duration: 1.8,
        ease: 'power4.out'
    });
    tl.to(title, {
        opacity: 1,
    }, 1)
    tl.to(date, {
        opacity: 1,
    }, 1)
    tl.to(cat_1, {
        opacity: 1,
    }, 2)
    tl.to(cat_2, {
        opacity: 1,
    }, 2)
    document.querySelector('#feTurb').setAttribute('baseFrequency', '0.2')
});

target_2.addEventListener('mouseover', function () {
    title.innerHTML = elem_2_data.title
    date.innerHTML = elem_2_data.date;
    cat_1.innerHTML = elem_2_data.category_1
    cat_2.innerHTML = elem_2_data.category_2
    proj_img.src = elem_2_data.img;
    proj_img.style.filter = "url('#turbulence')";
    let tl = gsap.timeline();
    tl.to('#feTurb', {
        delay: .2,
        attr: {
            ['baseFrequency']: '0',
        },
        duration: 1.8,
        ease: 'power4.out'
    });
    tl.to(title, {
        opacity: 1,
    }, 1)
    tl.to(date, {
        opacity: 1,
    }, 1)
    tl.to(cat_1, {
        opacity: 1,
    }, 2)
    tl.to(cat_2, {
        opacity: 1,
    }, 2)
    document.querySelector('#feTurb').setAttribute('baseFrequency', '0.2')
});

target_3.addEventListener('mouseover', function () {
    title.innerHTML = elem_3_data.title
    date.innerHTML = elem_3_data.date;
    cat_1.innerHTML = elem_3_data.category_1
    cat_2.innerHTML = elem_3_data.category_2
    proj_img.src = elem_3_data.img;
    proj_img.style.filter = "url('#turbulence')";
    let tl = gsap.timeline();
    tl.to('#feTurb', {
        delay: .2,
        attr: {
            ['baseFrequency']: '0',
        },
        duration: 1.8,
        ease: 'power4.out'
    });
    tl.to(title, {
        opacity: 1,
    }, 1)
    tl.to(date, {
        opacity: 1,
    }, 1)
    tl.to(cat_1, {
        opacity: 1,
    }, 2)
    tl.to(cat_2, {
        opacity: 1,
    }, 2)
    document.querySelector('#feTurb').setAttribute('baseFrequency', '0.2')
});

target_4.addEventListener('mouseover', function () {
    title.innerHTML = elem_4_data.title
    date.innerHTML = elem_4_data.date;
    cat_1.innerHTML = elem_4_data.category_1
    cat_2.innerHTML = elem_4_data.category_2
    proj_img.src = elem_4_data.img;
    proj_img.style.filter = "url('#turbulence')";
    let tl = gsap.timeline();
    tl.to('#feTurb', {
        delay: .2,
        attr: {
            ['baseFrequency']: '0',
        },
        duration: 1.8,
        ease: 'power4.out'
    });
    tl.to(title, {
        opacity: 1,
    }, 1)
    tl.to(date, {
        opacity: 1,
    }, 1)
    tl.to(cat_1, {
        opacity: 1,
    }, 2)
    tl.to(cat_2, {
        opacity: 1,
    }, 2)
    document.querySelector('#feTurb').setAttribute('baseFrequency', '0.2')
})




/* --------------------------- button down headerx -------------------------- */
const button_down = document.querySelector('.nav_arrow');

