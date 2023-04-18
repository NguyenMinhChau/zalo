import { Breadcrumb } from '../../../components';

const EmployeePage = () => {
	return (
		<>
			<Breadcrumb pageName="Employee" description="Employee" />
			<div className="container mb-5">
				<p className="text-center text-lg font-bold">
					This is employee page
				</p>
			</div>
		</>
	);
};

export default EmployeePage;
