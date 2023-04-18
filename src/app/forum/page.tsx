import { Breadcrumb } from '../../../components';

const ForumPage = () => {
	return (
		<>
			<Breadcrumb pageName="Forum" description="Forum" />
			<div className="container mb-5">
				<p className="text-center text-lg font-bold">
					This is forum page
				</p>
			</div>
		</>
	);
};

export default ForumPage;
