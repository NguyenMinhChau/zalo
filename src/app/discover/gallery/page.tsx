import { Breadcrumb } from '../../../../components';

const GalleryPage = () => {
	return (
		<>
			<Breadcrumb pageName="Discover → Gallery" description="Gallery" />
			<div className="container mb-5">
				<p className="text-center text-lg font-bold">
					This is discover/gallery page
				</p>
			</div>
		</>
	);
};

export default GalleryPage;
