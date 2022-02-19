FROM node:17.5.0-buster
WORKDIR /app
COPY . .
RUN npm install --silent --save
CMD chmod +x /app/entrypoint.sh && /app/entrypoint.sh