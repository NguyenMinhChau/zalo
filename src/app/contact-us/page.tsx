'use client';
import {
	Button,
	FormInput,
	HeroGeneral,
	SelectValueCp,
} from '../../../components';
import { TextareaAutosize } from '@mui/material';
import className from 'classnames/bind';
import styles from './styles.module.css';
import { useState } from 'react';
import { useAppContext } from '../../../helpers';
import { setData } from '../../../appState/reducer';

const cx = className.bind(styles);

const SpeedProcessingContactUsPage = () => {
	const { dispatch, state } = useAppContext();
	const { username, email, phone, purpose, content } = state.set;
	const [showSelect, setShowSelect] = useState(false);

	const handleChangeForm = (name: string, val: any) => {
		dispatch(
			setData({
				[name]: val,
			}),
		);
	};
	return (
		<>
			<HeroGeneral
				title="Contact us"
				desc={[
					`We love to hearing from you.<br/>Please fill out form, and we will get in touch shortly.`,
				]}
			/>
			<div className="w-full flex items-center justify-center py-[70px] lg:px-[69px] md:px-[50px] container">
				<div className={`${cx('form_container')}`}>
					<FormInput
						placeholder="Your full name"
						name="username"
						value={username}
						classNameInput={`${cx('input_custom')}`}
						onChange={(e) =>
							handleChangeForm('username', e.target.value)
						}
					/>
					<FormInput
						placeholder="Email"
						name="email"
						value={email}
						classNameInput={`${cx('input_custom')}`}
						onChange={(e) =>
							handleChangeForm('email', e.target.value)
						}
					/>

					<FormInput
						placeholder="Phone"
						name="phone"
						value={phone}
						classNameInput={`${cx('input_custom')}`}
						onChange={(e) =>
							handleChangeForm('phone', e.target.value)
						}
					/>
					<SelectValueCp
						value={purpose}
						placeholder="Purpose: Please choose one of the following here..."
						data={[
							{ value: 1, label: 'Option 1' },
							{ value: 2, label: 'Option 2' },
							{ value: 3, label: 'Option 3' },
						]}
						nameSet="purpose"
						stateSelect={showSelect}
						setStateSelect={setShowSelect}
					/>
					<TextareaAutosize
						minRows={5}
						maxRows={8}
						placeholder="Type your message here..."
						value={content}
						onChange={(e) => {
							handleChangeForm('content', e.target.value);
						}}
						name="content"
						className={`${cx('textarea')}`}
					/>
					<Button className={`${cx('btn')} confirmbgc`}>
						Submit
					</Button>
				</div>
			</div>
		</>
	);
};

export default SpeedProcessingContactUsPage;
