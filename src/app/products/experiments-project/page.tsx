'use client';
import {
	OurLibraryCP,
	OurClientsCP,
	Hero,
	ProductsCP,
	CoreValueCP,
	CTACP,
} from '../../../../components';

const ProductsPage = () => {
	return (
		<>
			<Hero />
			<div className="container">
				<CoreValueCP />
				<ProductsCP />
				<CTACP />
				<OurLibraryCP />
				<OurClientsCP />
			</div>
		</>
	);
};

export default ProductsPage;
