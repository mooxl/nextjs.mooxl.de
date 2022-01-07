import { motion } from 'framer-motion';
const Project = ({ link, domain, technologies, from, to }) => (
	<a href={link} target="_blank">
		<motion.div
			whileHover={{ scale: 1.03 }}
			className={`rounded-xl p-0.3 h-full bg-gradient-to-r from-${from} to-${to} cursor-pointer`}>
			<div className="bg-gray rounded-lg p-2 text-center h-full">
				<h4>{domain}</h4>
				<p>{technologies}</p>
			</div>
		</motion.div>
	</a>
);
const Projects = () => (
	<>
		<h3>Projekte</h3>
		<div className="grid grid-cols-2 gap-3">
			<Project
				link="https://beta.mediaatrium.de"
				domain="laufach.de (beta)"
				technologies="Next.js, Tailwind CSS, Directus, MeiliSearch"
				from="violet-600"
				to="blue-900"
			/>
			<Project
				link="https://www.ansmann.tech"
				domain="ansmann.tech"
				technologies="Next.js, Tailwind CSS"
				from="#b2ef91"
				to="#fa9372"
			/>
			<Project
				link="https://www.zimmerfrei-bonn.de"
				domain="zimmerfrei-bonn.de"
				technologies="Next.js, Tailwind CSS, Node.js, Fastify, Knex, PostgreSQL"
				from="#b2ef91"
				to="#fa9372"
			/>
			<Project
				link="https://www.mediaatrium.de"
				domain="mediaatrium.de"
				technologies="Next.js"
				from="#b2ef91"
				to="#fa9372"
			/>
			<div className="rounded-xl bg-gradient-to-r p-0.3 from-violet-600 to-[#f8acff]">
				<div className="bg-gray rounded-lg p-2 text-center h-full">
					<h4>zahnarzt-herti.ch</h4>
					<p>Next.js, Tailwind CSS, Localization</p>
				</div>
			</div>
			<div className="rounded-xl bg-gradient-to-r p-0.3 from-[#f13c77] to-[#f5e6ad]">
				<div className="bg-gray rounded-lg p-2 text-center h-full">
					<h4>genusswerkstatt-rothenbuch.de</h4>
					<p>Next.js, Tailwind CSS</p>
				</div>
			</div>
			<div className="rounded-xl bg-gradient-to-r p-0.3 from-[#1dbde6] to-[#f1515e]">
				<div className="bg-gray rounded-lg p-2 text-center h-full">
					<h4>silas-schmitt.de</h4>
					<p>Next.js, Tailwind CSS, AWS SES</p>
				</div>
			</div>
			<div className="rounded-xl bg-gradient-to-r p-0.3 from-[#fffbaf] to-[#ab2aed]">
				<div className="bg-gray rounded-lg p-2 text-center h-full">
					<h4>www.sfn-neumann.de</h4>
					<p>Next.js, SCSS, Framer Motion</p>
				</div>
			</div>
			<div className="rounded-xl bg-gradient-to-r p-0.3 from-[#b6f3c9] to-[#4766f4]">
				<div className="bg-gray rounded-lg p-2 text-center h-full">
					<h4>www.cube-manufacture.de</h4>
					<p>Nuxt.js, SCSS</p>
				</div>
			</div>
			<div className="rounded-xl bg-gradient-to-r p-0.3 from-[#83f5e5] to-[#e761bd]">
				<div className="bg-gray rounded-lg p-2 text-center h-full">
					<h4>www.breemo.de</h4>
					<p>Nuxt.js, Strapi, Snipcart</p>
				</div>
			</div>
			<div className="rounded-xl bg-gradient-to-r p-0.3 from-[#f9cdc3] to-[#facefb]">
				<div className="bg-gray rounded-lg p-2 text-center h-full">
					<h4>www.freakademy.net</h4>
					<p>Next.js, Framer Motion</p>
				</div>
			</div>
			<div className="rounded-xl bg-gradient-to-r p-0.3 from-[#f292ed] to-[#f36364]">
				<div className="bg-gray rounded-lg p-2 text-center h-full">
					<h4>www.mr-werk-iserlohn.de</h4>
					<p>Nuxt.js</p>
				</div>
			</div>
			<div className="rounded-xl bg-gradient-to-r p-0.3 from-[#9491e2] to-[#aff2d8]">
				<div className="bg-gray rounded-lg p-2 text-center h-full">
					<h4>www.sixthreeway.de</h4>
					<p>Next.js, Strapi</p>
				</div>
			</div>
		</div>
	</>
);
export default Projects;
