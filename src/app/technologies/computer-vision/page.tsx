import { ExperimentsCP, HeroGeneral, SkeletonCP } from '../../../../components';
import ContentTwo from '../../../../components/ContentTwo';
import ImageComputerVision from '../../../../public/images/technologies/computer_vision.png';

const ComputerVisionPage = () => {
	return (
		<>
			<HeroGeneral title="Computer Vision" />
			<div className="container my-5">
				<ContentTwo
					urlImage={ImageComputerVision?.src}
					desc={[
						`At Zalo, we develop the zVision platform to understand information from digital images or videos to create a meaningful, clean and healthy Internet environment for Vietnamese.`,
						`The zVision platform is currently deployed at scale serving 60 million active Zalo users. It daily processes 40 million images and 400 thousand videos, featuring policy violating digital contents filters, user fraud detections, and meaningful memory feed suggestions.`,
						`As an Internet organization with ambition of using AI to impact life, Zalo has quickly developed specialized filters for emerging, sensitive and illegal digital contents. In particular, Zalo has created the “nine-dash line detector” to identify and flag the illegal nine-dash line in imported images and videos.`,
					]}
					descImage="Computer Vision"
				/>
				<ExperimentsCP />
			</div>
		</>
	);
};

export default ComputerVisionPage;
