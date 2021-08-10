1. Instalar npm y node
2. Pull del repo
3. Instalar dependencias con npm install
4. Opcional instalar nodemon de forma global para auto recarga del servidor.
5. Para correr servidor usar comando `node server.js` (o `nodemon server.js` si lo instalaste) dentro de la carpeta del proyecto.

# Demonio para aplicación NodeJS
##dev/node 

**Se usa systemd** 

1. Crear el archivo de configuración `sudo vim /lib/systemd/system/wip.service` con el contenido: 


bash
[Unit]
Description=WIP Node Server
Documentation=no
After=network.target

[Service]
WorkingDirectory=/opt/wip/wip-server
Type=simple
User=ubuntu
ExecStart=/usr/local/bin/node /opt/wip/wip-server/server.js
Restart=on-failure

[Install]
WantedBy=multi-user.target



2. Relodear el sistema de demonios para que tome los cambios: `sudo systemctl daemon-reload`
3. Levantar el servicio: `sudo systemctl start wip`
4. Matar el servicio: `sudo systemctl stop wip`
4. Levantar el servicio cada vez que inicia el sistema: `sudo systemctl enable wip.service`
5. Dejar de Levantar el servicio cada vez que inicia el sistema: `sudo systemctl disable wip.service`