import { Hero, SkeletonCP } from '../../../../components';

const TransportationPage = () => {
	return (
		<>
			{/* <Breadcrumb
				pageName="Engage → Transportation"
				description="Transportation"
			/> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default TransportationPage;
