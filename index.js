const express = require("express");

const { saveEmail } = require('./services/wfc.js')

const app = express();
const PORT = 2348;

app.get("/", (req, res) => {
	res.json({ message: "I got in!"  });
})

app.get("/:primaryCategory/:secondaryCategory/:version", async (req, res) => {
  const { primaryCategory, secondaryCategory, version } = req.params;
  const { email } = req.query
  console.log("primaryCategory, secondaryCategory, version", {primaryCategory, secondaryCategory, version})
  const {status, message } = await saveEmail(email)
	res.json({ status, message: status ? "Email id added" : message });
})

app.listen(PORT, () => {
	console.log("Server Running on PORT", PORT);
})
