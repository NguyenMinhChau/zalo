import { Hero, SkeletonCP } from '../../../../components';

const FAQPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Engage → FAQ" description="FAQ" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default FAQPage;
