import routers from '../../routers/routers';
import { Menu } from '../../types/menu';

const menuData: Menu[] = [
	{
		id: 1,
		title: 'Home',
		newTab: false,
		submenu: [
			{
				id: 11,
				title: 'About us',
				path: routers.aboutUs,
				newTab: false,
			},
			{
				id: 12,
				title: 'Products',
				path: routers.products,
				newTab: false,
			},
			{
				id: 13,
				title: 'Contact us',
				newTab: false,
				path: routers.contactUs,
			},
		],
	},
	{
		id: 2,
		title: 'Technologies',
		newTab: false,
		submenu: [
			{
				id: 21,
				title: 'Computer Vision',
				path: routers.computerVision,
				newTab: false,
			},
			{
				id: 22,
				title: 'Speed Processing',
				path: routers.speedProcessing,
				newTab: false,
			},
			{
				id: 23,
				title: 'Natural Language Processing',
				path: routers.naturalLanguageProcessing,
				newTab: false,
			},
			{
				id: 24,
				title: 'Data Mining',
				path: routers.dataMining,
				newTab: false,
			},
		],
	},
	{
		id: 3,
		title: 'Products',
		newTab: false,
		submenu: [
			{
				id: 31,
				title: 'Experiments Project',
				path: routers.experimentsProject,
				newTab: false,
			},
		],
	},
	{
		id: 4,
		title: 'Pricing',
		newTab: false,
		path: routers.pricing,
	},
];
export default menuData;
