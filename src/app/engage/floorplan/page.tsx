import { Breadcrumb, SkeletonCP } from '../../../../components';

const FloorPlanPage = () => {
	return (
		<>
			<Breadcrumb pageName="Engage → Floorplan" description="Floorplan" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default FloorPlanPage;
