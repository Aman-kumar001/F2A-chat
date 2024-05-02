import { useState, useEffect } from 'react';
import styles from '../login.module.css';
import Typing from '../../Utils/Typing';
const Login = () => {
	const [timer, setTimer] = useState(0);
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [timer]);
	return (
		<div className={styles.container}>
			<div className={styles.leftCont}>
				<div className={styles.chatBox}>
					<div>
						{timer > 1 ? (
							<p className={styles.texts}>Hello There!!!</p>
						) : (
							<Typing />
						)}
					</div>
					{timer > 1 && (
						<div>
							{timer > 2 ? (
								<p className={styles.texts}>Welcome to </p>
							) : (
								<Typing />
							)}
						</div>
					)}
					{timer > 2 && (
						<div>
							{timer > 3 ? (
								<p className={styles.texts}>Hello There!!!</p>
							) : (
								<Typing />
							)}
						</div>
					)}
				</div>
			</div>
			<div className={styles.rightCont}>
				{/* login boxes */}

				<div className={styles.loginBox}>
					<h1>Login</h1>
					<input onChange={(e)=>} type='text' placeholder='Username' />
					<input type='password' placeholder='Password' />
					<button>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
