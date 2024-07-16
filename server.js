const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const db = require('./models');
const playerRoutes = require('./routes/playerRoutes');
const scoreRoutes = require('./routes/scoreRoutes');
const gameRoutes = require('./routes/gameRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Middleware
app.use(cors());
app.use(express.json());

console.log('Setting up routes');

// Routes
app.use('/games', gameRoutes);  // Use gameRoutes for /games
app.use('/players', playerRoutes);  // Use playerRoutes for /players
app.use('/scores', scoreRoutes);  // Use scoreRoutes for /scores

// Error handling middleware
app.use(errorHandler);

// Real-time communication
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('newScore', (score) => {
    io.emit('newScore', score);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Sync database and start server
db.sequelize.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
  });
});
