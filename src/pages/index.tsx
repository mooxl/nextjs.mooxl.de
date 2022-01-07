import Me from '../components/me';
import Education from '../components/education';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
const Index = () => (
	<div className="max-w-xl my-5 mx-auto grid grid-cols-[min-content_auto] gap-x-5 gap-y-7">
		<Me />
		<Education />
		<Experience />
		<Skills />
		<Projects />
		<Contact />
		<div className="h-0.2 rounded-xl bg-gray-dark col-span-2" />
		<Footer />
	</div>
);

export default Index;
