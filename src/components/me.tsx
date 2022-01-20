import Image from 'next/image';
import me from '../../public/pixels/me.jpg';

const Me = () => (
	<>
		<div className="flex md:flex-col justify-between gap-10 md:gap-y-3 items-center md:items-start">
			<div className="md:order-2">
				<h1>Max Schmidt</h1>
				<h2 className="my-1">Full Stack Web Developer</h2>
				<p>
					Gude! Ich bin am 29.01.1996 in Aschaffenburg geboren und bin dabei,
					das Internet schöner und schneller zu machen. <br /> Lebe demnächst in
					Köln-Ehrenfeld und studiere bald wieder in Aachen.
				</p>
			</div>
			<div className="rounded-full overflow-hidden w-15 flex-shrink-0 md:order-1">
				<Image src={me} placeholder="blur" alt="Bild von Max Schmidt" />
			</div>
		</div>
	</>
);
export default Me;
