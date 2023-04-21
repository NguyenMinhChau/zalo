import { Breadcrumb, SkeletonCP } from '../../../../components';

const VideoPage = () => {
	return (
		<>
			<Breadcrumb pageName="Discover → Video" description="Video" />
			<div className="container mb-5">
				<SkeletonCP />
			</div>
		</>
	);
};

export default VideoPage;
