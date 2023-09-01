'use client';
import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.css';

const cx = className.bind(styles);

type ContentOneType = {
	textVerticle?: string;
	title?: any;
	desc?: any;
	btnText?: string;
	urlImage?: any;
	descImage?: string;
	children?: React.ReactNode;
};

export default function ContentOne({
	textVerticle,
	title,
	desc = [],
	urlImage,
	children,
	descImage,
}: ContentOneType) {
	return (
		<div
			className={`${cx(
				'content-container',
			)} container py-[70px] lg:px-[69px!important] md:px-[50px!important] lg:flex-row md:flex-row flex-col-reverse`}
		>
			<div
				className={`${cx(
					'content-left',
				)} lg:w-[80%] md:w-[100%] w-[100%]`}
			>
				{textVerticle && (
					<div className={`${cx('left')}`}>{textVerticle}</div>
				)}
				<div className={`${cx('middle')}`}>
					{title && (
						<div className={`${cx('middle_title')} mb12`}>
							<div
								className={`${cx('title')}`}
								dangerouslySetInnerHTML={{ __html: title }}
							></div>
						</div>
					)}
					<div className={`${cx('middle_desc')}`}>
						{desc.map((item: any, index: any) => (
							<div
								className={`${cx(
									'middle_desc_text',
								)} text-[#000]`}
								key={index}
								dangerouslySetInnerHTML={{ __html: item }}
							></div>
						))}
						{children}
					</div>
				</div>
			</div>
			<div
				className={`${cx(
					'content-right',
				)} flex flex-col lg:items-start items-center justify-start lg:w-[20%] md:w-[100%] w-[100%]`}
			>
				<div
					className={`${cx('right_img')}`}
					style={{
						backgroundImage: `url('${urlImage}')`,
					}}
				></div>
				{descImage && (
					<div className="font-bold text-[30px] text-black">
						{descImage}
					</div>
				)}
			</div>
		</div>
	);
}
