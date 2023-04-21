import { Breadcrumb, SkeletonCP } from '../../../../components';

const AgendaPage = () => {
	return (
		<>
			<Breadcrumb pageName="Discuss → Agenda" description="Agenda" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default AgendaPage;
