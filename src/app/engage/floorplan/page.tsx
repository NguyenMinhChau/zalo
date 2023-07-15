import { Hero, SkeletonCP } from '../../../../components';

const FloorPlanPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Engage → Floorplan" description="Floorplan" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default FloorPlanPage;
