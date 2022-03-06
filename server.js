const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});

app.get("/catch", (req, res) => {
  const result = Math.floor(Math.random() * 100);

  if (result > 50) {
    return res.status(200).json({
      status: 200,
      code: "200",
      data: result,
      message: "Success",
    });
  } else {
    return res.status(200).json({
      status: 200,
      code: "200",
      data: result,
      message: "Fail",
    });
  }
});

app.get("/release", (req, res) => {
  const result = Math.floor(Math.random() * 100);

  return res.status(200).json({
    status: 200,
    code: "200",
    data: result,
    message: "Success",
  });
});

app.get("/rename", async (req, res) => {
  const number = await fibonacci(req.query.count);
  let result = `${req.query.name}-${number}`;

  return res.status(200).json({
    status: 200,
    code: "200",
    data: {
      nickname: result,
      count: +req.query.count+1
    },
    message: "Success",
  });
});

// listen on the port
app.listen(port);

async function fibonacci(number) {
  let n1 = 0, n2 = 1, nextTerm;

  for (let i = 1; i <= number; i++) {
      if(i == number) {
        return n1;
      }
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
      
  }
}
