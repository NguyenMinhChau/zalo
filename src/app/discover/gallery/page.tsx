import { Hero, SkeletonCP } from '../../../../components';

const GalleryPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Discover → Gallery" description="Gallery" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default GalleryPage;
