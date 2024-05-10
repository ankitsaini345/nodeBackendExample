import express from 'express';

const app = express();

app.get('/', (req,res) => {
     return res.status(200).json({headers: req.headers})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})