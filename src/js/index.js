const ipcRenderer = require('electron').ipcRenderer;
let topupSections = document.getElementsByClassName("topup-section");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener('click', (e) => {
    e.preventDefault();


    let orderObject = {
    }

    for (let x = 0; x < topupSections.length; x++) {
        let thisSection = topupSections[x];
        let thisService = thisSection.querySelector("input[type='hidden']").value;
        let serviceAmount = thisSection.querySelector("input.form-control").value;

        orderObject[thisService] = serviceAmount;

    }

    console.log(orderObject);
    ipcRenderer.send('hey', orderObject);
});
