import Image from 'next/image';
import me from '../../public/pixels/me.jpg';

const Me = () => (
	<>
		<div></div>
		<div className="flex justify-between gap-10 items-center">
			<div>
				<h1>Max Schmidt</h1>
				<h2 className="my-1">Full Stack Web Developer</h2>
				<p>
					Gude! Ich bin am 29.01.1996 in Aschaffenburg geboren und versuche
					seitdem, das Internet schöner und schneller zu machen. <br /> Lebe in
					Köln und studiere bald in Aachen.
				</p>
			</div>
			<div className="rounded-full overflow-hidden w-15 flex-shrink-0">
				<Image src={me} placeholder="blur" />
			</div>
			<div className="hidden">
				<a href="mailto:me@maxschmidt.dev" target="_blank">
					me@maxschmidt.dev
				</a>
				<br />
				<a href="tel:+4915901766787" target="_blank">
					+49 159 0176 6787
				</a>
				<br />
				<a href="https://goo.gl/maps/PPPwLmj81DWFhnsL8" target="_blank">
					52064 Aachen
				</a>
			</div>
		</div>
	</>
);
export default Me;
