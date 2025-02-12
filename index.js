document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("user-input"); // Pega o campo de entrada

  inputField.addEventListener("keydown", (e) => { // Adiciona um ouvinte de evento para teclas pressionadas
    if (e.code === "Enter") { // Se a tecla pressionada for "Enter"
      let input = inputField.value; // Captura o valor digitado
      inputField.value = ""; // Limpa o campo de entrada
      output(input); // Chama a função output para processar a entrada
    }
  });
});

function sendMessage() {
  const inputField = document.getElementById("user-input");
  let input = inputField.value;
  inputField.value = ""; // Limpa o campo de entrada
  output(input); // Chama a função output para processar a entrada
}

function output(input) {
  let product;

  // Exibe a mensagem do usuário
  displayMessage(`Você: ${input}`, "user-message");

  // Remove caracteres especiais e números, e converte o texto para minúsculas
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();

  // Procura uma resposta correspondente nas listas `prompts` e `replies`
  if (compare(prompts, replies, text)) { 
    product = compare(prompts, replies, text);
  } else if (text.match(/Obrigado/gi)) {
    product = "De nada!" 
  } else if (text.match(/(corona|covid|virus)/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Exibe "Digitando..." e simula o atraso
  const botMessageDiv = displayTypingMessage();

  // Simula um pequeno atraso para parecer que o bot está "digitando"
  setTimeout(() => {
    botMessageDiv.innerHTML = `Bot: ${product}`; // Substitui a div com a resposta do bot
    textToSpeech(product); // Converte o texto em fala (caso essa função esteja implementada)
  }, 1000);
}

function displayTypingMessage() {
  const messagesContainer = document.getElementById("chat-content");
  
  // Cria uma nova div para a mensagem do bot
  const botDiv = document.createElement("div");
  botDiv.classList.add("message", "bot-message");
  
  // Cria um texto para mostrar "Digitando..."
  const botText = document.createElement("span");
  botText.innerText = "Digitando...";


  // const botImg = document.createElement("img");
  // botImg.src = "caminho-da-imagem-de-digitacao.gif";
  // botImg.alt = "Bot digitando";

  // Adiciona o texto e a imagem à div
  botDiv.appendChild(botText);
  // botDiv.appendChild(botImg);
  
  // Adiciona a div ao container de mensagens
  messagesContainer.appendChild(botDiv);

  // Faz o scroll para mostrar a última mensagem
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  return botDiv; // Retorna a div para poder substituir seu conteúdo depois
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break; // Para a busca quando encontra uma correspondência
      }
    }
    if (replyFound) {
      break; // Interrompe a busca no array principal se já encontrou a resposta
    }
  }
  return reply;
}

// Função para exibir mensagens no chat
function displayMessage(message, type) {
  const chatContent = document.getElementById("chat-content");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", type);
  messageElement.textContent = message;
  chatContent.appendChild(messageElement);
  chatContent.scrollTop = chatContent.scrollHeight; // Rolagem automática
}
