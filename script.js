const faqs = document.querySelectorAll(".faq");
const openBtn = document.querySelectorAll(".openBtn");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        
    });
})