const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    console.log("Incoming Request");
    res.send('Hello learning docker')
}) 

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    
    console.log(`Server is running on port: ${port}`)
})