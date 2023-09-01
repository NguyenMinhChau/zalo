import { HeroGeneral, OurTeamsCP } from '../../../components';
import ContentTwo from '../../../components/ContentTwo';
import ImageComputerVision from '../../../public/images/technologies/computer_vision.png';

const AboutUsPage = () => {
	return (
		<>
			<HeroGeneral
				title="Profile Company"
				desc={[
					`Established in 2022, Megaboom Co., Ltd. is a media, advertising, event organization and technology development service company in the financial sector.`,
				]}
			/>
			<div className="">
				<ContentTwo
					urlImage={ImageComputerVision?.src}
					desc={[
						`Helping to open up a new perspective of the financial market in Vietnam, Megaboom creates the real opportunity for trustworthy financial institutes to interact and promote their products and service to qualified leads through sustainable marketing activities.`,
					]}
					descImage="Mission"
				/>
				<ContentTwo
					urlImage={ImageComputerVision?.src}
					desc={[
						`To create the deepest connection in our ecosystem and the widest spread of interaction with end-users.`,
					]}
					descImage="Vision"
				/>
				<OurTeamsCP
					desc={[
						`People and Product are at the core of Megaboom's identity. We have established a dynamic environment in which all members can unlock their full potential. With the motto "striving for excellence", we believe that each member of the team has their own color and contribution to from a unique Megaboom through five key characteristics: Sicere, Collaborative, Talented, Respect, Joyful. This is also a prerequisite for our team to grow together, there by solidifying our position as one of the leading media units in financial sector.`,
					]}
				/>
			</div>
		</>
	);
};

export default AboutUsPage;
