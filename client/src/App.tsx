import { useEffect } from 'react';
import './App.css'

function App() {


	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => {
				console.log(data); // Should log: { message: 'api works!' }
			})
			.catch((err) => console.error('API Error:', err));
	}, []);

	return (
		<>
			<div data-testid="container">Hello from both worlds!</div>
		</>
	)
}

export default App
