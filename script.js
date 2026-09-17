// 1. MOBILE MENU TOGGLE
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
}

// 2. LIGHT / DARK THEME TOGGLE
const themeToggleBtns = document.querySelectorAll('#themeToggle');

const savedTheme = localStorage.getItem('selectedTheme2nd');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateToggleText(true);
}

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('selectedTheme2nd', isDark ? 'dark' : 'light');
        updateToggleText(isDark);
    });
});

function updateToggleText(isDark) {
    themeToggleBtns.forEach(btn => {
        btn.innerText = isDark ? "☀️ Light Mode" : "🌓 Dark Mode";
    });
}

// 3. TYPED.JS ANIMATION
if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
        strings: ['Graphic Designs', '2D Vector Art', 'Motion Graphics', 'UI Visual Layouts'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
}

// 4. SCROLL REVEAL ANIMATIONS
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 900,
        delay: 100,
        reset: false
    });

    sr.reveal('.reveal-top', { origin: 'top' });
    sr.reveal('.reveal-bottom', { origin: 'bottom', interval: 100 });
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
}

// 5. VANILLA TILT 3D CARD MOTION EFFECT
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".tilt-element"), {
        max: 8,
        speed: 300,
        glare: true,
        "max-glare": 0.1
    });
}

// 6. SWIPER CAROUSEL ANIMATION FOR MAIN SHOWCASE
if (document.querySelector('.mainSwiper')) {
    new Swiper(".mainSwiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            }
        }
    });
}

// 7. 7 GITHUB PROJECTS DATA & DYNAMIC DETAIL PAGE HANDLER
const projectsData = {
    1: {
        title: "2D Character Design",
        category: "Character Design / Character Rigging",
        role: "2D Character Designer & Animator",
        tools: "Figma, Illustrator, Adobe Animate",
        repo: "https://github.com/ShubhamKumarSingh03/2d-character-design",
        overview: "Created an animation-ready 2D character sheet showcasing multiple poses, facial expressions, and action variations. The project focuses on developing a consistent character style suitable for animation and visual storytelling.",
        solutions: "Designed a consistent character model across different poses and expressions, while maintaining visual proportions and animation-friendly artwork for use in storytelling and motion projects.",
        media: [
            { type: "image", url: "/Char Pics/1-1.png" },
            { type: "image", url: "/Char Pics/1-2.png" },
            { type: "image", url: "/Char Pics/1-3.png" },
            { type: "image", url: "/Char Pics/1-4.png" },
            { type: "image", url: "/Char Pics/1-5.png" },
            { type: "image", url: "/Char Pics/1-6.png" },
            { type: "video", url: "/Char Pics/1.mp4" }
        ]
    },
    2: {
        title: "2D Village Character",
        category: "Character Design / Illustration",
        role: "2D Character Designer",
        tools: "Adobe Illustrator, Adobe Animate",
        repo: "https://github.com/ShubhamKumarSingh03/2d-village-character",
        overview: "Developed an original 2D village-inspired character with a traditional Indian visual identity and a relaxed seated pose, designed for animation and storytelling.",
        solutions: "Focused on creating a culturally recognizable character through clothing, appearance, pose, and visual styling while keeping the design simple and suitable for animation.",
        media: [
            { type: "image", url: "/Char Pics/2-1.png" },
            { type: "image", url: "/Char Pics/2-2.png" },
            { type: "image", url: "/Char Pics/2-3.png" },
            { type: "image", url: "/Char Pics/2-4.png" },
            { type: "video", url: "/Char Pics/2.mp4" }
        ]
    },
    3: {
        title: "Female Character Illustration",
        category: "Character Design / 2D Illustration",
        role: "2D Animator & Video Editor",
        tools: "Adobe Illustrator, Adobe Animate, DaVinci Resolve",
        repo: "https://github.com/ShubhamKumarSingh03/Add-female-character-illustration",
        overview: "Created an original 2D female character featuring traditional Indian attire, detailed clothing, accessories, and a clean animation-ready visual style.",
        solutions: "Developed the character's appearance through detailed costume design, accessories, facial features, and proportions while maintaining a clean visual language suitable for animation and storytelling. ",
        media: [
            { type: "image", url: "/Char Pics/3-1.png" },
            { type: "image", url: "/Char Pics/3-2.png" },
            { type: "image", url: "/Char Pics/3-3.png" },
            { type: "image", url: "/Char Pics/3-4.png" },
            { type: "image", url: "/Char Pics/3-5.png" },
            { type: "video", url: "/Char Pics/3.mp4" }
        ]
    },
    4: {
        title: "Male Character Illustration",
        category: "Character Design / 2D Illustration",
        role: "2D Character Designer & Illustrator",
        tools: "Adobe Illustrator, Adobe Animate, DaVinci Resolve",
        repo: "https://github.com/ShubhamKumarSingh03/Add-male-character-illustration",
        overview: "Designed an original 2D male character with a clean casual appearance, expressive facial features, detailed clothing, and an animation-ready design.",
        solutions: "Built a visually consistent character by combining expressive facial design, clothing details, proportions, and a clean illustration style that can be adapted for animation and visual storytelling. ",
        media: [
            { type: "image", url: "/Char Pics/4-1.png" },
            { type: "image", url: "/Char Pics/4-2.png" },
            { type: "image", url: "/Char Pics/4-3.png" },
            { type: "image", url: "/Char Pics/4-4.png" },
            { type: "video", url: "/Char Pics/4.mp4" }
        ]
    },
    5: {
        title: "2D Animation Production Glimpses",
        category: "2D Animation / Video Production",
        role: "2D Animator & Visual Storytelling Artist",
        tools: "Adobe Illustrator, Adobe Animate, DaVinci Resolve, Adobe Audition",
        repo: "https://github.com/ShubhamKumarSingh03/2D-animation-production-glimpses",
        overview: "A showcase of selected stages from a complete 2D animated video project, covering the creative and production workflow from story development and visual planning to animation, compositing, sound, and final video production.",
        solutions: "Structured the animation workflow into multiple production stages, bringing together storytelling, visual planning, animation, compositing, and sound to create a complete animated video. ",
        media: [
            { type: "video", url: "/Vid Glimps/Glimpses.mp4" }
        ]
    },
    6: {
        title: "Mathematics Concept Explanatory Video",
        category: "Educational Animation / Explainer Video",
        role: "2D Animator & Educational Video Designer",
        tools: "After Effects, Premiere Pro, Adobe Animate, Adobe Illustrator",
        repo: "https://github.com/ShubhamKumarSingh03/Mathematics-Concept-Explanatory-Video",
        overview: "Created a 2D educational explainer video that visually explains the solution to the mathematical problem of counting total 8-digit numbers, using Adobe Creative Suite and AI voice synthesis.",
        solutions: "Converted a mathematical concept into an easy-to-follow visual explanation using 2D animation, structured visual sequencing, motion graphics, and AI-generated voice narration to improve clarity and engagement.",
        media: [
            { type: "video", url: "/Vid Glimps/Maths Concept Video.mp4" }
        ]
    },
};

