import { Hero, SkeletonCP } from '../../../../components';

const VideoPage = () => {
	return (
		<>
			{/* <Breadcrumb pageName="Discover → Video" description="Video" /> */}
			<Hero />
			<div className="container my-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default VideoPage;
