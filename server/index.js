require("dotenv").config({});

const cors = require("cors");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  const user = users.find((usr) => usr.email === email);

  if (user) {
    return res.status(400).json({ error: "User already registered! " });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    res.status(201).json({ message: "User was created" });
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((usr) => usr.email === email);

  if (!user) {
    return res.status(401).json({ error: "Invalid user or password " });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (!result) {
      return res.status(401).json({ error: "Invalid user or password " });
    }

    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);

    res.status(200).json({ token });
  });
});

const authenticated = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: err });
    }

    req.user = decoded;
    next();
  });
};

app.get("/api/profile", authenticated, (req, res) => {
  const { email } = req.user;

  const user = users.find((usr) => usr.email === email);

  res.status(200).json({ name: user.name, email: user.email });
});

app.listen(process.env.NODE_PORT, () => {
  console.log("server is running...");
});
