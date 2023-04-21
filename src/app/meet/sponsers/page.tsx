import { Breadcrumb, SkeletonCP } from '../../../../components';

const SponsersPage = () => {
	return (
		<>
			<Breadcrumb pageName="Meet → Sponsers" description="Sponsers" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default SponsersPage;
