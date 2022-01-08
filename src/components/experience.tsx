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
						<li key={item}>{item}</li>
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
				date="seit Februar 2021, Laufach"
				list={[
					'Front- und Backend-Entwicklung mittels TypeScript im Rahmen verschiedener Projekte',
					'Überarbeitung der kompletten serverseitigen Infrastruktur via Docker',
					'Optimierung interner technischer Prozesse',
				]}
			/>
			<Milestone
				title="AStA FH Aachen"
				role="Front- und Backend Web Developer"
				date="seit November 2018, Aachen"
				list={[
					'Entwicklung und Instandhaltung verschiedener Systeme in Node.js, Deno, Golang und Python',
					'Konzeption und Umsetzung der Wohnbörse "Zimmerfrei" der Uni Bonn',
					'Erweiterung der elektronischen Semesterticketrückerstattung',
				]}
			/>
		</div>
	</>
);
export default Experience;
