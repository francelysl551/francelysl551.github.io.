
/* .js files add interaction to your website */

var displayName = document.getElementById("secret");
var button = document.getElementById("myButton");

button.addEventListener("click", displaySecret);

function displaySecret(){
var text = document.getElementById("myText").value;
displayName.innerHTML = text + ", do you know you can help with this cause? Below there are ways to help."


}
