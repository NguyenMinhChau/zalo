import { Breadcrumb, SkeletonCP } from '../../../../components';

const ContactUsPage = () => {
	return (
		<>
			<Breadcrumb
				pageName="Engage → Contact us"
				description="Contact us"
			/>
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default ContactUsPage;
