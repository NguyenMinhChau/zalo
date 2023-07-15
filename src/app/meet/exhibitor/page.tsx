import { Hero, SkeletonCP } from '../../../../components';

const ExhibitorPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Meet → Exhibitor" description="Exhibitor" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default ExhibitorPage;
