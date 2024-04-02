document.getElementById('sendButton').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

async function sendMessage() {
    const input = document.getElementById('input').value.trim();
    if (input !== '') {
        // Ajouter le message de l'utilisateur à la boîte de chat
        addUserMessage(input);

        // Appeler l'API de traitement du langage naturel
        const response = await fetch('https://api.example.com/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: input })
        });

        const data = await response.json();

        // Ajouter la réponse du chatbot à la boîte de chat
        addChatbotMessage(data.response);

        // Réinitialiser l'entrée
        document.getElementById('input').value = '';

        // Faire défiler vers le bas pour afficher le nouveau message
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

function addUserMessage(message) {
    const chatbox = document.getElementById('chatbox');
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = 'Vous : ' + message;
    chatbox.appendChild(userMessage);
}

function addChatbotMessage(message) {
    const chatbox = document.getElementById('chatbox');
    const chatbotMessage = document.createElement('div');
    chatbotMessage.classList.add('message', 'chatbot-message');
    chatbotMessage.textContent = 'Chatbot : ' + message;
    chatbox.appendChild(chatbotMessage);
}
