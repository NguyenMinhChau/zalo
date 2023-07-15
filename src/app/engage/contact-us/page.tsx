import { Hero, SkeletonCP } from '../../../../components';

const ContactUsPage = () => {
	return (
		<>
			{/* <Breadcrumb
				pageName="Engage → Contact us"
				description="Contact us"
			/> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default ContactUsPage;
