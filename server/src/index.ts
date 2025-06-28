import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/api', (req, res, next) => {
	res.json({ message: 'api works!' });
});


if (process.env.NODE_ENV === 'production') {
	app.get(/(.*)/, (req, res, next) => {
		res.sendFile(path.join(__dirname, '../../dist/client/index.html'));
	})
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
