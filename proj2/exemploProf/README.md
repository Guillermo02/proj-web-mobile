# Projeto de Web Mobile

## Participantes: 

- Cláudio Dias - 10403569
- Guillermo Kuznietz - 10410134
- Matheus Mustaro - 10409259

## Tecnologias utilizadas

- HTML5 (estrutura semântica)
- CSS3 (Flexbox, variáveis CSS e responsividade)
- JavaScript (ES6+)
- API Gemini (Google AI)

## Explicação do processo de ideação

O processo de ideação iniciou com um brainstorming entre os integrantes do grupo, com o objetivo de identificar problemas enfrentados por alunos no ambiente acadêmico.

Foram levantadas algumas possibilidades de solução, como:
- Um portal informativo com perguntas frequentes (FAQ)
- Um sistema de busca tradicional para conteúdos institucionais
- Um chatbot inteligente para atendimento automatizado

Após análise, optamos pelo desenvolvimento de um chatbot, pois ele oferece uma interação mais dinâmica, rápida e acessível ao usuário.

Como diferencial, foi proposta a utilização da técnica de RAG (Retrieval-Augmented Generation).

Nesta abordagem, o chatbot pode ser integrado a uma base de dados institucional, permitindo recuperar informações relevantes antes de gerar a resposta, tornando-a mais precisa e contextualizada.

Para fins deste projeto, foi implementada uma estrutura inicial que pode ser expandida futuramente com integração a bases reais do Mackenzie.

A escolha final foi baseada nos seguintes critérios:
- Facilidade de uso para o aluno
- Escalabilidade da solução
- Experiência interativa
- Aplicabilidade prática no ambiente acadêmico

## Caráter extensionista

O projeto possui caráter extensionista ao propor uma solução prática que pode ser utilizada por alunos do Mackenzie para esclarecer dúvidas acadêmicas e institucionais de forma rápida e acessível.

O chatbot pode ser integrado a portais institucionais ou ambientes virtuais de aprendizagem, atuando como um canal inteligente de suporte automatizado.

Seu impacto para a comunidade acadêmica inclui:
- Redução da sobrecarga de atendimentos administrativos
- Acesso facilitado à informação para novos alunos
- Apoio contínuo fora do horário de atendimento humano

Além disso, o projeto pode ser expandido futuramente para atender diferentes áreas da instituição, como secretaria, financeiro e suporte acadêmico, ampliando seu alcance e utilidade.

---

## Aplicação real no mercado
Utilizamos como exemplo de aplicação real de um chatbot, a plataforma de streaming Sky+. Nela, podemos tirar duvidas comuns do serviço, assim como entrar em contato com atendimento humano se necessário.

<img width="1882" height="863" alt="image" src="https://github.com/user-attachments/assets/00e649f1-270a-4e24-b152-4eee7f4a347c" />

---

## Wireframe

### Descrição

O wireframe foi desenvolvido com foco em simplicidade, acessibilidade e facilidade de uso.

A interface do chatbot segue uma estrutura padrão de aplicações de mensagem, contendo:
- Botão flutuante para abertura do chat
- Cabeçalho com identificação do sistema (MACK AI)
- Área central para exibição das mensagens (usuário e bot)
- Campo de entrada com botão de envio

O objetivo do layout é proporcionar uma interação rápida e intuitiva, permitindo que o usuário faça perguntas e receba respostas de forma clara.

---

### Protótipo para modelo web

O modelo web foi projetado para telas maiores, iniciando em uma tela de login que, após preenchida, segue para a página inicial onde haverá diversos cards para cada disciplina. Clicando em um dos cards, te levará para uma nova página dinâmica com as informações preenchidas (imagem em falta).

<img width="1022" height="711" alt="image" src="https://github.com/user-attachments/assets/3b423aae-d75e-41f0-b507-019191d2bfc5" />
<hr>
<img width="2880" height="2048" alt="image" src="https://github.com/user-attachments/assets/1230cb32-08fa-405a-a7c5-7b9d780afdfa" />

---

## Estrutura do HTML

```html
<button id="button">MACK AI</button>
```
Botão externo que atua como o disparador (trigger) para abrir a interface do chat.

```html
<main id="chatbot" class="hidden">
    <header class="chat-header">
        <h2>🤖 MACK AI</h2>
        <button id="close">&times;</button>
    </header>
```
**header**: Contém a identificação visual do chatbot e o botão de fechamento.

**h2**: Define semanticamente o título da aplicação.

**button id="close"**: Botão responsável por fechar a interface do chat.

