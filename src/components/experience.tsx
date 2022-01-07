const Experience = () => (
	<>
		<h3>Erfahrung</h3>
		<div className="space-y-3">
			<div className="flex justify-between">
				<div>
					<h4>Mediaatrium GmbH</h4>
					<h5>Full Stack Developer</h5>
					<ul>
						<li>
							Front- und Backendentwicklung mittels JavaScript & TypeScript an
							verschiedenen Projekten
						</li>
						<li>Einführung von Continuos Delivery und Integration (DevOps)</li>
						<li>
							Überarbeitung der kompletten serverseitigen Infrastruktur via
							Docker
						</li>
					</ul>
				</div>
				<p className="flex-shrink-0">Februar 2021 - Jetzt, Laufach</p>
			</div>
			<div className="flex justify-between">
				<div>
					<h4>ASTA FH Aachen</h4>
					<h5>Front- & Backend Web Developer</h5>
					<ul>
						<li>
							Entwicklung und Instandhaltung verschiedener Systeme in Node.js,
							Deno, Golang und Python
						</li>
						<li>Komplette Überarbeitung der Wohnbörse der Uni Bonn</li>
						<li>Erweiterung der elektronischen Semesterticketrückerstattung</li>
					</ul>
				</div>
				<p className="flex-shrink-0">November 2018 - Jetzt, Aachen</p>
			</div>
		</div>
	</>
);
export default Experience;
