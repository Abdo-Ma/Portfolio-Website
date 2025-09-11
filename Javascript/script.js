// ===============================
// Projects Page Script
// Author: Abdo Maher
// Description: Handles theme switching, scroll events, loading animation,
// project cards rendering, search, and show more/less functionality.
// ===============================


function init() {
    // Handles switching between dark and light mode
    function switch_mode() {
        const mode_btn = document.querySelector(".website-mode");
        const sun = document.querySelector(".fa-sun");
        const moon = document.querySelector(".fa-moon");
        mode_btn.addEventListener("click", () => {
            document.body.classList.toggle("darkTheme");
            moon.classList.toggle("disable");
            sun.classList.toggle("enable");
        })
    } switch_mode();

    // Handles navigation bar and back-to-top button on scroll
    window.onscroll = function () {
        const navigationBar = document.getElementById("navigation-bar");
        const logo = document.querySelector(".logo");
        if (scrollY > 0) {
            navigationBar.classList.add("active");
            logo.classList.add("new-color");
        }
        else {
            navigationBar.classList.remove("active");
            logo.classList.remove("new-color");
        }
        const BackTop = document.getElementById("TopBtn");
        if (scrollY > 0) {
            BackTop.classList.add("show")
        }
        else {
            BackTop.classList.remove("show")
        }
    }

    function initNavigationBar(delay = 7000) {
        const buttons = document.querySelectorAll(".link");
        buttons.forEach((event) => {
            event.addEventListener("click", (e) => {
                e.preventDefault()
                showLoading();
                setTimeout(() => {
                    window.location.href = event.getAttribute("href");
                    hideLoading()
                }, delay);
            })
        })
    } initNavigationBar();

    // Handles click events for logo and back-to-top button
    function initTop() {
        const logo = document.querySelector(".logo");
        logo.onclick = function () {
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
        };
        const BackTop = document.getElementById("TopBtn");
        BackTop.onclick = function () {
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
        };
    } initTop();

    // Show/hide loading animation when opening project links
    function showLoading() {
        const loading = document.querySelector(".loading");
        loading.style.display = "block";
        // hide screen overflow
        document.body.style.overflowY = "hidden";
    }
    function hideLoading() {
        const loading = document.querySelector(".loading");
        loading.style.display = "none";
        // show screen overflow
        document.body.style.overflowY = "auto";
    }

    // Renders project cards
    function generatorProjectsCards() {
        // Array of project objects
        const projects = [
            {
                id: 1,
                image: "../../assets/Images/Projects/P_01.png",
                title: "Facebook Clone",
                condition: "planning",
                description: "Frontend clone of Facebook with timeline, posts, likes, and comments.",
                technologies: ["HTML", "CSS", "Javascript"],
                type: "website",
                code: "404.html",
                preview: "404.html",
                class: "card"
            },
            {
                id: 2,
                image: "../../assets/Images/Projects/P_02.png",
                title: "Apple Website Clone",
                condition: "planning",
                description: "Clone of Apple's official website with product showcase and animations.",
                technologies: ["HTML", "CSS", "Javascript"],
                type: "website",
                code: "404.html",
                preview: "404.html",
                class: "card"
            },
            {
                id: 3,
                image: "../../assets/Images/Projects/P_03.png",
                title: "Programming Academy",
                condition: "inprogress",
                description: "Learning platform with courses, categories, testimonials, and pricing plans.",
                technologies: ["HTML", "CSS", "Javascript"],
                type: "website",
                code: "404.html",
                preview: "404.html",
                class: "card"
            },
            {
                id: 4,
                image: "../../assets/Images/Projects/P_04.png",
                title: "Task Manager",
                condition: "planning",
                description: "Task management app with add, edit, delete, and localStorage support.",
                technologies: ["HTML", "CSS", "Javascript"],
                type: "website",
                code: "404.html",
                preview: "404.html",
                class: "card"
            },
            {
                id: 5,
                image: "../../assets/Images/Projects/P_05.png",
                title: "Weather App",
                condition: "Planning",
                description: "Weather forecast app using public API with city search and 5-day forecast.",
                technologies: ["HTML", "CSS", "Javascript", "API"],
                type: "website",
                code: "404.html",
                preview: "404.html",
                class: "card"
            },
            {
                id: 6,
                image: "../../assets/Images/Projects/P_06.png",
                title: "Personal Portfolio",
                condition: "completed",
                description: "Personal portfolio website with projects showcase, blog, and contact form.",
                technologies: ["HTML", "CSS", "Javascript"],
                type: "website",
                code: "404.html",
                preview: "404.html",
                class: "card"
            },
            {
                id: 7,
                image: "../../assets/Images/Projects/P_09.png",
                title: "Admin Dashboard",
                condition: "Planning",
                description: "Admin dashboard with charts, tables, analytics, and dark mode toggle.",
                technologies: ["HTML", "CSS", "Javascript", "Chart.js"],
                type: "Web App",
                code: "404.html",
                preview: "404.html",
                class: "card"
            },
            {
                id: 8,
                image: "../../assets/Images/Projects/P_08.png",
                title: "E-Commerce Website",
                condition: "Planning",
                description: "Online shop with product catalog, cart, checkout, and responsive UI.",
                technologies: ["HTML", "CSS", "Javascript"],
                type: "Website",
                code: "404.html",
                preview: "404.html",
                class: "card"
            },
            {
                id: 9,
                image: "../../assets/Images/Projects/P_09.png",
                title: "Blog Platform",
                condition: "Planning",
                description: "Multi-page blog platform with categories, search, and comments section.",
                technologies: ["HTML", "CSS", "Javascript"],
                type: "Website",
                code: "404.html",
                preview: "404.html",
                class: "card"
            },
            {
                id: 10,
                image: "../../assets/Images/Projects/P_10.png",
                title: "whatsapp clone",
                condition: "Planning",
                description: "website clone for whatsapp to chats , statues , contact list , meta ai",
                technologies: ["HTML", "CSS", "Javascript", "APIs", "AOS"],
                type: "website application",
                code: "404.html",
                preview: "404.html",
                class: "card hiddenProjects"
            },
            {
                id: 11,
                image: "../../assets/Images/Projects/P_11.png",
                title: "password generator",
                condition: "Planning",
                description: "password generator app it's doing very strong password your customization",
                technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
                type: "Website application",
                code: "404.html",
                preview: "404.html",
                class: "card hiddenProjects"
            },
            {
                id: 12,
                image: "../../assets/Images/Projects/P_12.png",
                title: "random background",
                condition: "Planning",
                description: "random background color with color code and local storage to sava color",
                technologies: ["HTML", "CSS", "Javascript"],
                type: "Website",
                code: "404.html",
                preview: "404.html",
                class: "card hiddenProjects"
            },
            {
                id: 13,
                image: "../../assets/Images/Projects/P_13.png",
                title: "landing page",
                condition: "completed",
                description: "creative landing page to profile with modern and dark style",
                technologies: ["HTML", "CSS"],
                type: "Website",
                code: "https://github.com/Abdo-Ma/Landing-Page.git",
                preview: "https://abdo-ma.github.io/Landing-Page/",
                class: "card hiddenProjects"
            },
        ];
        // Get container for cards
        const container = document.querySelector(".container");
        // Render each project card
        projects.forEach((project) => {
            const card = document.createElement("div");
            card.className = "card-parent";
            card.innerHTML = `
        <div class="${project.class}">
                    <div class="image-box">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-information">
                    <div class="project-title">
                        <h3 class="title">${project.title}</h3>
                        <span class="condition">${project.condition}</span>
                    </div>
                    <p class="project-info">${project.description}</p>
                    <div>
                        <span class="tech-title">Technologies :</span>
                        <div class="Technologies">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                    </div>
                    <span class="project-type">${project.type}</span>
                    <div class="buttons">
                        <a href="${project.preview}"class="view-project-btn loading-helper"><i class="fas fa-share-square"></i>preview</a>
                        <a href="${project.code}"class="view-project-btn loading-helper"><i class="fa-brands fa-github"></i>code</a>
                    </div>
                    </div>
                </div>`
            container.appendChild(card);
            // Colorize project condition (completed, inprogress, planning)
            const conditionEl = card.querySelector(".condition");
            const statue = conditionEl.innerText.toLowerCase().trim();
            if (statue === "completed") {
                conditionEl.style.color = "#bbf7d0";
                conditionEl.style.background = "#14532d";
            }
            else if (statue === "inprogress") {
                conditionEl.style.color = "#bfdbfe";
                conditionEl.style.background = "#1e3a8a";
            }
            else if (statue === "planning") {
                conditionEl.style.color = "#fde68a";
                conditionEl.style.background = "#92400e";
            }
            // Add loading animation to preview/code buttons
            const loadingEl = card.querySelectorAll(".loading-helper");
            loadingEl.forEach((l) => {
                const LinkLo = l.getAttribute("href");
                l.addEventListener("click", (event, delay = 5000) => {
                    //* {delay = 5000} is the time to hidden loading animation
                    event.preventDefault();
                    // turn on loading for sometime
                    showLoading()
                    setTimeout(() => {
                        // open preview or code in new tap
                        window.location.href = LinkLo;
                        //turnoff loading after delay
                        hideLoading()
                    }, delay);
                })
            })
            search(card);
        })
        // Initialize show more/less functionality
        otherProjects();
    } generatorProjectsCards()

    // Add search functionality for each card
    function search(card) {
        const search = document.getElementById("search");
        const open_search = document.querySelector(".fa-search");
        open_search.addEventListener("click", () => {
            document.querySelector(".search-box").classList.toggle("active");
        })
        search.addEventListener("keyup", () => {
            const value = search.value.toLowerCase().trim();
            const title = card.querySelector(".title").textContent.toLowerCase();
            const description = card.querySelector(".project-info").textContent.toLowerCase();
            const condition = card.querySelector(".condition").textContent.toLowerCase();
            if (title.includes(value) || description.includes(value) || condition.includes(value)) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });
    }

    // Handles "show more" and "show less" button functionality
    function otherProjects() {
        const more_btn = document.getElementById("more");
        const show_projects = document.querySelectorAll(".hiddenProjects");
        more_btn.addEventListener("click", () => {
            // show other projects
            if (more_btn.innerText.toLowerCase() === "show more") {
                more_btn.innerText = "show less";
                show_projects.forEach(event => event.classList.add("show"));
            }
            // hide other projects
            else {
                more_btn.innerText = "show more";
                show_projects.forEach(event => event.classList.remove("show"));
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", init)