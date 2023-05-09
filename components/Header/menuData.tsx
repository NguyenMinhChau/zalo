import routers from '../../routers/routers';
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
				path: routers.about,
				newTab: false,
			},
			{
				id: 12,
				title: 'Parties',
				path: routers.parties,
				newTab: false,
			},
			{
				id: 13,
				title: 'Gallery',
				path: routers.gallery,
				newTab: false,
			},
			{
				id: 14,
				title: 'Video',
				path: routers.video,
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
				path: routers.sponsers,
				newTab: false,
			},
			{
				id: 22,
				title: 'Exhibitor',
				path: routers.exhibitor,
				newTab: false,
			},
			{
				id: 23,
				title: 'Media Partners',
				path: routers.mediaPartners,
				newTab: false,
			},
			{
				id: 24,
				title: 'Attendees',
				path: routers.attendess,
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
				path: routers.agenda,
				newTab: false,
			},
			{
				id: 32,
				title: 'Speakers',
				path: routers.speakers,
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
				path: routers.floorplan,
				newTab: false,
			},
			{
				id: 42,
				title: 'FAQ',
				path: routers.faq,
				newTab: false,
			},
			{
				id: 43,
				title: 'Venue',
				path: routers.venue,
				newTab: false,
			},
			{
				id: 44,
				title: 'Transportation',
				path: routers.transportation,
				newTab: false,
			},
			{
				id: 45,
				title: 'Accommodation',
				path: routers.accommodation,
				newTab: false,
			},
			{
				id: 46,
				title: 'Contact us',
				path: routers.contact,
				newTab: false,
			},
		],
	},
];
export default menuData;
