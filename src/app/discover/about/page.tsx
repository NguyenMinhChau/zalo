import { Breadcrumb, SkeletonCP } from '../../../../components';

const AboutPage = () => {
	return (
		<>
			<Breadcrumb pageName="Discover → About" description="About" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default AboutPage;
