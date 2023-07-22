import { Inter } from 'next/font/google';
import {
	Hero,
	TechnologiesCP,
	ProductsCP,
	TellMeMoreCP,
} from '../../components';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className={`${styles.image_bgc} pb-3`}>
			<Hero />
			<TechnologiesCP />
			<ProductsCP />
			<TellMeMoreCP />
		</div>
	);
}
