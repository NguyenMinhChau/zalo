import Link from 'next/link';

type HeroType = {
	titleOne?: string;
	titleTwo?: string;
	descOne?: string;
	descTwo?: string;
	urlVideo?: string;
};

const Hero = ({
	titleOne = 'ARTIFICIAL INTELLIGENCE',
	titleTwo = 'FOR EVERYDAY LIFE.',
	descOne = 'At Zalo AI, we mainly focus on applied AI',
	descTwo = 'that makes daily activities more convenient and easier.',
	urlVideo = 'https://stc-ai-developers.zdn.vn/videos/slide%20notext_1920x800_6.mp4',
}: HeroType) => {
	return (
		<>
			<div className="relative z-10 h-0 pb-[600px] md:pt-[102px] md:pb-[400px] xl:pt-[500px] xl:pb-[160px]">
				<div className="absolute w-full top-0 right-0 left-0 bottom-0">
					<div className="w-full absolute top-[35%] flex justify-center items-center">
						<div className="container flex flex-col gap-3 ">
							<div className="font-bold uppercase text-[20px] lg:text-[30px] md:text-[30px] text-white">
								{titleOne}
							</div>
							<div className="font-bold uppercase text-[20px] lg:text-[30px] md:text-[30px] text-white">
								{titleTwo}
							</div>
							<div className="font-medium text-[12px] lg:text-[18px] md:text-[18px] leading-6 text-white">
								{descOne}
							</div>
							<div className="font-medium text-[12px] lg:text-[18px] md:text-[18px] leading-6 text-white">
								{descTwo}
							</div>
						</div>
					</div>
					<video
						typeof="video/mp4"
						playsInline
						loop
						autoPlay
						className="w-full h-full object-fill"
					>
						<source src={urlVideo} type="video/mp4" />
					</video>
				</div>
			</div>
		</>
	);
};

export default Hero;
