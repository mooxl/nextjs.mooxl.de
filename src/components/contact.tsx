const Contact = () => (
	<>
		<h3>Kontakt</h3>
		<div className="space-y-3">
			<div className="space-y-1">
				<label>E-Mail</label>
				<input
					type="text"
					className="w-full rounded-xl  p-1 bg-gray-dark text-gray-light outline-none"
				/>
			</div>
			<div className="space-y-1">
				<label>Nachricht</label>
				<textarea className="w-full resize-none rounded-xl h-15  p-1 bg-gray-dark text-gray-light outline-none"></textarea>
			</div>
			<button className="rounded-xl px-5 py-1 bg-gray-dark text-gray-light">
				Absenden
			</button>
		</div>
	</>
);
export default Contact;