```html
    <section class="chat-body">
        <article id="chat"></article>
    </section>
```
**section**: Define a área principal de conteúdo do chatbot.

**article id="chat"**: Container semântico onde as mensagens são inseridas dinamicamente.

```html
    <footer class="chat-footer">
        <textarea id="prompt" placeholder="Pergunte alguma coisa"></textarea>
        <button id="send">➤</button>
    </footer>
</main>
```
**footer**: Agrupa os elementos de interação do usuário.

**textarea id="prompt"**: Campo de entrada de texto.

**button id="send"**: Botão responsável por enviar a mensagem para o chatbot.

## Estilização com CSS

O visual do chat foi desenvolvido com foco em usabilidade, padronização e manutenção, utilizando variáveis globais para cores e estilos.

```css
:root {
  --primary: #d32f2f;
  --primary-dark: #b71c1c;
  --gray-light: #E1E3E1;
  --background-input: #EDF2FA;
  --white: #ffffff;
}
```
**:root**: Define variáveis globais para padronizar cores e facilitar manutenção do código.

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}
```
**Reset**: Remove estilos padrão do navegador e melhora o controle de layout com `box-sizing`.

```css
body {
  background-image: url("img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
```
Define a imagem de fundo ocupando toda a tela.

```css
#button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  transition: 0.2s;
}

#button:hover {
  background-color: var(--primary-dark);
  transform: scale(1.1);
}
```
Botão flutuante fixo no canto inferior direito, com efeito de hover para feedback visual.

```css
main {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 100%;
  max-width: 400px;
  height: 80vh;
  background: var(--white);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
}

.hidden {
  display: none;
}
```
Container principal do chatbot:
- Uso de `max-width` e `vh` para responsividade
- Controle de visibilidade feito via classe `.hidden` (boa prática)

```css
.chat-header {
  background: var(--primary);
  color: var(--white);
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```
Cabeçalho do chat com layout flexível e alinhamento entre título e botão.

```css
#close {
  background: none;
  color: var(--white);
  font-size: 28px;
  cursor: pointer;
}
```
Botão de fechar posicionado no header.

```css
.chat-body {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}

#chat {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
```
Área de mensagens com rolagem vertical e organização em coluna.

```css
.message {
  padding: 12px;
  border-radius: 8px;
  max-width: 85%;
  font-size: 16px;
}

.user {
  background: var(--primary);
  color: var(--white);
  align-self: flex-end;
}

.bot {
  background: var(--gray-light);
  align-self: flex-start;
}
```
Estilização das mensagens:
- Usuário → direita (vermelho)
- Bot → esquerda (cinza)

```css
.chat-footer {
  display: flex;
  gap: 10px;
  padding: 10px;
  border-top: 1px solid var(--gray-light);
  background-color: var(--white);
}
```
Área inferior com campo de entrada e botão.

```css
#prompt {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--gray-light);
  background: var(--background-input);
  font-size: 16px;
  color: #000000;
  font-size: 16px;
}

#prompt::placeholder {
  color: #808080;
}

#prompt:focus {
  border: 2px solid #0B57D0;
  outline: none;
}
```
Campo de texto com destaque visual ao focar.

```css
#send {
  background: var(--primary);
  color: var(--white);
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

