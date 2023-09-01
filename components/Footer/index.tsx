import Image from 'next/image';
import Link from 'next/link';
import LogoLight from '../../public/images/logo/logo_light_01.png';
import routers from '../../routers/routers';

const Footer = () => {
	return (
		<>
			<div className="w-full bg-[#fff] flex justify-center items-center">
				<div className="p-2 flex flex-col container px-[69px] gap-3 lg:flex-row md:flex-row justify-between lg:items-start items-center">
					<div className="flex flex-col gap-3 lg:items-start items-center justify-center flex-[3]">
						<Link href={routers.home} className="inline-block w-48">
							<Image
								src={LogoLight}
								alt="logo"
								className="hidden w-full dark:block"
							/>
						</Link>
						<div className="text-[#000] text-[12px] text-left leading-5">
							Copyright © 2023 Megaboom. All Rights Reserved. All
							trademarks referenced herein are the properties of
							their respective owners.
						</div>
					</div>
					<div className="flex flex-[6] flex-col gap-1 items-center justify-center">
						<p className="text-[#000] font-bold text-[16px]">
							Megaboom Company Limited
						</p>
						<p className="text-[#000]">
							Hotline:{' '}
							<a
								rel="nofollow noopener"
								className="text-primary font-bold"
								href="tel:1900001234"
							>
								1900 001234
							</a>
						</p>
						<p className="text-[#000]">
							Email:{' '}
							<a
								rel="nofollow noopener"
								className="text-primary font-bold"
								href="mailto:info@megaboom.com.vn"
							>
								info@megaboom.com.vn
							</a>
						</p>
						<p className="text-[#000] text-center">
							Office: May Plaza, 65D Vo Van Tan Str., D.3, HCMC
						</p>
					</div>
					<div className="flex flex-col gap-2 lg:items-center items-start justify-center flex-[1] md:flex-[2]">
						<div className="flex flex-col items-start gap-1">
							<p className="text-center text-base font-bold text-[#000] ">
								Explore
							</p>
							<Link
								href={routers.home}
								className="inline-block text-[14px] text-[#000]"
							>
								Home
							</Link>
							<Link
								href={routers.aboutUs}
								className="inline-block text-[14px] text-[#000]"
							>
								About us
							</Link>
							<Link
								href={routers.products}
								className="inline-block text-[14px] text-[#000]"
							>
								Products
							</Link>
							<Link
								href={routers.contactUs}
								className="inline-block text-[14px] text-[#000]"
							>
								Contact us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
