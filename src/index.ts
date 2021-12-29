import express, { Application } from 'express';

const app: Application = express();

app.listen(3000, () => {
    console.log(`Server on port ${3000}`)
})