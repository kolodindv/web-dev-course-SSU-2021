const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');



function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        heigth: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname,'preload.js'),
        },
        icon: __dirname + '/images/cover.jpg',
        show: false
    });
    
    mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools();

    mainWindow.once('ready-to-show', mainWindow.show)
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
    
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    };
});

