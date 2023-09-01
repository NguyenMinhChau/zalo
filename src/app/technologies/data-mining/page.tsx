import { OurLibraryCP, HeroGeneral } from '../../../../components';
import ContentTwo from '../../../../components/ContentTwo';
import HeroDataMining from '../../../../public/images/discover/data_mining.png';
import ImageDataMining from '../../../../public/images/technologies/data_mining.png';

const DataMiningPage = () => {
	return (
		<>
			<HeroGeneral title="Data Mining" urlImage={HeroDataMining?.src} />
			<div className="container">
				<ContentTwo
					urlImage={ImageDataMining?.src}
					desc={[
						`Data Mining refers to the process of discovering information or insights from unstructured and large amount of data for proper actions. Combined with big data, they result in classification, prediction, recommendation with high level of accuracy.`,
						`At Zalo AI, Big data and Data Mining systems connect the whole database of Zalo ecosystem to empower the recommendation system. Focus on big data and scalable machine learning such as reinforcement recommendation system, deep learning, Zalo AI expects to satisfy every single demand on reading news or streaming music.`,
						`In addition, Data Mining supports targeting advertising based on big data and already proved its efficiency in different areas such as e-Commerce, Fintech…Offering suggestions accordingly to customer interest, increasing native experience and improving the productivity of marketing campaigns while protecting user privacy are the goals our studies aiming at.`,
					]}
					descImage="Data Mining"
				/>
				<OurLibraryCP />
			</div>
		</>
	);
};

export default DataMiningPage;