// Render detail page content dynamically if on project-detail.html
const urlParams = new URLSearchParams(window.location.search);
const projId = urlParams.get('id') || 3; // Default to project 3 if no ID provided

if (document.getElementById('projTitle')) {
    const data = projectsData[projId] || projectsData[3];
    
    document.getElementById('projTitle').innerText = data.title;
    document.getElementById('projCategory').innerText = data.category;
    document.getElementById('projCategoryMeta').innerText = data.category;
    document.getElementById('projRole').innerText = data.role;
    document.getElementById('projTools').innerText = data.tools;
    document.getElementById('projOverview').innerText = data.overview;
    document.getElementById('projSolutions').innerText = data.solutions;

    const githubLink = document.getElementById('projGithubLink');
    if (githubLink) {
        githubLink.href = data.repo;
    }

    const githubBtnBig = document.getElementById('projGithubBtnBig');
    if (githubBtnBig) {
        githubBtnBig.href = data.repo;
    }

    // Populate Swiper Media Slides (Images & Videos)
    const swiperWrapper = document.getElementById('detailSwiperWrapper');
    if (swiperWrapper && data.media) {
        swiperWrapper.innerHTML = '';
        data.media.forEach(item => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';

            if (item.type === 'video') {
                slide.innerHTML = `
                    <video class="detail-media" controls autoplay muted loop poster="${item.poster || ''}">
                        <source src="${item.url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            } else {
                slide.innerHTML = `<img src="${item.url}" alt="${data.title}" class="detail-media">`;
            }

            swiperWrapper.appendChild(slide);
        });
    }

    // Initialize Detail Swiper
    if (document.querySelector('.detailSwiper')) {
        new Swiper(".detailSwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        });
    }
}
