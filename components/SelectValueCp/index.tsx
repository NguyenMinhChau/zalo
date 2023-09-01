'use client';
import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.css';
import { useAppContext } from '../../helpers';
import { setData } from '../../appState/reducer';

const cx = className.bind(styles);

type SelectValueCpType = {
	label?: string;
	value?: any;
	placeholder?: string;
	data?: any;
	nameSet?: any;
	stateSelect?: boolean;
	setStateSelect?: any;
};

export default function SelectValueCp({
	label,
	value,
	placeholder,
	data,
	nameSet,
	stateSelect,
	setStateSelect,
}: SelectValueCpType) {
	const { dispatch } = useAppContext();
	return (
		<div className={`${cx('select_container')} mb-4`}>
			<div className={`${cx('select_label')}`}>{label}</div>
			<div
				className={`${cx('select_form_container')}`}
				onClick={() => setStateSelect(!stateSelect)}
			>
				<div
					className={`${cx('select_form_value')} ${
						value ? 'text-[#000]' : 'text-[#9ca3af]'
					} `}
				>
					{value ? value?.label : placeholder}
				</div>
				<div className={`${cx('select_form_icon')} w-[15px] h-[15px]`}>
					<i className="bx bx-chevron-down text-[#000]"></i>
				</div>
				{stateSelect && (
					<div className={`${cx('select_list')}`}>
						{data.map((item: any, index: number) => {
							return (
								<div
									key={index}
									className={`${cx('select_list_item')}`}
									onClick={() => {
										dispatch(
											setData({
												[nameSet]: item,
											}),
										);
										setStateSelect(false);
									}}
								>
									{item?.label}
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}
