#Imagen  base de node.js
FROM node:18-alpine

#Crear el directorio de la aplicacion
WORKDIR /usr/src/app

#Copiar los archivos de la aplicacion
COPY package*.json ./
RUN npm install

# copiar el resto de los archivos
COPY . .

#Exponer el puerto en el que se ejecuta la aplicacion
EXPOSE 3000

#Comando para ejecutar la aplicacion
CMD ["npm", "start"]