// Configuração da API - Em produção, use variáveis de ambiente ou backend
const API_KEY = window.API_KEY || "SUA_API_KEY"; // Substitua por uma variável de ambiente segura

// Verificar se os elementos existem antes de adicionar eventos
const chatbotContainer = document.querySelector("main");
const openBtn = document.getElementById("button");
const closeBtn = document.getElementById("close");
const sendBtn = document.getElementById("send");
const chatbotInput = document.getElementById("prompt");
const chatbotMessages = document.getElementById("chat");

// Verificações de segurança
if (!chatbotContainer || !openBtn || !closeBtn || !sendBtn || !chatbotInput || !chatbotMessages) {
  console.error("Elementos necessários do chatbot não foram encontrados no DOM");
} else {
  // Inicializar chatbot
  initializeChatbot();
}

function initializeChatbot() {
  // Abrir ou esconder chatbot usando classList
  openBtn.addEventListener("click", function () {
    chatbotContainer.classList.toggle("visible");
  });

  // Fechar chatbot
  closeBtn.addEventListener("click", function () {
    chatbotContainer.classList.remove("visible");
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
}

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
