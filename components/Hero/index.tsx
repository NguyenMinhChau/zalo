import Link from 'next/link';

const Hero = () => {
	return (
		<>
			<div className="relative z-10 h-0 pb-[600px] md:pt-[102px] md:pb-[400px] xl:pt-[500px] xl:pb-[160px]">
				<div className="absolute top-0 right-0 left-0 bottom-0">
					<div className="lg:px-[70px] md:px-[70px] px-[40px] w-full absolute top-[35%] flex flex-col gap-3">
						<div className="font-bold uppercase text-[20px] lg:text-[30px] md:text-[30px] text-white">
							ARTIFICIAL INTELLIGENCE
						</div>
						<div className="font-bold uppercase text-[20px] lg:text-[30px] md:text-[30px] text-white">
							FOR EVERYDAY LIFE.
						</div>
						<div className="font-medium text-[12px] lg:text-[18px] md:text-[18px] leading-6 text-white">
							At Zalo AI, we mainly focus on applied AI
						</div>
						<div className="font-medium text-[12px] lg:text-[18px] md:text-[18px] leading-6 text-white">
							that makes daily activities more convenient and
							easier.
						</div>
					</div>
					<video
						typeof="video/mp4"
						playsInline
						loop
						autoPlay
						className="w-full h-full object-fill"
					>
						<source
							src="https://stc-ai-developers.zdn.vn/videos/slide%20notext_1920x800_6.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
				{/* <video
					typeof="video/mp4"
					playsInline
					loop
					autoPlay
					className="w-full h-full absolute top-0 right-0 left-0 bottom-0 object-contain"
				>
					<source
						src="https://stc-ai-developers.zdn.vn/videos/slide%20notext_1920x800_6.mp4"
						type="video/mp4"
					/>
				</video> */}
			</div>
		</>
	);
};

export default Hero;
