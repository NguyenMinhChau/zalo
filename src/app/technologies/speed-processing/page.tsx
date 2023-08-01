import { ExperimentsCP, HeroGeneral } from '../../../../components';
import ContentTwo from '../../../../components/ContentTwo';
import HeroSpeed from '../../../../public/images/discover/hero_speed.png';
import ImageSpeed from '../../../../public/images/technologies/speech_processing.png';

const SpeedProcessingPage = () => {
	return (
		<>
			<HeroGeneral title="Speech Processing" urlImage={HeroSpeed?.src} />
			<div className="container my-5">
				<ContentTwo
					urlImage={ImageSpeed?.src}
					desc={[
						`Automatic Speech Recognition (ASR), or Speech-To-Text, is the process of transcribing utterances into texts. We have worked on many challenging issues of ASR such as noisy surrounding, user accents of different regions or ages, informal speaking styles used in everyday life...`,
						`Speech synthesis, or Text-To-Speech (TTS), is a process of converting language texts into speeches. Zalo TTS aims to generate natural-sounding speech that can be used in applications such as news reading, voice assistant, smart home devices... We have built different TTS solutions to be deployed at server side or on mobile devices. The server-side solution is focused on generating the natural, human-like voices. The on-device solution is optimized in model size and speed to be able to run on mobile and embedded devices.`,
						`At Zalo, ASR for Vietnamese has been applied to Zalo app for converting voice messages into text messages.`,
					]}
					descImage="Speech Processing"
				/>
				<ExperimentsCP />
			</div>
		</>
	);
};

export default SpeedProcessingPage;
