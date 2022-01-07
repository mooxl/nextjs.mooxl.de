import Head from 'next/head';
import '../utils/globals.css';

const App = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>Max Schmidt - Full Stack Web Developer</title>
			<meta name="description" content="boilerplate" />
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<div className="max-w-xl my-5 mx-auto">
			<Component {...pageProps} />
		</div>
	</>
);
export default App;
