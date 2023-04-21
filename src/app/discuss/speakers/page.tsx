import { Breadcrumb, SkeletonCP } from '../../../../components';

const SpeakersPage = () => {
	return (
		<>
			<Breadcrumb pageName="Discuss → Speakers" description="Speakers" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default SpeakersPage;
