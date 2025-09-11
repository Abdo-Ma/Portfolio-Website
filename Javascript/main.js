// =============================
// 🚀 Website Main Script
// =============================
function init() {
    // Global Variables
    const bodyElement = document.body;
    const navBar = document.getElementById("navigation-bar");
    const logoElement = document.querySelector(".logo");
    const backToTopButton = document.getElementById("TopBtn");

    // Show loading animation overlay
    function showLoadingAnimation() {
        const loadingWrapper = document.querySelector(".loading");
        loadingWrapper.style.display = "block";
        bodyElement.style.overflowY = "hidden";
    }
    //  Hide loading animation overlay
    function hideLoadingAnimation() {
        const loadingWrapper = document.querySelector(".loading");
        loadingWrapper.style.display = "none";
        bodyElement.style.overflowY = "auto";
    }

    // Scroll-to-Top & Logo Click
    function setupScrollButtons() {
        // Scroll to top when logo is clicked
        logoElement.addEventListener("click", () => {
            window.scroll({ top: 0, behavior: "smooth" }); // Smooth scroll to top
        });
        // Scroll to top when back-to-top button is clicked
        backToTopButton.onclick = function () {
            window.scroll({ top: 0, behavior: "smooth" }); // Smooth scroll to top
        };
    } setupScrollButtons();

    // Handle scroll events for various UI behaviors
    window.onscroll = function () {
        // Toggle navbar style when scrolling
        if (scrollY > 0) {
            navBar.classList.add("active");     // Add scrolled style to navbar
            logoElement.classList.add("new-color"); // Change logo color
        } else {
            navBar.classList.remove("active");   // Remove scrolled style
            logoElement.classList.remove("new-color"); // Reset logo color
        }
        // Show/hide back-to-top button based on scroll position
        if (scrollY > 500) {
            backToTopButton.classList.add("show");    // Show button when scrolled down
        } else {
            backToTopButton.classList.remove("show"); // Hide button at top
        }
        // Trigger scroll animations
        runScrollAnimations();
    };

    // Dark/Light Mode Toggle
    function toggleMode() {
        const modeButton = document.querySelector(".website-mode");
        const moonIcon = document.querySelector(".fa-moon");
        const sunIcon = document.querySelector(".fa-sun");
        // Toggle theme mode when button is clicked
        modeButton.addEventListener("click", () => {
            moonIcon.classList.toggle("disable");  // Toggle moon icon visibility
            sunIcon.classList.toggle("enable");    // Toggle sun icon visibility
            bodyElement.classList.toggle("darkTheme"); // Toggle dark theme class
        });
    } toggleMode();

    // Scroll Animations
    function runScrollAnimations() {
        const animatedElements = document.querySelectorAll(".animation-box");
        const progressBars = document.querySelectorAll(".bar div");
        const screenHeight = window.innerHeight;
        // Animate elements when they come into view
        animatedElements.forEach((element) => {
            if (element.getBoundingClientRect().top < screenHeight - 100) {
                element.classList.add("show");    // Add animation class
            } else {
                element.classList.remove("show"); // Remove animation class
            }
        });
        // Animate skill progress bars
        progressBars.forEach((bar) => {
            bar.style.transition = "1s"; // Add transition for smooth animation
            const targetWidth = bar.dataset.width;
            if (bar.getBoundingClientRect().top < screenHeight) {
                bar.style.width = `${targetWidth}%`; // Set width to target value
            } else {
                bar.style.width = `0%`; // Reset width when out of view
            }
        });
    }

    // Navigation Highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".link");
    // Create Intersection Observer to track section visibility
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const sectionId = entry.target.id;
                if (entry.isIntersecting) {
                    // Remove active class from all links
                    navLinks.forEach((link) => link.classList.remove("active"));
                    // Add active class to current section's link
                    const activeLink = document.querySelector(`.link[data-id="${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of section is visible
    );
    function observeSettings() {
        if (window.innerWidth <= 1200) {
            observer.disconnect();
            navLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    navLinks.forEach(l => { l.classList.remove("active"); })
                    link.classList.add("active");
                })
            });
        }
        else {
            observer.disconnect();
            sections.forEach((section) => observer.observe(section));
        }
    }
    observeSettings();
    window.addEventListener("resize", observeSettings)

    // Generate Services Cards
    function generateServicesCards() {
        const servicesCards = [
            {
                id: 1,
                icon: "fas fa-code",
                title: "web development",
                description: "Building modern, responsive websites and web applications using cutting-edge technologies.",
                features: ["frameworks", "clean code", "responsive design", "performance optimization"]
            },
            {
                id: 2,
                icon: "fas fa-server",
                title: "backend development",
                description: "Developing robust server-side applications and APIs that power your digital products.",
                features: ["node.js & express", "database design", "APIs development", "cloud deployment"]
            },
            {
                id: 3,
                icon: "fas fa-palette",
                title: "UI/UX Design",
                description: "Designing beautiful and intuitive user interfaces that enhance user engagement.",
                features: ["user research", "wireframe", "prototyping", "design system"]
            }
        ]
        const container = document.querySelector(".services-container")
        servicesCards.forEach((service) => {
            const parent = document.createElement("div");
            parent.className = "animation-box";
            parent.innerHTML = `
                    <div class="service-card">
                        <div class="service-icon">
                            <i class="${service.icon}"></i>
                        </div>
                        <h3 class="service-title">${service.title}</h3>
                        <p class="service-desc">${service.description}</p>
                        <ul class="service-list">
                            ${service.features.map(ft => `<li class="service-feature">${ft}</li>`).join(" ")}
                        </ul>
                    </div>`;
            container.appendChild(parent)
        })
    } generateServicesCards()

    // Generate Skills Cards
    function generateSkillsCards() {
        const skillsCard = [
            {
                id: 1,
                title: "Frontend",
                name: ["React", "TypeScript", "Next.js", "Tailwind"],
                numbers: ["95", "90", "85", "92"]
            },
            {
                id: 2,
                title: "Backend",
                name: ["Node.js", "Python", "SQL & SQL Server", "APIs"],
                numbers: ["88", "94", "80", "85"]
            },
            {
                id: 3,
                title: "Tools & others",
                name: ["Git & Github", "AI", "AWS", "Figma"],
                numbers: ["80", "90", "70", "75"]
            }
        ]
        const container = document.querySelector(".skills-container");
        skillsCard.forEach((skill) => {
            const parent = document.createElement("div");
            parent.className = "animation-box";
            parent.innerHTML = `
                    <div class="skills-card">
                        <h3 class="skills-card-title">${skill.title}</h3>
                        <div class="skills-progress">
                            <div class="progress">
                                <div class="skill-information">
                                    <span class="skill-name">${skill.name[0]}</span>
                                    <div class="skill-number">${skill.numbers[0]}%</div>
                                </div>
                                <div class="bar"><div data-width="${skill.numbers[0]}"></div></div>
                            </div>
                            <div class="progress">
                                <div class="skill-information">
                                    <span class="skill-name">${skill.name[1]}</span>
                                    <div class="skill-number">${skill.numbers[1]}%</div>
                                </div>
                                <div class="bar"><div data-width="${skill.numbers[1]}"></div></div>
                            </div>
                            <div class="progress">
                                <div class="skill-information">
                                    <span class="skill-name">${skill.name[2]}</span>
                                    <div class="skill-number">${skill.numbers[2]}%</div>
                                </div>
                                <div class="bar"><div data-width="${skill.numbers[2]}"></div></div>
                            </div>
                            <div class="progress">
                                <div class="skill-information">
                                    <span class="skill-name">${skill.name[3]}</span>
                                    <div class="skill-number">${skill.numbers[3]}%</div>
                                </div>
                                <div class="bar"><div data-width="${skill.numbers[3]}"></div></div>
                            </div>
                        </div>
                    </div>`
            container.appendChild(parent)
        })
    } generateSkillsCards()

    // Generate Projects Cards
    function generateProjectCards() {
        const ProjectsCards = [
            {
                id: 1,
                image: "assets/Images/Projects/P_01.png",
                title: "Facebook Clone",
                condition: "Planning",
                description: "Frontend clone of Facebook with timeline, posts, likes, and comments.",
                technologies: ["HTML", "CSS", "Javascript"],
                type: "website application",
                code: "source/HTML/404.html",
                preview: "source/HTML/404.html",
                class: "card"
            },
            {
                id: 2,
                image: "assets/Images/Projects/P_03.png",
                title: "programming academy",
                condition: "inprogress",
                description: "Learning platform with courses, categories, testimonials, and pricing plans.",
                technologies: ["HTML", "CSS", "Javascript", "AOS", "SASS"],
                type: "website",
                code: "source/HTML/404.html",
                preview: "source/HTML/404.html",
                class: "card"
            },
            {
                id: 3,
                image: "assets/Images/Projects/P_13.png",
                title: "landing page",
                condition: "completed",
                description: "creative landing page to profile with modern and dark style",
                technologies: ["HTML", "CSS"],
                type: "Website",
                code: "https://github.com/Abdo-Ma/Landing-Page.git",
                preview: "https://abdo-ma.github.io/Landing-Page/",
                class: "card"
            }
        ];
        const container = document.querySelector(".projects-container")
        ProjectsCards.forEach((project) => {
            const parent = document.createElement("div");
            parent.className = "animation-box";
            parent.innerHTML = `
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
            container.appendChild(parent);
            const conditionEl = parent.querySelector(".condition");
            const statue = conditionEl.innerText.trim().toLowerCase();
            if (statue === "inprogress") {
                conditionEl.style.color = "#bfdbfe";
                conditionEl.style.background = "#1e3a8a";
            }
            else if (statue === "completed") {
                conditionEl.style.color = "#bbf7d0";
                conditionEl.style.background = "#14532d";
            }
            else if (statue === "planning") {
                conditionEl.style.color = "#fde68a";
                conditionEl.style.background = "#92400e";
            }
        })
    } generateProjectCards()


    function generateTestimonialsCards() {
        const testimonialsCards = [
            {
                id: 1,
                image: "assets/Images/Testimonials/R_01.png",
                name: "Mike Chen",
                text: "“Abdo is a highly skilled developer. He transformed our outdated website into a modern, responsive platform that boosted our customer engagement significantly.”",
            },
            {
                id: 2,
                image: "assets/Images/Testimonials/R_02.png",
                name: "David Wilson",
                text: "Working with Abdo was seamless. He understands requirements quickly and delivers high-quality results ahead of deadlines. Truly professional.",
            },
            {
                id: 3,
                image: "assets/Images/Testimonials/R_03.png",
                name: "Sarah Lee",
                text: "“I was impressed by Abdo’s attention to detail in both design and development. He made our app intuitive and visually stunning.”",
            },
            {
                id: 4,
                image: "assets/Images/Testimonials/R_04.png",
                name: "Emily Johnson",
                text: "“Abdo not only built a powerful backend for our system but also ensured the frontend experience was smooth and user-friendly. Highly recommend!”",
            },
            {
                id: 5,
                image: "assets/Images/Testimonials/R_05.png",
                name: "Chris Evans",
                text: "“Great communication, excellent coding standards, and creative design solutions. Abdo is definitely the developer you want on your team.”",
            }
        ]
        const container = document.querySelector(".testimonials-wrapper");
        testimonialsCards.forEach((trigger) => {
            const parent = document.createElement("div");
            parent.className = "testimonials-card";
            parent.innerHTML = `
                <img src="${trigger.image}" alt="" />
                <h3>${trigger.name}</h3>
                <p>${trigger.text}</p>
                <i class="fas fa-quote-left"></i>
                <i class="fas fa-quote-right"></i>`
            container.appendChild(parent);
        })
    } generateTestimonialsCards()

    // Testimonials Slider
    function setupTestimonialsSlider() {
        const slides = document.querySelectorAll(".testimonials-card");
        const sliderWrapper = document.querySelector(".testimonials-wrapper");
        const nextButton = document.getElementById("next");
        const prevButton = document.getElementById("prev");
        let currentIndex = 0; // Track current slide index
        // Update slider position based on current index
        function updateSlider() {
            sliderWrapper.style.transform = `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}rem))`;
        }
        // Navigate to next slide
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length; // Cycle through slides
            updateSlider();
        });
        // Navigate to previous slide
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Cycle through slides
            updateSlider();
        });
    } setupTestimonialsSlider();

    // Notification System
    function initNotificationSystem(delay = 4000) {
        const notificationTriggers = document.querySelectorAll(".notification-item");
        const notificationBox = document.querySelector(".notification-message");
        // Add click event listeners to all notification triggers
        notificationTriggers.forEach((trigger) => {
            const message = trigger.dataset.notification;
            trigger.addEventListener("click", () => {
                notificationBox.textContent = `${message} 🔔`; // Set notification message
                notificationBox.classList.add("show"); // Show notification
                // Hide notification after specified delay
                setTimeout(() => {
                    notificationBox.classList.remove("show");
                }, delay);
            });
        });
    } initNotificationSystem();

    // Turnon Loading Animation
    function loading(delay = 7000) {
        const Loading_element = document.querySelectorAll(".loading-helper");
        Loading_element.forEach((e) => {
            e.addEventListener("click", (l) => {
                // Don't leave page direct
                l.preventDefault();
                const link = e.getAttribute("href");
                // show loading
                showLoadingAnimation();
                // hide loading after 7second
                setTimeout(() => {
                    //go to page link
                    window.location.href = link;
                    //hide loading
                    hideLoadingAnimation();
                }, delay);
            })
        })
    } loading();
    
    // Contact Form
    function getInTouch() {
        const form = document.querySelector("form");
        const username = document.getElementById("username");
        const Email = document.getElementById("email");
        const Message = document.getElementById("message");
        const error_paragraph = document.querySelectorAll(".input-error-member");
        const field = document.querySelectorAll(".data-field");
        // check is email is valid or no with RE pattern
        const EmRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (username.value.trim() === "" || Email.value.trim() === "" || Message.value.trim() === "") {
                if (username.value.trim() === "") {
                    error_paragraph[0].textContent = error_paragraph[0].dataset.empty;
                }
                if (Email.value.trim() === "") {
                    error_paragraph[1].textContent = error_paragraph[1].dataset.empty;
                }
                if (Message.value.trim() === "") {
                    error_paragraph[2].textContent = error_paragraph[2].dataset.empty;
                }
            }
            else if (!EmRe.test(Email.value) || Message.value.trim().length < 30 || username.value.trim().length < 3) {
                if (username.value.trim().length < 3) {
                    error_paragraph[0].textContent = "Name is short!";
                }
                if (!EmRe.test(Email.value)) {
                    error_paragraph[1].textContent = "invalid Email";
                }
                if (Message.value.trim().length < 50) {
                    error_paragraph[2].textContent = "message is so short!"
                }
            }
            else {
                error_paragraph.forEach((t) => { t.textContent = ""; });
                showLoadingAnimation();
                window.localStorage.setItem("Username", username.value);
                window.localStorage.setItem("Email", Email.value);
                window.localStorage.setItem("Message", Message.value);
                setTimeout(() => {
                    form.reset();
                    hideLoadingAnimation();
                    document.querySelector(".form-success-message").classList.add("show");
                    setTimeout(() => { document.querySelector(".form-success-message").classList.remove("show"); }, 4000);
                }, 15000);
            }
        })
        field.forEach((le, index) => {
            le.addEventListener("input", () => {
                if (le.value.length > 0) {
                    error_paragraph[index].textContent = "";
                }
            })
        })
    } getInTouch();
}

document.addEventListener("DOMContentLoaded", init);