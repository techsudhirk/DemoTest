var message = "hello sk";
function showMessage(){
    console.log(message);
    console.log("hello world")
}
module.exports.message = message;
module.exports.showMessage = showMessage;