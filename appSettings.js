function myFunction() {
    var barColor = document.getElementById("bar-color").value;
    document.getElementById("mobile-top").style.backgroundColor = barColor;
    document.getElementById("mobile-bottom").style.backgroundColor = barColor;

    var bgColor = document.getElementById("background-color").value;
    document.getElementById("mobile-example").style.backgroundColor = bgColor;

    var chatSenderColor = document.getElementById("sender-chat-color").value;
    var chatSenderColorChange = document.getElementsByClassName("sender-chat-text");
    for (var i = 0; i < chatSenderColorChange.length; i++) {
        chatSenderColorChange[i].style.color = chatSenderColor;
    }
    
    var chatTextSize = document.getElementById("sel-chat-size").value;
    var chatTextSizeChange = document.getElementsByClassName("chat-size");
    for (var i = 0; i < chatTextSizeChange.length; i++) {
        chatTextSizeChange[i].style.fontSize = chatTextSize;
    }
}
