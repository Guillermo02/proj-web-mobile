document.addEventListener("DOMContentLoaded", () => {
  // Configuração da API
  const API_KEY = "AIzaSyBZDVwUUdW18F-9pjbVwZ75A05uYl2DxJU";

  // ===== REGRA DA IA =====
  const SYSTEM_PROMPT = `
  Você é um assistente virtual chamado MACK AI, desenvolvido para auxiliar alunos do Mackenzie.

  REGRAS IMPORTANTES:

  1. Responda apenas com base em informações institucionais do Mackenzie.
  2. Nunca invente informações. Caso não tenha certeza, diga:
     "Não tenho essa informação no momento. Consulte o portal oficial do Mackenzie."
  3. Seja claro, objetivo e educado.
  4. Priorize respostas curtas e diretas.
  5. Sempre que possível, oriente o aluno sobre onde encontrar a informação.
  6. Não responda perguntas fora do contexto acadêmico ou institucional.
  7. Não gere opiniões pessoais.
  8. Não forneça informações sensíveis ou confidenciais.
  9. Caso a pergunta seja ambígua, peça mais detalhes.
  10. Mantenha linguagem formal e acessível.
  `;

  // Elementos
  const chatbotContainer = document.querySelector("main");
  const openBtn = document.getElementById("button");
  const closeBtn = document.getElementById("close");
  const sendBtn = document.getElementById("send");
  const input = document.getElementById("prompt");
  const chat = document.getElementById("chat");

  // Verificação de segurança
  if (!chatbotContainer || !openBtn || !closeBtn || !sendBtn || !input || !chat) {
    console.error("Elementos necessários do chatbot não foram encontrados no DOM");
    return;
  }

  // ===== Abrir / fechar =====
  openBtn.addEventListener("click", () => {
    // Compatível com os dois CSS (visible e hidden)
    chatbotContainer.classList.toggle("visible");
    chatbotContainer.classList.toggle("hidden");
  });

  closeBtn.addEventListener("click", () => {
    chatbotContainer.classList.remove("visible");
    chatbotContainer.classList.add("hidden");
    chat.innerHTML = "";
  });

  // ===== Eventos =====
  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // ===== Enviar mensagem =====
  function sendMessage() {
    const userMessage = input.value.trim();
    if (!userMessage) return;

    appendMessage("user", userMessage);
    input.value = "";

    getBotResponse(userMessage);
  }

  // ===== Criar mensagem =====
  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;

    chat.appendChild(messageElement);
    chat.scrollTop = chat.scrollHeight;
  }

  // ===== API =====
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
              parts: [
                { text: SYSTEM_PROMPT },
                { text: userMessage }
              ]
            }
          ]
        }),
      });

      const data = await response.json();

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
