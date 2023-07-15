import { Hero, SkeletonCP } from '../../../../components';

const SpeakersPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Discuss → Speakers" description="Speakers" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default SpeakersPage;
