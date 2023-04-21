'use client';
import React from 'react';
import { Skeleton } from '@mui/material';
const Fade = require('react-reveal/Fade');
import styles from './styles.module.css';

function SkeletonCP() {
	return (
		<Fade>
			<div className="flex flex-col lg:flex-row sm:flex-col xs:flex-col w-full">
				<div className="flex flex-col mb-3 w-full lg:w-1/2 sm:w-full xs:w-full lg:mr-2 xs:mb-3">
					<Skeleton
						width="100%"
						className={`${styles.bgc}`}
					></Skeleton>
					<Skeleton
						width="30%"
						className={`${styles.bgc}`}
					></Skeleton>
					<Skeleton
						variant="rectangular"
						width="100%"
						height={'150px'}
						className={`${styles.bgc}`}
					></Skeleton>
				</div>
				<div className="flex flex-col w-full lg:w-1/2 sm:w-full xs:w-full lg:ml-2">
					<Skeleton
						variant="rectangular"
						width="100%"
						height={'200px'}
						className={`${styles.bgc}`}
					></Skeleton>
				</div>
			</div>
		</Fade>
	);
}

export default SkeletonCP;
