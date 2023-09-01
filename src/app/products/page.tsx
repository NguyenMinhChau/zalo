'use client';
import { CTACP, HeroGeneral } from '../../../components';
import ContentOne from '../../../components/ContentOne';
import ContentTwo from '../../../components/ContentTwo';
import ImageComputerVision from '../../../public/images/technologies/computer_vision.png';

const ProductsPage = () => {
	return (
		<>
			<HeroGeneral title="Opening" desc={[,]} />
			<div className="">
				<ContentTwo
					urlImage={ImageComputerVision?.src}
					desc={[`Branding service`]}
				/>
				<ContentOne
					urlImage={ImageComputerVision?.src}
					desc={[`Ecological systems`]}
				/>
				<ContentTwo
					urlImage={ImageComputerVision?.src}
					desc={[`Automated tools`]}
				/>
				<CTACP />
			</div>
		</>
	);
};

export default ProductsPage;
