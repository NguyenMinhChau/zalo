import { Breadcrumb, SkeletonCP } from '../../../../components';

const TransportationPage = () => {
	return (
		<>
			<Breadcrumb
				pageName="Engage → Transportation"
				description="Transportation"
			/>
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default TransportationPage;
