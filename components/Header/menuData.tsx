import { Menu } from '../../types/menu';

const menuData: Menu[] = [
	{
		id: 1,
		title: 'Discover',
		newTab: false,
		submenu: [
			{
				id: 11,
				title: 'About',
				path: '/discover/about',
				newTab: false,
			},
			{
				id: 12,
				title: 'Parties',
				path: '/discover/parties',
				newTab: false,
			},
			{
				id: 13,
				title: 'Gallery',
				path: '/discover/gallery',
				newTab: false,
			},
			{
				id: 14,
				title: 'Video',
				path: '/discover/video',
				newTab: false,
			},
		],
	},
	{
		id: 2,
		title: 'Meet',
		newTab: false,
		submenu: [
			{
				id: 21,
				title: 'Sponsers',
				path: '/meet/sponsers',
				newTab: false,
			},
			{
				id: 22,
				title: 'Exhibitor',
				path: '/meet/exhibitor',
				newTab: false,
			},
			{
				id: 23,
				title: 'Media Partners',
				path: '/meet/media-partners',
				newTab: false,
			},
			{
				id: 24,
				title: 'Attendees',
				path: '/meet/attendees',
				newTab: false,
			},
		],
	},
	{
		id: 3,
		title: 'Discuss',
		newTab: false,
		submenu: [
			{
				id: 31,
				title: 'Agenda',
				path: '/discuss/agenda',
				newTab: false,
			},
			{
				id: 32,
				title: 'Speakers',
				path: '/discuss/speakers',
				newTab: false,
			},
		],
	},
	{
		id: 4,
		title: 'Engage',
		newTab: false,
		submenu: [
			{
				id: 41,
				title: 'Floorplan',
				path: '/engage/floorplan',
				newTab: false,
			},
			{
				id: 42,
				title: 'FAQ',
				path: '/engage/faq',
				newTab: false,
			},
			{
				id: 43,
				title: 'Venue',
				path: '/engage/venue',
				newTab: false,
			},
			{
				id: 44,
				title: 'Transportation',
				path: '/engage/transportation',
				newTab: false,
			},
			{
				id: 45,
				title: 'Accommodation',
				path: '/engage/accommodation',
				newTab: false,
			},
			{
				id: 46,
				title: 'Contact us',
				path: '/engage/contact-us',
				newTab: false,
			},
		],
	},
];
export default menuData;
