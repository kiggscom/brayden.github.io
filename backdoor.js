function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/992509996858343604/isGO7xb4dVlq8hlXPOzI-QyFggVPkMOxSEQiUGge54JJAUUQOr_lEdOeC-Xgx3RW4gK5");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
      username: "",
      avatar_url: "",
      content: getInputText()
    }

    request.send(JSON.stringify(params));
  }

function getInputText() {
    var textBox = document.getElementById("messageInput").value;
    console.log(textBox);
    return textBox;
}