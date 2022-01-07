import Link from 'next/link';

const Footer = () => (
	<div className="col-span-2 flex justify-between">
		<Link href="/impressum">
			<a>Impressum</a>
		</Link>
		<Link href="/Datenschutz">
			<a>Datenschutz</a>
		</Link>
	</div>
);
export default Footer;
