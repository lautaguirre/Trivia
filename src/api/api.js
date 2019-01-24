import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export const subscribeToEstado = (callback) => {
  socket.on('estado', (msg) => {
    callback(msg);
  });
}

export const subscribeToStatus = (callback) => {
  socket.on('status', (obj) => {
    callback(obj);
  });
}

export const addMesa = (mesa) => {
  socket.emit('agregarmesa', mesa);
}
