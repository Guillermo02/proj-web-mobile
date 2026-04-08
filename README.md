# Projeto de Web Mobile
### Participantes: 
- Cláudio Dias - 10403569
- Guillermo Kuznietz - 10410134
- Matheus Mustaro - 10409259

## Explicação do processo de ideação
A idealização do projeto surgiu de uma percepção recorrente entre os alunos da instituição Mackenzie: a dificuldade em encontrar informações de forma rápida, clara e intuitiva nos canais digitais de ensino da universidade. Muitas vezes, mesmo com a existência de campos de busca e páginas de suporte, o estudante não consegue localizar a resposta para sua dúvida com facilidade, o que gera frustração, perda de tempo e, em alguns casos, dependência de terceiros para obter informações simples.

Diante desse cenário, propomos o desenvolvimento de um chatbot acadêmico capaz de auxiliar os alunos na resolução de dúvidas frequentes sobre a instituição. A proposta é utilizar a técnica de RAG (Retrieval-Augmented Generation), permitindo que o sistema consulte uma base de informações antes de gerar as respostas, tornando a interação mais precisa, contextualizada e útil para o usuário.

No aspecto técnico, o projeto será desenvolvido utilizado a trindade HTML, CSS e JavaScript, além de Python no backend e na construção da API responsável pela comunicação com o sistema. Dessa forma, o chatbot busca trazer acessibilidade, praticidade e eficiência no contexto acadêmico.

### Aplicação real no mercado
Utilizamos como exemplo de aplicação real de um chatbot, a plataforma de streaming Sky+. Nela, podemos tirar duvidas comuns do serviço, assim como entrar em contato com atendimento humano se necessário.

<img width="1882" height="863" alt="image" src="https://github.com/user-attachments/assets/00e649f1-270a-4e24-b152-4eee7f4a347c" />

## Caráter extensionista
O projeto tem um potencial de impacto real na comunidade acadêmica, além do fim didático. O chatbot busca atender essa necessidade dos estudantes.

### Impacto para a comunidade
O projeto pode contribuir para melhorar o acesso à informação dentro da instituição, reduzindo dificuldades na busca por orientações acadêmicas, administrativas e operacionais. Oferecendo respostas mais rápidas e objetivas, o chatbot torna a experiência do aluno mais simples e eficiente, dependendo menos de processos manuais ou atendimento presencial.

### Forma de utilização pelos alunos
Os alunos poderão utilizar a ferramenta como um canal de apoio e de dúvidas frequentes, localizar informações relevantes e obter direcionamentos com facilidade.

### Contribuições além do contexto da sala de aula
Fora do ambiente acadêmico, o projeto também contribui com experiência prática para demandas reais do mercado, envolvendo o desenvolvimento de uma solução com aplicação concreta, focada no usuário e com potencial de escalabilidade. Além disso, a proposta estimula o uso de tecnologias atuais como a inteligência artificial, promovendo a integração entre conhecimento técnico e impacto social.

## Imagens do wireframe

### Protótipo para modelo web
<img width="1919" height="877" alt="image" src="https://github.com/user-attachments/assets/9d707cfb-7efd-4a20-ad24-5ff21fbee4da" />

<hr>

<img width="1917" height="882" alt="image" src="https://github.com/user-attachments/assets/61d34ab9-9a3f-4944-b349-2498b26b7521" />

---
### Protótipo para modelo mobile
<img width="434" height="560" alt="image" src="https://github.com/user-attachments/assets/7b604afa-e46a-47f8-a05c-a16b89d6ea67" />

---

## Segurança e Boas Práticas

### Configuração da API Key
Para a segurança da aplicação, a chave da API fica em um arquivo a parte chamado `config.js` que não é salva no github.

---

## Modelo do HTML
```html
<button id="button">MACK AI</button>
```
Botão externo que atua como o disparador (trigger) para abrir a interface do chat.

```html
<main>
    <header>🤖 MACK AI</header>
    <button id="close">&times;</button>
```
**header:** Contém a identificação visual (MACK AI) no cabeçalho.

**button id="close":** Botão de fechamento da interface.

```html
    <section>
        <div id="chat">
        </div>
    </section>
```
**section:** Define o corpo principal da janela.

**div id="chat":** Container dinâmico destinado a receber e exibir as mensagens enviadas e recebidas.

```html
    <footer>
        <textarea name="prompt" id="prompt" placeholder="Pergunte alguma coisa"></textarea>
        <button id="send">➤</button>
    </footer>
</main>
```
**footer:** Agrupa os elementos de interação do usuário no rodapé.

**textarea id="prompt":** Campo de entrada de texto para a digitação.

**button id="send":** Botão de envio (ícone ➤) que dispara a função de processamento da mensagem.


## Modelo do CSS
O visual do chat é construído com foco em usabilidade e uma paleta de cores baseada no vermelho e branco do mackenzie.

