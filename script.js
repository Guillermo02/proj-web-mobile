document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.querySelector("main");
    const openBtn = document.getElementById("button");
    const closeBtn = document.getElementById("close");
    const sendBtn = document.getElementById("send");
    const chatbotInput = document.getElementById("prompt");
    const chatbotMessages = document.getElementById("chat");
  
    const API_KEY = "AIzaSyCyIJL7BXubzVHVqA_PzoRCyydRtAB0K1M";
  
    // Abrir ou esconder chatbot
    openBtn.addEventListener("click", function () {
      const isVisible = chatbotContainer.style.display === "flex";
    
      if (isVisible) {
        chatbotContainer.style.display = "none";
      } else {
        chatbotContainer.style.display = "flex";
      }
    });
  
    // Fechar chatbot
    closeBtn.addEventListener("click", function () {
      chatbotContainer.style.display = "none";
      openBtn.style.display = "block";

      chatbotMessages.innerHTML = "";
    });
  
    // Enviar mensagem
    sendBtn.addEventListener("click", sendMessage);
  
    chatbotInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  
    function sendMessage() {
      const userMessage = chatbotInput.value.trim();
      if (userMessage) {
        appendMessage("user", userMessage);
        chatbotInput.value = "";
        getBotResponse(userMessage);
      }
    }
  
    function appendMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);
      messageElement.textContent = message;
      chatbotMessages.appendChild(messageElement);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  
    async function getBotResponse(userMessage) {
      const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: userMessage }]
              }
            ]
          }),
        });
  
        const data = await response.json();

        console.log(data);
  
        const botMessage =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Sem resposta do modelo.";
  
        appendMessage("bot", botMessage);
  
      } catch (error) {
        console.error("Erro:", error);
        appendMessage("bot", "Erro ao responder. Tente novamente.");
      }
    }
  });
