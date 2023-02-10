# twitch-chat-simulator

## How to run?

- Clone repository
```
git clone  (with SSH or HTTPS)
```
- Open the `server` folder and install dependencies
```
cd server
npm install 
```
- Run the server
```
npm run dev
```
This will run the server, a `Socket.IO` websocket which will send out random messages *every 2 seconds*

- Open the `client` folder and install dependencies
```
cd client
npm install 
```
- Run the client
```
npm run dev
```
This will run the client, a `React` application, which will receive the messages and display them (with autoscroll).
