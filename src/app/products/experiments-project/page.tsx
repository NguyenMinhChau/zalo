import {
	ExperimentsCP,
	GetAPICP,
	Hero,
	ProductsCP,
	TechnologiesCP,
	TellMeMoreCP,
} from '../../../../components';

const ExperimentsProjectPage = () => {
	return (
		<>
			<Hero />
			<div className="container my-5">
				<TechnologiesCP />
				<ProductsCP />
				<TellMeMoreCP />
				<ExperimentsCP />
				<GetAPICP />
			</div>
		</>
	);
};

export default ExperimentsProjectPage;
