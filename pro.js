const apiKey = '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';
const apiUrl = 'https://api.dialogflow.com/v1/query?v=20150910';

document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

async function sendMessage() {
  const input = document.getElementById('input').value.trim();
  if (input !== '') {
    // Ajouter le message de l'utilisateur à la boîte de chat
    addUserMessage(input);

    // Appeler l'API Dialogflow
    const response = await axios.post(apiUrl, {
      query: input,
      lang: 'en',
      sessionId: '1234567890'
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    // Ajouter la réponse du chatbot à la boîte de chat
    addBotMessage(response.data.result.fulfillment.speech);

    // Réinitialiser l'entrée
    document.getElementById('input').value = '';
  }
}

function addUserMessage(message) {
  const chatbox = document.getElementById('chatbox');
  const messageElement = document.createElement('div');
  messageElement.className = 'message user-message';
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function addBotMessage(message) {
  const chatbox = document.getElementById('chatbox');
  const messageElement = document.createElement('div');
  messageElement.className = 'message bot-message';
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight;
}
