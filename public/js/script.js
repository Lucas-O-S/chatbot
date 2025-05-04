var sendBtn = document.getElementById("sendBtn");
var textBox = document.getElementById("textBox");
var chatContainer = document.getElementById("chatContainer");
const arrayPossibleResponses = [
    {message: "hello", response: "hello"},
    {message: "hi", response: "hello"},
    {message: "How are you", response: "I am fine, thank you!"},
    {message: "your name", response: "I am a chatbot."},
    {message: "your age", response: "I am ageless."},
    {message: "favorite color", response: "I like all colors."},
];
var user = {message: ""};

function SendMessage(userMessage){
    var messageElement = document.createElement("div");
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

    messageElement.innerHTML = "<span>You: </span> " + "<span>" + userMessage +"</span>";
    chatContainer.appendChild(messageElement);
}

function ChatBotResponse(userMessage){
    var ChatbotMessage = "";
    for (var i = 0; i < arrayPossibleResponses.length; i++){
        if( userMessage.toLowerCase().includes(arrayPossibleResponses[i].message.toLowerCase())){
            ChatbotMessage = arrayPossibleResponses[i].response;
            break;
        }
        else{
            ChatbotMessage = "I am sorry, I do not understand that.";
        }
    }

    var messageElement = document.createElement("div");
    messageElement.style.textAlign = "left";
    messageElement.style.margin = "10px";

    messageElement.innerHTML = "<span>Chatbot: </span> " + "<span>" + ChatbotMessage +"</span>";
    
    setTimeout(()=>{
        messageElement.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 500, easing: "ease-in" }
        );
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);

}

sendBtn.addEventListener("click", function() {
    var UserMessage = textBox.value;
    if(UserMessage == ""){
        alert("Please enter a message before sending.");

    }
    else{
        let userMessageText = UserMessage.trim();
        user.message = userMessageText;
        textBox.value = "";
        SendMessage(userMessageText);
        ChatBotResponse(userMessageText);
    }
});