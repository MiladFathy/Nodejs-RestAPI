

/* ------------------------------ Core MOdules ------------------------------ */



/* ---------------------------- External Modules ---------------------------- */

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

/* ---------------------------- Internal Modules ---------------------------- */




/* ------------------------------- Application ------------------------------ */
const app = express();
app.use(cors());


console.log(process.env.PORT);



app.get('/api/', (req, res) => {
	res.send({
		path: '/',
		code: 403,
		info: 'cached',
		title: 'User Test',
		body: 'Body Http Request'
	});
});






























app.listen(process.env.PORT, () => {
	console.log(`http://localhost:${process.env.PORT}/`);
});