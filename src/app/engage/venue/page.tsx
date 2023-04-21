import { Breadcrumb, SkeletonCP } from '../../../../components';

const VenuePage = () => {
	return (
		<>
			<Breadcrumb pageName="Engage → Venue" description="Venue" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default VenuePage;
