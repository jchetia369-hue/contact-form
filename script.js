document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const formMessage = document.getElementById("formMessage");


    form.addEventListener("submit", (event) => {

        // Stop page from refreshing
        event.preventDefault();


        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();


        // Clear previous message
        formMessage.textContent = "";
        formMessage.style.color = "";


        // Name validation
        if (name === "") {

            showError("Please enter your name.");
            nameInput.focus();
            return;

        }


        // Email validation
        if (email === "") {

            showError("Please enter your email.");
            emailInput.focus();
            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showError("Please enter a valid email address.");
            emailInput.focus();
            return;

        }


        // Message validation
        if (message === "") {

            showError("Please enter your message.");
            messageInput.focus();
            return;

        }


        if (message.length < 10) {

            showError("Message must be at least 10 characters.");
            messageInput.focus();
            return;

        }


        // Success
        formMessage.textContent =
            "Message sent successfully!";

        formMessage.style.color = "green";


        // Clear form
        form.reset();

    });


    function showError(message) {

        formMessage.textContent = message;
        formMessage.style.color = "red";

    }

});