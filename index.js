let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

let div = document.querySelector("#QR");

let img = document.querySelector("#QR-image")

let input = document.querySelector("#qrText");

let button = document.querySelector("button");
// let value = Text.value
// console.log(QRvalue)



  function generateQR(){
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;

    div.classList.add(".show-img")
  }

  button.addEventListener('click',generateQR)