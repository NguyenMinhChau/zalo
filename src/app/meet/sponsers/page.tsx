import { Hero, SkeletonCP } from '../../../../components';

const SponsersPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Meet → Sponsers" description="Sponsers" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default SponsersPage;
