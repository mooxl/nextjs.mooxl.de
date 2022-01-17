import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Menu = () => {
	const [dark, setDark] = useState(true);
	useEffect(() => {
		dark
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}, [dark]);
	return (
		<>
			<div></div>
			<div className="flex justify-end gap-x-5 -mb-5 lg:mb-5 md:-mb-5">
				<Link href="/Lebenslauf.pdf">
					<motion.a
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group">
						<svg
							className="w-full h-full fill-gray-light group-hover:fill-white transition-colors duration-150 "
							width="24"
							height="24"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M7 18H17V16H7V18Z" />
							<path d="M17 14H7V12H17V14Z" />
							<path d="M7 10H11V8H7V10Z" />
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
							/>
						</svg>
					</motion.a>
				</Link>
				{/* <div
					className="h-5 w-5 bg-gray-dark rounded-xl"
					onClick={() => {
						setDark(!dark);
					}}></div> */}
			</div>
		</>
	);
};
export default Menu;
