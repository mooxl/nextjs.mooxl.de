import Head from 'next/head';
import Script from 'next/script';
import '../utils/globals.css';

const App = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>Max Schmidt - Full Stack Web Developer</title>
			<meta
				name="description"
				content="Full Stack Web Developer and TypeScript enthusiast"
			/>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<div className="max-w-xl my-5 mx-auto lg:mx-2">
			<Component {...pageProps} />
		</div>
		<Script
			async
			defer
			data-website-id="b0640587-09bf-4f40-8988-28afb264121c"
			src="https://umami.mediaatrium.de/umami.js"
		/>
	</>
);
export default App;
