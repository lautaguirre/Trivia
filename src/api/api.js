import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export const subscribeToStatus = (callback) => {
  socket.on('status', (obj) => {
    callback(obj);
  });
};

export const addMesa = (mesa) => {
  socket.emit('agregarmesa', mesa);
};

export const removeAllListeners = (channel) => {
  socket.removeAllListeners(channel);
};

export const addPoint = (mesa, pregunta) => {
  socket.emit('respuestacorrecta', { mesa, pregunta });
};
