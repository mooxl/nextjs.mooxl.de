import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
	const [sent, setSent] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data: { mail: string; message: string }) => {
		console.log(process.env.NEXT_PUBLIC_USERNAME);
		const response = await fetch('https://awsmailer.mediaatrium.de/send', {
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: process.env.NEXT_PUBLIC_USERNAME,
				key: process.env.NEXT_PUBLIC_KEY,
				from: process.env.NEXT_PUBLIC_FROM,
				to: process.env.NEXT_PUBLIC_TO,
				subject: `Neue Nachricht von ${data.mail}`,
				content: data.message,
			}),
		});
		response.statusText === 'OK' && setSent(true);
	};
	return (
		<>
			<h3>Kontakt</h3>
			{sent ? (
				<h3>Vielen Dank für die Nachricht</h3>
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
					<div className="space-y-1">
						<label>
							E-Mail{' '}
							{errors.mail && (
								<>
									- <span>Bitte eine gültige E-Mail Adresse eingeben</span>
								</>
							)}
						</label>
						<input
							type="text"
							className="w-full rounded-xl  p-1 bg-gray-dark text-gray-light outline-none"
							{...register('mail', {
								required: true,
								pattern:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							})}
						/>
					</div>
					<div className="space-y-1">
						<label>
							Nachricht{' '}
							{errors.message && (
								<>
									- <span>Dieses Feld sollte ausgefüllt sein</span>
								</>
							)}
						</label>
						<textarea
							className="w-full resize-none rounded-xl h-15  p-1 bg-gray-dark text-gray-light outline-none"
							{...register('message', { required: true })}></textarea>
					</div>
					<motion.input
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type="submit"
						className="rounded-xl px-5 py-1 bg-gray-dark text-gray-light cursor-pointer"
						value="Absenden"
					/>
				</form>
			)}
		</>
	);
};
export default Contact;
