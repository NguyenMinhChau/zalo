import { Breadcrumb, SkeletonCP } from '../../../../components';

const AttendeesPage = () => {
	return (
		<>
			<Breadcrumb pageName="Meet → Attendees" description="Attendees" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default AttendeesPage;
