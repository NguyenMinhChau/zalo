import { Hero, SkeletonCP } from '../../../../components';

const AboutPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Discover → About" description="About" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default AboutPage;
