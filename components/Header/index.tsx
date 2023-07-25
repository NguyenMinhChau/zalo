'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import ThemeToggler from './ThemeToggler';
import menuData from './menuData';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import LogoDark from '../../public/images/logo/logo_dark.png';
import LogoZalo from '../../public/images/footer/zalo.png';
import ButtonAuthenMobile from './buttonAuthenMobile';
import routers from '../../routers/routers';
import { useAppContext } from '../../helpers';
import { Button } from '@mui/material';

const Header = () => {
	const { state } = useAppContext();
	const { currentUser } = state.set;
	// Navbar toggle
	const [navbarOpen, setNavbarOpen] = useState(false);
	const navbarToggleHandler = () => {
		setNavbarOpen(!navbarOpen);
	};

	// Sticky Navbar
	const [sticky, setSticky] = useState(false);
	const handleStickyNavbar = () => {
		if (window.scrollY >= 80) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleStickyNavbar);
	});

	// submenu handler
	const [openIndex, setOpenIndex] = useState(-1);
	const handleSubmenu = (index: number) => {
		if (openIndex === index) {
			setOpenIndex(-1);
		} else {
			setOpenIndex(index);
		}
	};
	const pathname = usePathname();
	const handleLogout = () => {};
	return (
		<>
			<header
				className={`header top-0 left-0 z-40 flex w-full items-center bg-[#020461] ${
					sticky
						? '!fixed !z-[9999] !bg-white shadow-sticky !transition'
						: 'absolute bg-[#020461]'
				}`}
			>
				<div className="container">
					<div className="relative -mx-4 flex items-center justify-between">
						<div className="w-60 max-w-full px-4 xl:mr-12">
							<Link
								href="/"
								className={`header-logo block w-full ${
									sticky ? 'py-5 lg:py-2' : 'py-8'
								} `}
							>
								{/* <Image
									src={LogoLight}
									alt="logo"
									width={140}
									height={30}
									className="w-full dark:hidden"
								/> */}
								<Image
									src={LogoDark}
									alt="logo"
									width={140}
									height={30}
									className="hidden w-full dark:block"
								/>
							</Link>
						</div>
						<div className="flex w-full items-center justify-between px-4">
							<div>
								<button
									onClick={navbarToggleHandler}
									id="navbarToggler"
									aria-label="Mobile Menu"
									className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
								>
									<span
										className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
											sticky ? 'bg-[#000]' : 'bg-white'
										} ${
											navbarOpen
												? ' top-[7px] rotate-45'
												: ' '
										}`}
									/>
									<span
										className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
											sticky ? 'bg-[#000]' : 'bg-white'
										} ${navbarOpen ? 'opacity-0 ' : ' '}`}
									/>
									<span
										className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
											sticky ? 'bg-[#000]' : 'bg-white'
										} ${
											navbarOpen
												? ' top-[-8px] -rotate-45'
												: ' '
										}`}
									/>
								</button>
								<nav
									id="navbarCollapse"
									className={`navbar overflow-auto lg:overflow-visible md:mr-[-2.8vh] md:ml-[-2.8vh] absolute right-0 z-30 bottom-0 left-0 top-[0] h-[100vh] lg:h-auto rounded border-[.5px] border-body-color/50 py-4 px-6 duration-300 dark:border-body-color/20 bg-white lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
										navbarOpen
											? 'visibility top-full opacity-100'
											: 'invisible top-[120%] opacity-0'
									}`}
								>
									<div className="flex items-start lg:hidden justify-between h-[15vh]">
										<Image
											src={LogoDark}
											alt="logo"
											width={200}
											height={100}
											className="hidden dark:block"
										/>
										<div
											className="text-[#000]"
											onClick={navbarToggleHandler}
										>
											<i className="fa-solid fa-xmark text-[40px]"></i>
										</div>
									</div>
									<div className="flex lg:hidden gap-2 items-center justify-between mb-4">
										<div className="flex-1 flex items-center gap-2">
											<Image
												src={LogoZalo}
												alt="logo"
												width={30}
												height={30}
												className="hidden dark:block rounded-[50%]"
											/>
											<div className="font-bold text-[#000] text-[16px] uppercase">
												IFX EXPO
											</div>
										</div>
										<div className="text-[#000]">
											<i className="fa-solid fa-angle-down text-[15px]"></i>
										</div>
									</div>
									<ul className="block lg:flex lg:space-x-12">
										{menuData.map((menuItem, index) => {
											const listPath =
												pathname.split('/');
											const classed = listPath.includes(
												menuItem.title.toLowerCase(),
											)
												? styles.active
												: '';
											return (
												<li
													key={menuItem.id}
													className="group relative"
												>
													{menuItem.path ? (
														<Link
															href={menuItem.path}
															className={`flex font-bold py-2 text-base ${
																sticky
																	? 'text-[#b3b3c7]'
																	: 'text-[#b3b3c7] lg:text-white'
															}  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 ${classed}`}
														>
															{menuItem.title}
														</Link>
													) : (
														<>
															<a
																onClick={() =>
																	handleSubmenu(
																		index,
																	)
																}
																className={`flex cursor-pointer items-center justify-between py-2 text-base ${
																	sticky
																		? 'text-[#b3b3c7]'
																		: 'text-[#b3b3c7] lg:text-white'
																} hover:text-dark transition-all duration-300 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 font-bold ${classed}`}
															>
																{menuItem.title}
																<span className="pl-2">
																	<svg
																		width="15"
																		height="14"
																		viewBox="0 0 15 14"
																	>
																		<path
																			d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
																			fill="currentColor"
																		/>
																	</svg>
																</span>
															</a>
															<div
																className={`submenu relative top-full left-0 rounded-[17px] bg-white transition-[top] duration-300 group-hover:opacity-[1] lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
																	openIndex ===
																	index
																		? 'block'
																		: 'hidden'
																}`}
															>
																{menuItem?.submenu?.map(
																	(
																		submenuItem: any,
																	) => (
																		<Link
																			href={
																				submenuItem.path!
																			}
																			onClick={() => {
																				setOpenIndex(
																					-1,
																				);
																				setNavbarOpen(
																					false,
																				);
																			}}
																			key={
																				submenuItem.id
																			}
																			className={`block rounded font-bold py-2.5 text-sm text-[#b3b3c7] hover:text-dark transition-all duration-300 ${
																				listPath[
																					listPath.length -
																						1
																				] ===
																					submenuItem.title.toLowerCase() &&
																				styles.active
																			} lg:px-3`}
																		>
																			{
																				submenuItem.title
																			}
																		</Link>
																	),
																)}
															</div>
														</>
													)}
												</li>
											);
										})}
									</ul>
									<div className="flex lg:hidden flex-col mb-auto h-[inherit] items-center justify-center w-full gap-3 mt-5">
										<Button
											variant="outlined"
											color="secondary"
											className="w-full"
										>
											Logout
										</Button>
										<div className="text-[#000]">
											Copyright ©{' '}
											<Link
												href="/"
												className="font-bold text-primary"
											>
												IFX EXPO
											</Link>
											. All rights reserved.
										</div>
									</div>
								</nav>
							</div>
							<div className="flex items-center justify-end pr-16 lg:pr-0">
								{!currentUser ? (
									<>
										<Link
											href={routers.signin}
											className={`hidden py-3 px-7 text-base font-bold ${
												sticky
													? 'text-dark'
													: 'text-white'
											} hover:opacity-70 md:block`}
										>
											Sign In
										</Link>
										<Link
											href={routers.singup}
											className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
										>
											Sign Up
										</Link>
									</>
								) : (
									<div
										onClick={handleLogout}
										className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9 cursor-pointer"
									>
										Sign Out
									</div>
								)}
								<div>
									<ButtonAuthenMobile />
								</div>
								{/* <div>
									<ThemeToggler />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
