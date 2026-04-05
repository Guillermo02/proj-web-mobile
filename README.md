# Projeto de Web Mobile
### Participantes: 
- Cláudio Dias - 10403569
- Guillermo Kuznietz - 10410134
- Matheus Mustaro - 10409259

## Explicação do processo de ideação
Buscamos montar um chatbot, utilizando técnica de RAG, para alunos tirarem eventuais dúvidas sobre a instituição do Mackenzie. Será utilizado a trindade HTML, CSS e Javascript, assim como python para a montagem do backend e sua API. 

## Caráter extensionista
Para alunos do mackenzie.

## Imagens do wireframe

### Protótipo para modelo web
<img width="1440" height="680" alt="Image" src="https://github.com/user-attachments/assets/430c3baf-b7a1-4ff0-8c7b-0c792d3e99e8" />

<hr>

<img width="1440" height="680" alt="Image" src="https://github.com/user-attachments/assets/810fbbfb-6d4f-42a2-8e37-d5e330d8f964" />

---
### Protótipo para modelo mobile
<img width="434" height="560" alt="image" src="https://github.com/user-attachments/assets/7b604afa-e46a-47f8-a05c-a16b89d6ea67" />

---

## Modelo do HTML
```
<button id="button">MACK AI</button>
```
Botão externo que atua como o disparador (trigger) para abrir a interface do chat.

```
<main>
    <header>🤖 MACK AI</header>
    <button id="close">&times;</button>
```
**header:** Contém a identificação visual (MACK AI) no cabeçalho.

**button id="close":** Botão de fechamento da interface.

```
    <section>
        <div id="chat">
        </div>
    </section>
```
**section:** Define o corpo principal da janela.

**div id="chat":** Container dinâmico destinado a receber e exibir as mensagens enviadas e recebidas.

```
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
```
**Layout:** Container principal do chatbot com tamanho fixo.

**Comportamento:** Inicialmente escondido (display: none) e organizado em coluna com flexbox.

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
document.addEventListener("DOMContentLoaded", function () {
```
Garante que todo o código só será executado após o carregamento completo do HTML, evitando erros ao acessar elementos que ainda não existem.

```js
const chatbotContainer = document.querySelector("main");
const openBtn = document.getElementById("button");
const closeBtn = document.getElementById("close");
const sendBtn = document.getElementById("send");
const chatbotInput = document.getElementById("prompt");
const chatbotMessages = document.getElementById("chat");
```
Define referências aos elementos do HTML para que possam ser manipulados dinamicamente.

```js
const API_KEY = "SUA_API_KEY";
```
Responsável por autenticar as requisições para a API do Gemini.

```js
openBtn.addEventListener("click", function () {
  const isVisible = chatbotContainer.style.display === "flex";

  if (isVisible) {
    chatbotContainer.style.display = "none";
  } else {
    chatbotContainer.style.display = "flex";
  }
});
```
Implementa um comportamento de **toggle**:
- Abre o chatbot se estiver fechado
- Fecha se já estiver aberto

```js
closeBtn.addEventListener("click", function () {
  chatbotContainer.style.display = "none";
  openBtn.style.display = "block";
  chatbotMessages.innerHTML = "";
});
```
- Fecha o chatbot
- Mostra o botão principal
- Limpa todas as mensagens

```js
sendBtn.addEventListener("click", sendMessage);
```
Dispara o envio da mensagem ao clicar no botão.

```js
chatbotInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
```
Permite enviar mensagens com **Enter** e usar **Shift + Enter** para quebrar linha.

```js
function sendMessage() {
  const userMessage = chatbotInput.value.trim();
```
Captura o texto digitado e remove espaços desnecessários.

```js
if (userMessage) {
  appendMessage("user", userMessage);
  chatbotInput.value = "";
  getBotResponse(userMessage);
}
```
- Exibe a mensagem do usuário
- Limpa o campo
- Envia para a API

```js
function appendMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = message;
```
Cria uma nova mensagem no chat.

```js
chatbotMessages.appendChild(messageElement);
chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
```
- Adiciona ao container
- Faz scroll automático

```js
async function getBotResponse(userMessage) {
```
Função assíncrona responsável pela comunicação com o Gemini.

```js
const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
```
Define o endpoint da API com o modelo **Gemini 2.5 Flash**.

```js
const response = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
```
Realiza uma requisição POST com dados em JSON.

```js
body: JSON.stringify({
  contents: [
    {
      parts: [{ text: userMessage }]
    }
  ]
}),
```
Estrutura da mensagem enviada para o modelo.

```js
const data = await response.json();
```
Converte a resposta para JSON.

```js
const botMessage =
  data.candidates?.[0]?.content?.parts?.[0]?.text ||
  "Sem resposta do modelo.";
```
Extrai a resposta gerada pela IA.

```js
appendMessage("bot", botMessage);
```
Exibe a resposta no chat.

```js
} catch (error) {
  console.error("Erro:", error);
  appendMessage("bot", "Erro ao responder. Tente novamente.");
}
```
- Exibe erro no console
- Mostra mensagem amigável ao usuário
