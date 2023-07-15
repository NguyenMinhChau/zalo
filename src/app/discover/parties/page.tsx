import { Hero, SkeletonCP } from '../../../../components';

const PartiesPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Discover → Parties" description="Parties" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default PartiesPage;
