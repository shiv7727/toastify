import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useEffect, useState } from 'react';
import { ToastSuccess } from './common/Toast';

function App() {
	const [username, setUsername] = useState('');
	useEffect(() => {
		ToastSuccess('Event has been saved as draft');
		console.log('yes trigger');
	}, [username]);

	return (
		<div className='App'>
			<h2>Tosst is coming </h2>
			<button onClick={() => setUsername('abc')}>show Toast</button>
			<ToastContainer
				draggable
				pauseOnHover
				hideProgressBar={true}
				autoClose={5000}
				position='top-right'
				theme='colored'
			/>
		</div>
	);
}

export default App;
