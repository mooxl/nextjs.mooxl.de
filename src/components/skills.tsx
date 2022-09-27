const Section = (props: { title: string; skills: string[] }) => (
	<>
		<h4>{props.title}</h4>
		<div className="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-1 ">
			{props.skills.map((skill) => (
				<p key={skill}>{skill}</p>
			))}
		</div>
	</>
);
const Skills = () => (
	<>
		<h3>Skills</h3>
		<div className="space-y-3">
			<Section
				title="Programmiersprachen"
				skills={[
					'JavaScript',
					'TypeScript',
					'Golang',
					'C++',
					'Python',
					'Java',
					'C',
					'Assembler',
					'Prolog',
				]}
			/>
			<Section
				title="Bibliotheken und Frameworks"
				skills={[
					'React',
					'Next.js',
					'Vue',
					'Nuxt.js',
					'Three.js',
					'Node',
					'Fastify',
					'Nest.js',
					'Deno',
					'Oak',
					'Fresh',
					'Astro',
					'Framer Motion',
					'Tailwind CSS',
				]}
			/>
			<Section
				title="Weitere Kenntnisse"
				skills={[
					'Linux',
					'Docker',
					'Kubernetes',
					'Directus',
					'Strapi',
					'Traefik',
					'Git',
					'HTML',
					'SCSS',
					'Deutsch',
					'Postgres',
					'MongoDB',
					'Englisch (fließend)',
				]}
			/>
		</div>
	</>
);
export default Skills;
