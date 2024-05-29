const { resolve } = require('path');
const { app, Menu, Tray, BrowserWindow } = require('electron');

let tray = null;
let contextMenu = null;
let mainWindow = null;

app.whenReady().then(() => {
   tray = new Tray(resolve(__dirname, 'assets', 'tray-icon.png'));

   tray.setToolTip('news-app');

   contextMenu = Menu.buildFromTemplate([
      { label: 'Abrir Janela', click: openMainWindow },
      { label: 'Configurações', click: () => { console.log('Configurações clicado'); } },
      { type: 'separator' },
      { label: 'Sair', click: () => { app.quit(); } }
   ]);

   tray.setContextMenu(contextMenu);

   tray.on('click', () => {
      if (mainWindow) {
         mainWindow.show();
      } else {
         createMainWindow();
      }
   });

   tray.on('right-click', () => {
      tray.popUpContextMenu(contextMenu);
   });
});

function createMainWindow() {
   mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false,
      }
   });

   mainWindow.loadURL(`file://${__dirname}/index.html`);

   mainWindow.on('closed', () => {
      mainWindow = null;
   });
}

function openMainWindow() {
   if (mainWindow) {
      mainWindow.show();
   } else {
      createMainWindow();
   }
}

app.on('window-all-closed', () => {
   app.quit();
});
