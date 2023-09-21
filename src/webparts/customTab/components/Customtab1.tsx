import * as microsoftTeams from "@microsoft/teams-js";

// Function to send a message
function sendMessage() {
  // Cast the element with ID "messageInput" to an HTMLInputElement
  const messageInput = document.getElementById('messageInput') as HTMLInputElement;
  const message = messageInput.value;

  // Use the Teams SDK to get an authentication token
  microsoftTeams.authentication.getAuthToken({
    successCallback: (token: string) => {
      // Use the obtained token to make authenticated API requests
      const apiUrl = `https://graph.microsoft.com/v1.0/me/messages`;
      
      // Prepare the message payload
      const messagePayload = {
        body: {
          content: message,
        },
      };
      
      // Use fetch or another HTTP library to send the message
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Use the obtained token
        },
        body: JSON.stringify(messagePayload),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Message sent successfully.');
          } else {
            console.error('Failed to send message.');
          }
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
    },
    failureCallback: (error) => {
      console.error('Error obtaining authentication token:', error);
    },
  });
}

// Add an event listener for the send button
const sendButton = document.getElementById('sendButton');
if (sendButton) {
  sendButton.addEventListener('click', sendMessage);
}
