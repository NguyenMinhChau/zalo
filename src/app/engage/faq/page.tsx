import { Breadcrumb, SkeletonCP } from '../../../../components';

const FAQPage = () => {
	return (
		<>
			<Breadcrumb pageName="Engage → FAQ" description="FAQ" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default FAQPage;
