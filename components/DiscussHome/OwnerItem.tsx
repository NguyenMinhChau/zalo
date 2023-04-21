import Image from 'next/image';
import React from 'react';
import styles from './styles..module.css';
import { OwnerItemType } from '../../types/ownerItem';
function OwnerItem({
	imageUrl,
	nameOwner,
	positionOwner,
	companyOwner,
}: OwnerItemType) {
	return (
		<div className={`w-1/2 lg:w-1/5 sm:w-1/3 ${styles.card_owner_hover}`}>
			<div className="w-full h-full relative">
				<Image
					src={imageUrl}
					alt="image"
					className="w-full h-full"
					style={{ minHeight: '355px' }}
				/>
				<div
					className={`p-3 absolute top-0 bottom-0 right-0 left-0 flex-col items-center justify-center dark:bg-opacity-50 bg-dark ${styles.card_hide}`}
				>
					<h1 className="text-2xl font-bold text-center">
						{nameOwner}
					</h1>
					<p className="mb-5 text-center">{positionOwner}</p>
					<p className="text-center">{companyOwner}</p>
				</div>
			</div>
		</div>
	);
}

export default OwnerItem;
