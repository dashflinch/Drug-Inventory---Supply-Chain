function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message === "") return;

    const chatBox = document.getElementById("chat-box");

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);

    // Bot response
    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";

    if (message.toLowerCase().includes("hello")) {
        botMsg.textContent = "Hi there! How can I assist you today?";
    } else if (message.toLowerCase().includes("help")) {
        botMsg.textContent = "Sure! Let me know how I can assist you.";
    } else {
        botMsg.textContent = "I'm here to help. Please ask a question.";
    }

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;

    userInput.value = "";
}
