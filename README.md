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

```
* {
    padding: 0;
    margin: 0;
    border: 0
}
/* ===== Estilo Geral ===== */
body {
    font-family: Arial, sans-serif;
    background-image: url("img/background.png");
    color: #fff;
}
```
***(Universal)**: Zera as margens e paddings padrão do navegador para garantir um layout consistente.

**body:** Define a fonte padrão, uma imagem de fundo para a página e a cor base do texto.


```
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
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
  word-break: break-word;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s, background-color 0.2s;
}

#button:hover {
  background-color: #b71c1c;
  transform: scale(1.1);
}
```
**Posicionamento:** Utiliza position:fixed para ficar sempre visível no canto inferior direito.

**Formato:** Circular (border-radius: 50%) com efeitos de sombra e transição.

**Interatividade:** Possui um efeito de hover que aumenta levemente o tamanho (scale) e escurece a cor ao passar o mouse.


```
main {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 400px;
  height: 700px;
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
```
**Layout:** Definido como um container flex em coluna, com altura e largura fixas.

**Efeito:** Possui bordas arredondadas e uma sombra intensa para dar profundidade (efeito de janela sobreposta).


```
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
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
}
```
**header:** Estilizado com fundo vermelho e texto em destaque. Define o arredondamento apenas nos cantos superiores.

**#close:** Posicionado de forma absoluta dentro do cabeçalho para atuar como o botão de saída.

```
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
}

/* ===== Mensagens ===== */
.message {
  padding: 12px;
  border-radius: 8px;
  max-width: 85%;
}

.message.user {
  background-color: #d32f2f;
  align-self: flex-end;
}

.message.bot {
  background-color: #E1E3E1;
  align-self: flex-start;
}
```
**section:** Ocupa todo o espaço disponível (flex: 1) e habilita a barra de rolagem vertical (overflow-y: auto).

**.message:** Estilos comuns para as bolhas de chat.

**.message.user:** Alinha as mensagens do usuário à direita com fundo vermelho.

**.message.bot:** Alinha as respostas da IA à esquerda com fundo cinza claro.


```
/* ===== Área de Input ===== */
footer {
  display: flex;
  padding: 10px;
  gap: 10px;
  border-top: 1px solid #E1E3E1;
  background-color: #FFFFFF;
}

/* ===== Campo de texto ===== */
#prompt {
  flex: 1;
  resize: none;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #E1E3E1;
  background-color: #EDF2FA;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 18px;
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

/* ===== Botão Enviar ===== */
#send {
  padding: 10px 15px;
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

#send:hover {
  background-color: #b71c1c;
}
```
**#prompt:** Campo de texto que se expande automaticamente. Possui estilização para o placeholder e um realce azul no focus (clique).

**#send:** Botão de envio com feedback visual de cor ao passar o mouse.

