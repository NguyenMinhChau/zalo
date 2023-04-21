import { Breadcrumb, SkeletonCP } from '../../../../components';

const ExhibitorPage = () => {
	return (
		<>
			<Breadcrumb pageName="Meet → Exhibitor" description="Exhibitor" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default ExhibitorPage;
