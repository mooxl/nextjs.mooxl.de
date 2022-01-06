import Image from 'next/image';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import { dumpster } from '../utils/images';

const Index = () => (
	<div className="h-screen flex flex-col justify-center items-center">
		<div className="w-lg">
			<Image src={dumpster} alt={'dumpster'} priority />
		</div>
		<Title />
		<Subtitle />
	</div>
);

export default Index;
