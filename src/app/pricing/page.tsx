'use client';
import { Hero } from '../../../components';
import { Button, styled } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

type ItemStylesContainerType = {
	theme?: any;
	cols?: any;
	spacing?: string;
};

const ItemStylesContainer: any = styled('div')(
	({ theme, cols, spacing }: ItemStylesContainerType) => ({
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: '16px',
		width: '100%',
		height: '100%',
		marginTop: '24px',
		'& .item_content': {
			// mobile
			[theme.breakpoints.up('xs')]: {
				width: `calc((100% / 1) - (${spacing} * 2))`,
			},
			// Tablet
			[theme.breakpoints.between('sm', 'md')]: {
				width: `calc((100% / 2) - (${spacing} * 2))`,
			},
			// PC
			[theme.breakpoints.up('lg')]: {
				width: `calc((100% / ${cols}) - (${spacing} * 2))`,
			},
			borderRadius: '8px',
			backgroundColor: '#fff',
			color: '#000',
			minHeight: '270px',
			overflow: 'hidden',
			padding: '24px 20px',
		},
	}),
);

// pricing#short-term

const PricingPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Meet → Sponsers" description="Sponsers" /> */}
			<Hero
				titleOne="HIGH QUALITY SERVICE"
				titleTwo="FOR COMPETITIVE PRICE"
				descOne="Low latency and high quality Text-to-speech service"
				descTwo="Checkout our price plan below"
			/>
			<div className="container my-5">
				<div className="flex flex-col">
					<div className="font-bold text-[30px] text-black">
						SHORT-TERM PLAN
					</div>
					<div className="font-medium text-[18px] leading-6 text-black">
						Low latency and high quality Text-to-speech service
					</div>
					<ItemStylesContainer cols={4} spacing="8px">
						{[1, 2, 3, 4, 5].map((item, _idx) => {
							return (
								<div
									className="item_content shadow-md"
									key={_idx}
								>
									<div className="flex flex-col items-center justify-center mb-3">
										<div className="font-bold text-[30px] mb-3 text-[#000]">
											TTS_600
										</div>
										<div className="font-bold text-[30px] text-[green]">
											600.000 đ
										</div>
										<Button className="bg-primary my-3 border border-white rounded-md p-2 text-white hover:bg-primary hover:text-white">
											Choose plan
										</Button>
									</div>
									<div className="flex flex-col gap-2">
										<div className="text-[gray] text-[16px]">
											TTS100, better offers:
										</div>
										<ul className="list-none">
											<li className="text-[gray] text-[16px]">
												» 6 months + 2 extra
											</li>
											<li className="text-[gray] text-[16px]">
												» 2.400k char + 800k
											</li>
											<li className="text-[gray] text-[16px]">
												» 20k char/call on web
											</li>
											<li className="text-[gray] text-[16px]">
												» Download audio on web
											</li>
											<li className="text-[gray] text-[16px]">
												» Full tech support
											</li>
										</ul>
									</div>
								</div>
							);
						})}
					</ItemStylesContainer>
				</div>
				<div className="flex flex-col mt-5">
					<div className="font-bold text-[30px] text-black">
						FREQUENTLY ASKED QUESTIONS
					</div>
					<div className="w-full mt-3">
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography>How to purchase a plan?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className="text-[#000] text-[18px]">
									Please go to page{' '}
									<Link
										href="##"
										className="no-underline font-bold text-black"
									>
										Purchase a plan
									</Link>{' '}
									for detail instruction.
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography>
									What will happen if I’m out of quota in my
									current plan?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className="text-[#000] text-[18px]">
									If you are running out of quota in your
									current plan and want to continue using the
									TTS service, please consider purchasing
									another plan. The new plan quota will be
									added to your current quota. Please note
									that if the your current plan is expired,
									its quota will not be carried over.
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography>Can I change plan?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className="text-[#000] text-[18px]">
									You can purchase another plan anytime. Your
									new plan quota will be added to your current
									quota and the API expiration time will be
									reset to 30 days.
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography>
									I want another price plan?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className="text-[#000] text-[18px]">
									Please contact us at{' '}
									<Link
										href="mailto:support@gmail.com"
										className="no-underline font-bold text-black"
									>
										support@gmail.com
									</Link>{' '}
									for more information
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography>
									How can I download the generated audio?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className="text-[#000] text-[18px]">
									You can download generated audio using{' '}
									<Link
										href="##"
										className="no-underline font-bold text-black"
									>
										TTS API
									</Link>{' '}
									or if you are Paid plan member, you can
									download audio from web interface{' '}
									<Link
										href="##"
										className="no-underline font-bold text-black"
									>
										here
									</Link>
								</div>
							</AccordionDetails>
						</Accordion>
					</div>
				</div>
			</div>
		</>
	);
};

export default PricingPage;
