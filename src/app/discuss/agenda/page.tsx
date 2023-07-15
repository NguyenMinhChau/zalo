import { Hero, SkeletonCP } from '../../../../components';

const AgendaPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Discuss → Agenda" description="Agenda" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default AgendaPage;
