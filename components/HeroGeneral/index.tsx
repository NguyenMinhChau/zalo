import Link from 'next/link';
import Image from 'next/image';
import HeroLogo from '../../public/images/discover/hero.png';

type HeroGeneralType = {
	title?: string;
	urlImage?: any;
};

const HeroGeneral = ({
	title = 'IFX EXPO',
	urlImage = HeroLogo?.src,
}: HeroGeneralType) => {
	return (
		<>
			<div className="relative z-10 h-0 pb-[600px] md:pt-[102px] md:pb-[400px] xl:pt-[500px] xl:pb-[160px]">
				<div className="absolute top-0 right-0 left-0 bottom-0">
					<div className="lg:px-[70px] md:px-[70px] px-[40px] absolute w-full flex flex-col gap-3 h-full items-center justify-center">
						<div className="font-bold uppercase text-[30px] lg:text-[30px] md:text-[30px] text-white">
							{title}
						</div>
					</div>
					<Image
						alt="image"
						src={urlImage}
						className="w-full h-full object-fill"
						width={100}
						height={100}
						sizes="fill"
					/>
				</div>
			</div>
		</>
	);
};

export default HeroGeneral;
