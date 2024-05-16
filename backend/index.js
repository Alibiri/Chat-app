const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "6023b842-0c4b-49fa-a701-c7fd8b09d2b5" }}
        );
        return res.status(r.status).json(r.date);
    }catch (e) {
        return res.status(e.response.status).json(e.response.date);
    }

});
app.listen(3001);