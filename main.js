const { resolve } = require('path');
const { app, Menu, Tray, BrowserWindow } = require('electron');

let tray = null;
let mainWindow = null;

function createMainWindow() {
   mainWindow = new BrowserWindow({
      width: 300, // Largura da janela
      height: 600,
      show: false, // Não mostrar imediatamente
      frame: false, // Remover a barra de título
      fullscreenable: false, // Não permitir tela cheia
      resizable: false, // Não permitir redimensionamento
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false,
      }
   });

   const indexPath = resolve(__dirname, 'index.html');
   mainWindow.loadFile(indexPath);

   mainWindow.on('closed', () => {
      mainWindow = null;
   });

   mainWindow.once('ready-to-show', () => {
      mainWindow.show();
   });

   // Mostrar a janela acima do ícone do tray
   const trayBounds = tray.getBounds();
   const windowBounds = mainWindow.getBounds();
   const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));
   const y = Math.round(trayBounds.y - windowBounds.height); // Posicionar acima do ícone do tray
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
   tray = new Tray(resolve(__dirname, 'assets', 'tray-icon.png'));

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