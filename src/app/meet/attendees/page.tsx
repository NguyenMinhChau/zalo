import { Hero, SkeletonCP } from '../../../../components';

const AttendeesPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Meet → Attendees" description="Attendees" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default AttendeesPage;