#send:hover {
  background: var(--primary-dark);
}
```
Botão de envio com feedback visual no hover.

```css
@media (max-width: 412px) {
  body {
    background-image: url("img/backgroundMobile.png");
  }

  #button {
    width: 60px;
    height: 60px;
    font-size: 10px;
    bottom: 15px;
    right: 15px;
  }

  main {
    width: 90vw;
    height: 80vh;
    bottom: 70px;
    right: 5vw;
    left: auto;
  }
}
```
Responsividade para dispositivos móveis, adaptando o tamanho e posicionamento do chatbot.

## Lógica com JavaScript

```js
document.addEventListener("DOMContentLoaded", () => {
```
Garante que o código só será executado após o carregamento completo do HTML, evitando erros ao acessar elementos inexistentes.

```js
const API_KEY = window.API_KEY || "SUA_API_KEY";
```
Responsável por autenticar as requisições para a API do Gemini. No projeto atual, a comunicação é feita diretamente via frontend.
(Em produção, essa chave deve ser protegida via backend.)

```js
    // ===== REGRA DA IA =====
  const SYSTEM_PROMPT = `
  Você é um assistente virtual chamado MACK AI, desenvolvido para auxiliar alunos do Mackenzie.

  REGRAS IMPORTANTES:

  1. Responda apenas com base em informações institucionais do Mackenzie.
  2. Nunca invente informações. Caso não tenha certeza, diga:
    "Não tenho essa informação no momento. Consulte o portal oficial do Mackenzie."
  3. Seja claro, objetivo e educado.
  4. Priorize respostas curtas e diretas.
  5. Sempre que possível, oriente o aluno sobre onde encontrar a informação (portal do aluno, secretaria, etc).
  6. Não responda perguntas fora do contexto acadêmico ou institucional.
  7. Não gere opiniões pessoais.
  8. Não forneça informações sensíveis ou confidenciais.
  9. Caso a pergunta seja ambígua, peça mais detalhes.
  10. Mantenha linguagem formal e acessível.
  `;
```
O `SYSTEM_PROMPT` define o comportamento do chatbot, garantindo respostas alinhadas ao contexto acadêmico do Mackenzie.
Ele é enviado junto com a pergunta do usuário para orientar a IA, garantindo:
- Clareza e objetividade
- Respostas institucionais
- Segurança e confiabilidade

```js
const chatbot = document.getElementById("chatbot");
const openBtn = document.getElementById("button");
const closeBtn = document.getElementById("close");
const sendBtn = document.getElementById("send");
const input = document.getElementById("prompt");
const chat = document.getElementById("chat");
```
Define referências aos elementos do HTML para manipulação dinâmica.

```js
if (!chatbotContainer || !openBtn || !closeBtn || !sendBtn || !input || !chat) {
  console.error("Elementos necessários do chatbot não foram encontrados no DOM");
  return;
}
```
Verificação de segurança global.
Evita execução do código caso algum elemento essencial não exista no DOM.

```js
openBtn.addEventListener("click", () => {
  chatbotContainer.classList.toggle("visible");
  chatbotContainer.classList.toggle("hidden");
});
```
Controla a exibição do chatbot utilizando `classList`.

Compatível com:

- .visible (versão antiga)
- .hidden (nova abordagem)

Isso garante maior flexibilidade de integração com diferentes estilos CSS.


```js
closeBtn.addEventListener("click", () => {
  chatbotContainer.classList.remove("visible");
  chatbotContainer.classList.add("hidden");
  chat.innerHTML = "";
});
```
Fecha o chatbot e limpa as mensagens exibidas, garantindo um estado inicial ao reabrir.

```js
sendBtn.addEventListener("click", sendMessage);
```
Dispara o envio da mensagem ao clicar no botão.

```js
if (input) {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
}
```
Permite enviar mensagens com **Enter** e usar **Shift + Enter** para quebra de linha.

```js
function sendMessage() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  input.value = "";

  getBotResponse(userMessage);
}
```
- Captura o texto digitado
- Evita envio de mensagens vazias
- Exibe mensagem do usuário e chama a API

```js
function appendMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = message;

  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight;
}
```
Cria e adiciona dinamicamente uma nova mensagem ao chat, com rolagem automática.

```js
async function getBotResponse(userMessage) {
```
Função assíncrona responsável pela comunicação com a API.

```js
const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
```
Define o endpoint da API com o modelo **Gemini 2.5 Flash**.

```js
try {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: SYSTEM_PROMPT },
                  { text: userMessage }
          ]
        }
      ]
    }),
  });
```
Realiza uma requisição POST enviando a mensagem do usuário no formato JSON.

```js
const data = await response.json();
```
Converte a resposta da API para JSON.

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
Trata possíveis erros, exibindo mensagem amigável ao usuário.

## Regras do Chatbot (IA)

O chatbot foi configurado com um conjunto de regras (system prompt) para garantir que as respostas estejam alinhadas às informações institucionais do Mackenzie.

As principais diretrizes incluem:
- Responder apenas com base em informações acadêmicas e institucionais
- Não inventar informações
- Informar quando não souber a resposta
- Direcionar o usuário para canais oficiais (portal do aluno, secretaria, etc.)
- Manter linguagem clara, objetiva e acessível
- Evitar opiniões pessoais ou conteúdos fora do contexto acadêmico

Essa abordagem reduz o risco de respostas incorretas e aumenta a confiabilidade do sistema.

## Segurança

Para fins acadêmicos, a chave da API foi utilizada diretamente no código frontend.

Em um ambiente de produção, o ideal seria:
- Utilizar um backend para intermediar as requisições
- Armazenar a chave em variáveis de ambiente
- Evitar exposição direta da API no cliente

Essa abordagem garante maior segurança e proteção contra uso indevido da chave.
