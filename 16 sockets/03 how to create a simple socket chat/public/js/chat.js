const socket = io();
socket.on('chat message', addMessageListItem);
document.querySelector('#message-form').addEventListener('submit', handleMessageFormSubmit);

/**
 * Handles submit event of HTML form
 * @param {Event} event 
 */
function handleMessageFormSubmit(event) {
    event.preventDefault();
    const messageForm = event.target;
    const message = messageForm.message.value;
    socket.emit('chat message', message);
    messageForm.reset();
}

/**
 * Adds message to HTML list
 * @param {string} message 
 */
function addMessageListItem(message) {
    const listItem = document.createElement('li');
    listItem.innerText = message;
    document.querySelector('#message-list').appendChild(listItem);
}