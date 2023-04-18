import { Inter } from 'next/font/google';
import { Hero, ScrollToTop } from '../../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<ScrollToTop />
			<Hero />
		</>
	);
}
