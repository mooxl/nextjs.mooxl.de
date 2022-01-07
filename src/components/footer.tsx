import Link from 'next/link';
import Image from 'next/image';
import github from '../../public/pixels/github.png';

const Footer = () => (
	<div className="col-span-2 lg:col-span-1 flex items-center justify-between">
		<Link href="/impressum">
			<a>Impressum</a>
		</Link>
		<a className="relative w-3" href="https://github.com/mooxl" target="_blank">
			<Image src={github} />
		</a>
		<Link href="/datenschutz">
			<a>Datenschutz</a>
		</Link>
	</div>
);
export default Footer;
