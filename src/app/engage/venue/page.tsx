import { Hero, SkeletonCP } from '../../../../components';

const VenuePage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Engage → Venue" description="Venue" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default VenuePage;
