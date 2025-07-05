const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;

        // Toggle visibility
        const isActive = btn.classList.contains("active");
        document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
        document.querySelectorAll(".faq-btn").forEach(b => b.classList.remove("active"));

        if (!isActive) {
            answer.style.display = "block";
            btn.classList.add("active");
        }
    });
});
