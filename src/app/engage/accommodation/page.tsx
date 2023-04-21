import { Breadcrumb, SkeletonCP } from '../../../../components';

const AccommodationPage = () => {
	return (
		<>
			<Breadcrumb
				pageName="Engage → Accommodation"
				description="Accommodation"
			/>
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default AccommodationPage;
