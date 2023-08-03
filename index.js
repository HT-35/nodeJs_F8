const express = require('express');
const app = express();
const port = 3000;

// rounter
app.get('/trang-chu', (req, res) => {
    res.send('hello word');
})

app.listen(port, () =>
    (console.log(`địa chỉ:  http://localhost:${port}`))
)