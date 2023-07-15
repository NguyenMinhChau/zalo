import { Hero, SkeletonCP } from '../../../../components';

const AccommodationPage = () => {
	return (
		<>
			{/* <Breadcrumb
				pageName="Engage → Accommodation"
				description="Accommodation"
			/> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default AccommodationPage;
