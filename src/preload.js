const { remote } = require('electron');

let currWindow = remote.BrowserWindow.getFocusedWindow();

window.radulfr = function(e){
    console.log('hey');
}