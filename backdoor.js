function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/992509996858343604/isGO7xb4dVlq8hlXPOzI-QyFggVPkMOxSEQiUGge54JJAUUQOr_lEdOeC-Xgx3RW4gK5");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
      username: "",
      avatar_url: "https://media.discordapp.net/attachments/936350089977397248/992553703880015953/unknown.png",
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