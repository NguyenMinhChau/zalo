import { Breadcrumb, SkeletonCP } from '../../../../components';

const GalleryPage = () => {
	return (
		<>
			<Breadcrumb pageName="Discover → Gallery" description="Gallery" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default GalleryPage;
