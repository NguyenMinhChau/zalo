import Image from 'next/image';
import Link from 'next/link';
import LogoDark from '../../public/images/logo/logo_dark.png';
import Zalo from '../../public/images/footer/zalo.png';

const Footer = () => {
	return (
		<>
			<div className="bg-[#01002e] p-2 flex justify-between items-center">
				<div className="lg:flex md:flex items-center justify-center hidden">
					<Link href="/" className="inline-block w-48">
						<Image
							src={LogoDark}
							alt="logo"
							className="hidden w-full dark:block"
						/>
					</Link>
				</div>
				<div className="flex flex-1 flex-col gap-1 items-center justify-center">
					<p>
						Contact us:{' '}
						<a
							rel="nofollow noopener"
							className="text-primary font-bold"
							href="mailto:support@gmail.com"
						>
							support@gmail.com
						</a>
					</p>
					<p className="text-center text-base text-white ">
						Copyright © {new Date().getFullYear()}{' '}
						<a
							className="text-primary font-bold"
							href="/"
							rel="nofollow noopener"
						>
							IFX EXPO
						</a>
						. All rights reserved.
					</p>
				</div>
				<div className="lg:flex md:flex hidden gap-2 items-center justify-center mr-16">
					<p className="text-center text-base text-white ">Share:</p>
					<Link href="/" className="inline-block">
						<i className="fa-brands fa-facebook text-[20px]"></i>
					</Link>
					<Link href="/" className="inline-block w-[25px]">
						<Image
							src={Zalo}
							alt="zalo"
							className="hidden w-full dark:block"
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