```css
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: Arial, sans-serif;
}

/* ===== Estilo Geral ===== */
body {
  background-image: url("img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
```
***(Universal)**: Remove margens, paddings e bordas padrão, além de definir a fonte global como Arial.

**body:** Define a imagem de fundo ocupando toda a tela (cover) sem repetição.


```css
/* ===== Botão Flutuante ===== */
#button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: #d32f2f;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  word-break: break-word;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s, background-color 0.2s;
}

#button:hover {
  background-color: #b71c1c;
  transform: scale(1.1);
}
```
**Posicionamento:** Fixo no canto inferior direito da tela.

**Formato:** Circular com sombra para destacar como elemento flutuante.

**Interatividade:** Ao passar o mouse, aumenta levemente de tamanho e escurece a cor.


```css
/* ===== Container do Chat ===== */
main {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 400px;
  height: 550px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  display: none;
  flex-direction: column;
}

main.visible {
  display: flex;
}
```
**main:** Container principal do chatbot com tamanho fixo.

**main.visible:** Classe para controlar visibilidade usando `classList` ao invés de `style.display`.

**Comportamento:** Inicialmente escondido e organizado em coluna com flexbox.

**Visual:** Bordas arredondadas e sombra para efeito de janela sobreposta.

```css
/* ===== Cabeçalho ===== */
header {
  background-color: #d32f2f;
  color: white;
  padding: 15px;
  font-size: 24px;
  font-weight: bold;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

/* ===== Botão Fechar ===== */
#close {
  position: absolute;
  margin-top: 12px;
  right: 10px;
  background: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
}
```
**header:** Área superior com destaque visual (vermelho), usada como título do chat.

**#close:** Botão de fechar posicionado no canto superior direito do header.

```css
/* ===== Área do Chat ===== */
section {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}

/* ===== Lista de mensagens ===== */
#chat {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;
}
```
**section:** Ocupa o espaço disponível e permite rolagem vertical.

**#chat:** Organiza as mensagens em coluna com espaçamento entre elas.

```css
/* ===== Mensagens ===== */
.message {
  padding: 12px;
  border-radius: 8px;
  max-width: 85%;
  font-size: 16px;
}

.message.user {
  background-color: #d32f2f;
  align-self: flex-end;
  color: white;
}

.message.bot {
  background-color: #E1E3E1;
  align-self: flex-start;
}
```
**.message:** Define o estilo base das mensagens (tamanho, espaçamento e borda).

**.message.user:** Mensagens do usuário ficam à direita com fundo vermelho.

**.message.bot:** Mensagens do bot ficam à esquerda com fundo cinza claro.

```css
/* ===== Área de Input ===== */
footer {
  display: flex;
  padding: 10px;
  gap: 10px;
  border-top: 1px solid #E1E3E1;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
```
**footer:** Área inferior do chat onde ficam o input e o botão de envio.

```css
/* ===== Campo de texto ===== */
#prompt {
  flex: 1;
  resize: none;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #E1E3E1;
  background-color: #EDF2FA;
  font-size: 16px;
  color: #000;
  justify-content: center;
}

#prompt::placeholder {
  color: gray;
}

#prompt:focus {
  border: 2px solid #0B57D0;
  outline: none;
}
```
**#prompt:** Campo de entrada de texto que ocupa todo o espaço disponível.
- Fundo claro para contraste
- Placeholder em cinza
- Destaque azul ao focar

```css
/* ===== Botão Enviar ===== */
#send {
  padding: 10px 15px;
  background-color: #d32f2f;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

#send:hover {
  background-color: #b71c1c;
}
```
**#send:** Botão de envio com cor vermelha e efeito hover para feedback visual.

## Modelo do JS
```js
// Configuração da API
const API_KEY = window.API_KEY || "SUA_API_KEY";

// Verifica se os elementos existem antes de adicionar eventos
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
```
**Configuração Segura da API:** A chave da API agora vem do `config.js` ou variável de ambiente.

**Verificação de Elementos:** Validação de existência dos elementos DOM antes de manipulação.

**Controle com Classes:** Uso de `classList` ao invés de `style.display` para melhor performance.

**Inicialização Segura:** Função `initializeChatbot()` só executa se todos os elementos existirem.

```js
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
```
**sendMessage()**: Função principal que processa o envio de mensagens. Remove espaços desnecessários, valida se há conteúdo, exibe a mensagem do usuário e solicita resposta da IA.

**appendMessage(sender, message)**: Cria e adiciona mensagens ao chat dinamicamente. Recebe o tipo de remetente ("user" ou "bot") e o conteúdo da mensagem, criando elementos HTML com classes apropriadas e rolagem automática.

**getBotResponse(userMessage)**: Função assíncrona que comunica com a API do Gemini. Monta a URL com a chave da API, envia a mensagem do usuário, processa a resposta JSON e exibe a resposta da IA no chat. Inclui tratamento de erros para casos de falha na API.
