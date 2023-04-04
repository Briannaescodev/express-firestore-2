import express from 'express';
import cors from 'cors'; 

import { addNewTv, getAllTv } from './src/tvLibrary';

const PORT = 3030;

const app = express(); 
app.use( cors() ); 
app.use( express.json() ); 

app.get("/tvShows", getAllTv); 
app.post("/tvShows", addNewTv); 

app.listen(PORT, ()=> {
    console.log(`listening on http:localhost:${PORT}`);
}); 
