import Image from 'next/image';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

const Index = () => (
	<div className="h-screen flex flex-col justify-center items-center">
		<Image
			src={'/pixels/dumpster.gif'}
			width={100}
			height={100}
			alt={'dumpster'}
			priority
		/>
		<Title />
		<Subtitle />
	</div>
);

export default Index;
