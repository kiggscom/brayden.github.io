function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/992599433688645665/xGjtQ6B5EycHj79fyXiK8YgEFU6ZIEdVRPZ3PU3rTESYE7TCoS6QL9WETdFoUChv94tC");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
      username: getInputName() || "Small PP",
      avatar_url: getInputPic() || "https://media.discordapp.net/attachments/936350089977397248/992553703880015953/unknown.png",
      content: getInputText()
    }

    if (document.getElementById("passInput").value === "1234")
    {
        request.send(JSON.stringify(params));
    }
    else {
        document.getElementById("passInput").value = "wrong password"
    }
  }

function getInputText() {
    var textBox = document.getElementById("messageInput").value;
    console.log(textBox);
    return textBox;
}

function getInputName() {
  var nameBox = document.getElementById("nameInput").value;
  console.log(nameBox);
  return nameBox;
}

function getInputPic() {
  var picBox = document.getElementById("picInput").value;
  console.log(picBox);
  return picBox;
}
