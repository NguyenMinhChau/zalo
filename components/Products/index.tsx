'use client';
import React from 'react';
import { styled } from '@mui/material';
import Image01 from '../../public/images/products/image_01.png';
import Image02 from '../../public/images/products/image_02.png';
import Image03 from '../../public/images/products/image_03.png';
import Image from 'next/image';
import Link from 'next/link';
import ProductItem from './ProductItem';
import routers from '../../routers/routers';

type ItemStylesContainerType = {
	theme?: any;
	cols?: any;
	spacing?: string;
};

const ItemStylesContainer: any = styled('div')(
	({ theme, cols, spacing }: ItemStylesContainerType) => ({
		display: 'flex',
		flexWrap: 'wrap',
		[theme.breakpoints.up('xs')]: {
			justifyContent: 'center',
		},
		// Tablet
		[theme.breakpoints.between('sm', 'md')]: {
			justifyContent: 'space-between',
		},
		// PC
		[theme.breakpoints.up('lg')]: {
			justifyContent: 'space-between',
		},
		[theme.breakpoints.between('md', 'lg')]: {
			justifyContent: 'space-between',
		},
		gap: '16px',
		width: '100%',
		height: '100%',
		'& .item_content': {
			// mobile
			[theme.breakpoints.up('xs')]: {
				// flex: `1 1 calc((100% / 1) - (${spacing} * 2))`,
				width: `calc((100% / 1) - (${spacing} * 2))`,
			},
			// Tablet
			[theme.breakpoints.between('sm', 'md')]: {
				// flex: `1 1 calc((100% / 2) - (${spacing} * 2))`,
				width: `calc((100% / 2) - (${spacing} * 2))`,
			},
			// PC
			[theme.breakpoints.up('lg')]: {
				// flex: `1 1 calc((100% / ${cols}) - (${spacing} * 2))`,
				width: `calc((100% / ${cols}) - (${spacing} * 2))`,
			},
			[theme.breakpoints.between('md', 'lg')]: {
				width: '48%',
			},
			borderRadius: '8px',
			backgroundColor: '#fff',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			color: '#000',
			minHeight: '350px',
			overflow: 'hidden',
		},
	}),
);

export default function ProductsCP() {
	return (
		<div className="w-full h-full flex justify-center items-center py-[70px]">
			<div className="container lg:px-[69px] md:px-[50px]">
				<div className="font-bold text-[30px] lg:text-[45px] md:text-[35px] text-[#0142f8] mb-2">
					Products
				</div>
				<div className="text-[20px] mb-7 text-[#494949]">
					Empower the opportunities and connections
				</div>
				<ItemStylesContainer cols={3} spacing="8px">
					<ProductItem
						title="Ecological system"
						desc="Design the own system of communication channels to create qualified acquisition funnel"
						urlImage={Image01?.src}
						urlLink={routers.products}
					/>
					<ProductItem
						title="Branding services"
						desc="Connect reliable companies to customers and agency partners through offline/online events."
						urlImage={Image02?.src}
						urlLink={routers.products}
					/>
					<ProductItem
						title="Automated tools"
						desc="Develop automated support tools which help saving time transaction across platforms."
						urlImage={Image03?.src}
						urlLink={routers.products}
					/>
				</ItemStylesContainer>
			</div>
		</div>
	);
}
