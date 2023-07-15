import { Hero, SkeletonCP } from '../../../../components';

const MediaPartnersPage = () => {
	return (
		<>
			{/* <Breadcrumb
				pageName="Meet → Media Partners"
				description="Media Partners"
			/> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default MediaPartnersPage;
