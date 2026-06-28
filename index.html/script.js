// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter h2");

const runCounter = () => {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const speed = target / 100;

        const update = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".counter");

    if (!section) return;

    const position = section.offsetTop - 400;

    if (window.scrollY >= position && !counterStarted) {

        runCounter();

        counterStarted = true;

    }

});


// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || phone === "" || subject === "" || message === "") {

            alert("Please fill in all fields.");

            return;

        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert("✅ Thank you! Your message has been submitted successfully.");

        form.reset();

    });

}

// ===============================
// Active Navigation
// ===============================

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});


// ===============================
// Dark Mode
// ===============================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.style.position = "fixed";
darkBtn.style.bottom = "90px";
darkBtn.style.right = "20px";
darkBtn.style.width = "50px";
darkBtn.style.height = "50px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.background = "#0d6efd";
darkBtn.style.color = "#fff";
darkBtn.style.cursor = "pointer";
darkBtn.style.fontSize = "20px";
darkBtn.style.zIndex = "999";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

