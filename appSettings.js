function appSettings() {
    
    // Topbar colors //
    var barColor = document.getElementById("bar-color").value;
    document.getElementById("mobile-top").style.backgroundColor = barColor;
    document.getElementById("mobile-bottom").style.backgroundColor = barColor;

    var barBorderColor = document.getElementById("bar-border-color").value;
    document.getElementById("mobile-top").style.borderColor = barBorderColor;
    document.getElementById("mobile-bottom").style.borderColor = barBorderColor;    
    
    var barTextColor = document.getElementById("bar-text-color").value;
    document.getElementById("mobile-top").style.color = barTextColor;
    document.getElementById("mobile-bottom").style.color = barTextColor;    
    
    var barIconColor = document.getElementById("bar-icon-color").value;
    var barIconColorChange = document.getElementsByClassName("moble-menu-lines");
    for (var i = 0; i < barIconColorChange.length; i++) {
        barIconColorChange[i].style.backgroundColor = barIconColor;
    }
    
    
    
    
    // Chat colors //
    var chatSenderNameColor = document.getElementById("sender-name-color").value;
    var chatSenderNameColorChange = document.getElementsByClassName("sender-name");
    for (var i = 0; i < chatSenderNameColorChange.length; i++) {
        chatSenderNameColorChange[i].style.color = chatSenderNameColor;
    }    
    
    var chatSenderColor = document.getElementById("sender-chat-color").value;
    var chatSenderColorChange = document.getElementsByClassName("sender-chat-text");
    for (var i = 0; i < chatSenderColorChange.length; i++) {
        chatSenderColorChange[i].style.color = chatSenderColor;
    }

    var chatYourNameColor = document.getElementById("your-name-color").value;
    var chatYourNameColorChange = document.getElementsByClassName("your-name");
    for (var i = 0; i < chatYourNameColorChange.length; i++) {
        chatYourNameColorChange[i].style.color = chatYourNameColor;
    }    
    
    var chatYourColor = document.getElementById("your-chat-color").value;
    var chatYourColorChange = document.getElementsByClassName("your-chat-text");
    for (var i = 0; i < chatYourColorChange.length; i++) {
        chatYourColorChange[i].style.color = chatYourColor;
    }
    
    var chatBackgroundColor = document.getElementById("sel-chat-bgcolor").value;
    document.getElementById("mobile-example").style.backgroundColor = chatBackgroundColor;    
    
    
    
    
    // Chat font size //
    var chatTextSize = document.getElementById("sel-chat-size").value;
    var chatTextSizeChange = document.getElementsByClassName("chat-size");
    for (var i = 0; i < chatTextSizeChange.length; i++) {
        chatTextSizeChange[i].style.fontSize = chatTextSize;
    }
}