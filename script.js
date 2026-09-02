var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Backend Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
}

const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


const PUBLIC_KEY = "PaktW0OTJH687MdRC";
const SERVICE_ID = "service_kax21xs";
const TEMPLATE_ID = "template_m9g7k42";

const contactForm = document.getElementById("contact-form");

if (contactForm && typeof emailjs !== "undefined") {
    emailjs.init(PUBLIC_KEY);

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const btn = contactForm.querySelector(".btn");

        btn.disabled = true;
        btn.innerHTML = "Sending...";

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(() => {
                alert("Message sent successfully!");

                contactForm.reset();

                btn.disabled = false;
                btn.innerHTML = "Send Message";
            })
            .catch((error) => {
                console.error(error);

                alert("Failed to send message.");

                btn.disabled = false;
                btn.innerHTML = "Send Message";
            });
    });
}

const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) scrollTopBtn.classList.add('show');
        else scrollTopBtn.classList.remove('show');
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}