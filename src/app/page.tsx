'use client';
import { Inter } from 'next/font/google';
import {
	Hero,
	CoreValueCP,
	ProductsCP,
	CTACP,
	OurLibraryCP,
	OurClientsCP,
} from '../../components';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Hero />
			<div className={`${styles.image_bgc}`}>
				<CoreValueCP />
				<ProductsCP />
				<CTACP />
				<OurLibraryCP />
				<OurClientsCP />
			</div>
		</>
	);
}
