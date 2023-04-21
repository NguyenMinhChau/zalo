import { Breadcrumb, SkeletonCP } from '../../../../components';

const PartiesPage = () => {
	return (
		<>
			<Breadcrumb pageName="Discover → Parties" description="Parties" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default PartiesPage;
