import { Inter } from 'next/font/google';
import {
	Hero,
	TechnologiesCP,
	ProductsCP,
	TellMeMoreCP,
	ExperimentsCP,
	GetAPICP,
} from '../../components';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Hero />
			<div className={`${styles.image_bgc} pb-3`}>
				<TechnologiesCP />
				<ProductsCP />
				<TellMeMoreCP />
				<ExperimentsCP />
				<GetAPICP />
			</div>
		</>
	);
}
