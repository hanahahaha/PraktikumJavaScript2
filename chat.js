let message = document.getElementById("message");
let chatbox = document.getElementById("chatbox");
let button = document.getElementById("button");

button.addEventListener("click", function () {
  let newMessage = document.createElement("Li");
  newMessage.innerHTML = chatbox.value;
  message.appendChild(newMessage);
  chatbox.value = "";
});
