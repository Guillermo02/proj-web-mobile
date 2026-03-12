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
<img src="./img/background.png" alt="Fundo de Tela">
<input type="button" value="MACK AI">
```
O `img` é utilizado para definir o background e o `input` para interagir com o chatbot.


```
<main>
<header>MACK AI</header>
<section>
    <div id="user">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos excepturi rerum dolores explicabo
            id deleniti atque natus molestias possimus?</p>
    </div>
    <div id="bot">
        <img src="#" alt="Foto do Bot">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos excepturi rerum dolores explicabo
            id deleniti atque natus molestias possimus?</p>
    </div>
</section>
```
Teremos uma estrutura básica de interface de chat chamada *MACK AI*, utilizamos a tag `<main>` como contêiner principal. Ele organiza o conteúdo em um cabeçalho e uma seção, que separa a mensagem do usuário *#user* da mensagem do bot *#bot* através de elementos `<div>` e `<p>`. O bot inclui um espaço reservado para imagem.

```
    <footer>
        <textarea name="prompt" id="prompt">Pergunte alguma coisa</textarea>
    </footer>
</main>
```
<p>No rodapé teremos o campo de texto para envio das mensagens.</p>

