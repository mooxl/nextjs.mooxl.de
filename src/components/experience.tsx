const Milestone = (props: {
	title: string;
	role: string;
	date: string;
	list: string[];
}) => (
	<div>
		<div className="flex justify-between md:flex-col">
			<div className="md:order-2">
				<h4>{props.title}</h4>
				<h5>{props.role}</h5>
				<ul>
					{props.list.map((item: string) => (
						<li>{item}</li>
					))}
				</ul>
			</div>
			<p className="flex-shrink-0 md:order-1">{props.date}</p>
		</div>
	</div>
);
const Experience = () => (
	<>
		<h3>Erfahrung</h3>
		<div className="space-y-3 lg:space-y-2">
			<Milestone
				title="Mediaatrium GmbH"
				role="Full Stack Developer"
				date="Februar 2021 - Jetzt, Laufach"
				list={[
					'Front- und Backendentwicklung mittels JavaScript & TypeScript anverschiedenen Projekte',
					'Überarbeitung der kompletten serverseitigen Infrastruktur via Docker',
				]}
			/>
			<Milestone
				title="ASTA FH Aachen"
				role="Front- & Backend Web Developer"
				date="November 2018 - Jetzt, Aachen"
				list={[
					'Entwicklung und Instandhaltung verschiedener Systeme in Node.js, Deno, Golang und Python',
					'Wohnbörse der Uni Bonn',
					'Erweiterung der elektronischen Semesterticketrückerstattung',
				]}
			/>
		</div>
	</>
);
export default Experience;
