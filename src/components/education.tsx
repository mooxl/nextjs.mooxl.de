const Milestone = (props: { title: string; date: string; text?: string }) => (
	<div>
		<div className="flex justify-between md:flex-col">
			<h4 className="md:order-2">{props.title}</h4>
			<p className="md:order-1">{props.date}</p>
		</div>
		{props.text && <p className="whitespace-pre-wrap">{props.text}</p>}
	</div>
);
const Education = () => (
	<>
		<h3>Ausbildung</h3>
		<div className="space-y-3 lg:space-y-2">
			<Milestone
				title="FH Aachen | M. Eng. Information Systems Engineering"
				date="März 2022, Aachen"
			/>
			<Milestone
				title="FH Aachen | B. Sc. Informatik"
				date="September 2017 - Februar 2021, Aachen"
				text={`Bachelor of Science\nSchwerpunkt: Software Engineering`}
			/>
			<Milestone
				title="FOSBOS Aschaffenburg"
				date="2012-2015, Aschaffenburg"
				text={`Fachabitur\nSchwerpunkte: Technologie, Mathematik und Naturwissenschaften`}
			/>
			<Milestone
				title="Realschule Bessenbach"
				date="2008-2021, Bessenbach"
				text={`Mittlere Reife\nSchwerpunkte: Mathematik und Naturwissenschaft`}
			/>
		</div>
	</>
);
export default Education;
