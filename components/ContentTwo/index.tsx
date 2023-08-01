'use client';
import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.css';

const cx = className.bind(styles);
type ContentTwoType = {
	titleHeader?: string;
	title?: any;
	desc?: any;
	urlImage?: any;
	fontSizeTitle?: string;
	descImage?: string;
	styleImage?: any;
	children?: React.ReactNode;
};

export default function ContentTwo({
	titleHeader,
	title,
	desc = [],
	urlImage,
	children,
	descImage,
	fontSizeTitle,
	styleImage,
}: ContentTwoType) {
	return (
		<div className={`${cx('content-container')}`}>
			<div
				className={`${cx(
					'content-left',
				)} flex flex-col items-center justify-center`}
			>
				<div
					className={`${cx('left_img')}`}
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
			<div className={`${cx('content-right-container')}`}>
				{titleHeader && (
					<div className={`${cx('title-header')} mb12`}>
						{titleHeader}
					</div>
				)}
				<div className={`${cx('content-right')}`}>
					<div className={`${cx('middle')}`}>
						{title && (
							<div className={`${cx('middle_title')} mb12`}>
								<div
									style={{ fontSize: fontSizeTitle }}
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
			</div>
		</div>
	);
}
