import { Breadcrumb } from '../../../../components';

const AboutPage = () => {
	return (
		<>
			<Breadcrumb pageName="Discover → About" description="About" />
			<div className="container mb-5">
				<p className="text-center text-lg font-bold">
					This is discover/about page
				</p>
			</div>
		</>
	);
};

export default AboutPage;
