const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win
function createWindow() {
   win = new BrowserWindow({
       width: 800, 
       height: 600,  
       webPreferences: {
        nodeIntegration: true
    }
    })
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
//    win.webContents.openDevTools()
}
app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  
    index = 1;  
    textArr = [];
    const clipboardWatcher = require('electron-clipboard-watcher')
    clipboardWatcher({
      watchDelay: 1000,  
      onTextChange: function (text) { 
        textArr[index] = index + ". " + text;
        console.log(textArr[index].trim());
        index++;
      }
    })
  
  })
  
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  }) 