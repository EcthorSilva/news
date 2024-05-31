const path = require('path');
const { app, Menu, Tray, BrowserWindow } = require('electron');

let tray = null;
let mainWindow = null;

function createMainWindow() {
   const win = new BrowserWindow({
      width: 300, // Largura da janela
      height: 600,
      show: false, // Não mostrar imediatamente
      frame: false,  // Remover a barra de título
      fullscreenable: false, // Não permitir tela cheia
      resizable: false,  // Não permitir redimensionamento
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false,
         preload: path.resolve(__dirname, 'preloader.js')
      }
   });

   win.loadURL('http://localhost:3000');

   mainWindow = win;

   mainWindow.on('closed', () => {
      mainWindow = null;
   });

   mainWindow.once('ready-to-show', () => {
      mainWindow.show();
   });

   const trayBounds = tray.getBounds();
   const windowBounds = mainWindow.getBounds();
   const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));
   const y = Math.round(trayBounds.y - windowBounds.height);
   mainWindow.setPosition(x, y, false);
}

function toggleMainWindow() {
   if (mainWindow && mainWindow.isVisible()) {
      mainWindow.hide();
   } else {
      if (!mainWindow) {
         createMainWindow();
      } else {
         mainWindow.show();
      }
   }
}

app.whenReady().then(() => {
   tray = new Tray(path.resolve(__dirname, 'assets', 'tray-icon.png'));

   tray.setToolTip('news-app');

   const contextMenu = Menu.buildFromTemplate([
      { label: 'Abrir Janela', click: toggleMainWindow },
      { label: 'Configurações', click: () => { console.log('Configurações clicado'); } },
      { type: 'separator' },
      { label: 'Sair', click: () => { app.quit(); } }
   ]);

   tray.setContextMenu(contextMenu);

   tray.on('click', () => {
      toggleMainWindow();
   });

   tray.on('right-click', () => {
      tray.popUpContextMenu(contextMenu);
   });
});

app.on('window-all-closed', () => {
   app.quit();
});
