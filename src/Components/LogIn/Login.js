import { useState, useEffect } from 'react';
import styles from '../login.module.css';
import Typing from '../../Utils/Typing';
import { Button, TextField } from '@mui/material';
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
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.leftCont}>
					<div className={styles.chatBox}>
						<div className={styles.textWrapper}>
							{timer > 1 ? <p className={styles.texts}>👋</p> : <Typing />}
						</div>
						{timer > 1 && (
							<div className={styles.textWrapper}>
								{timer > 2 ? (
									<p className={styles.texts}>Welcome to </p>
								) : (
									<Typing />
								)}
							</div>
						)}
						{timer > 2 && (
							<div className={styles.textWrapper}>
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

						<TextField
							className={styles.inputField}
							id='standard-basic'
							fullWidth
							onChange={(e) => setUsername(e.target.value)}
							label='User Name'
							variant='standard'
						/>
						<TextField
							className={styles.inputField}
							fullWidth
							id='filled-password-input'
							onChange={(e) => setPassword(e.target.value)}
							label='Password'
							type='password'
							variant='standard'
						/>
						<div className={styles.buttonWrapper}>
							<Button
								variant='contained'
								style={{
									backgroundColor: 'black',
								}}
							>
								Login
							</Button>
							<Button
								variant='outlined'
								style={{
									border: '2px solid black',
									color: 'black',
								}}
							>
								New User?
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
