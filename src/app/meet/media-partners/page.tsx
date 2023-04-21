import { Breadcrumb, SkeletonCP } from '../../../../components';

const MediaPartnersPage = () => {
	return (
		<>
			<Breadcrumb
				pageName="Meet → Media Partners"
				description="Media Partners"
			/>
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default MediaPartnersPage;
