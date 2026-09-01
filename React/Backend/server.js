const express = require('express');
const cors = require('cors');
const { isValidEmail, isValidPassword } = require('./validation');
const { hashPassword, comparePassword, createToken } = require('./auth');

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const users = [
  {
    id: 1,
    name: 'demo',
    email: 'demo@example.com',
    password: '$2a$10$U0G2kqN6mRNaqbH9sV1uQeqBaQvG4BPTkoNQf3QdNfWZkQ3qk7eWe',
  },
];

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = require('./auth').verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running' });
});

app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email' });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const hashedPassword = await hashPassword(password);

  users.push({
    id: Date.now(),
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = users.find((item) => item.email === email);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  const token = createToken({ id: user.id, email: user.email });

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

app.get('/api/profile', requireAuth, (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
