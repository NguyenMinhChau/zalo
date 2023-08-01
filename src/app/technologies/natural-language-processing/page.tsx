import { ExperimentsCP, HeroGeneral } from '../../../../components';
import ContentTwo from '../../../../components/ContentTwo';
import HeroNatural from '../../../../public/images/discover/hero_natural.png';
import ImageNatural from '../../../../public/images/technologies/natural.png';

const NaturalLanguagePage = () => {
	return (
		<>
			<HeroGeneral
				title="Natural Language Processing"
				urlImage={HeroNatural?.src}
			/>
			<div className="container my-5">
				<ContentTwo
					urlImage={ImageNatural?.src}
					desc={[
						`NLP is a field of AI that gives the computer the ability to understand, interpret and manipulate human languages. Many Vietnamese NLP solutions have been developed for Zalo products such as: news classification and summarization in Báo Mới, spam and fraud detection in Zalo, next word prediction and auto-correction in Laban Key keyboard, etc..`,
						`Recently, we are focused on NLP tasks used for our voice assistant named Kiki. Currently Kiki is built in Zing MP3 app. Through Kiki, users can interact by voice to search and play songs. Users can also ask Kiki to do other tasks: reading news, checking calendar, navigation, asking knowledge questions…`,
						`Two of the core components of the Kiki voice assistant are the NLU (natural language understanding) module and the QA (Question Answering) system.`,
					]}
					descImage="Natural Language Processing"
				/>
				<ExperimentsCP />
			</div>
		</>
	);
};

export default NaturalLanguagePage;
