import KeyPic from "$assets/icons/svg/Key.svg";
import HandShakePic from "$assets/icons/svg/HandShake.svg";
import LinesDotsPic from "$assets/icons/svg/LinesDots.svg";
import Image from "next/image";
import { Typography } from "$components/typography/typography";

export const HelpWith = () => {
	return (
		<div className="flex gap-5 mt-5 flex-col md:flex-row">
			<div className="help-with px-6 py-10 md:p-12">
				<div className="flex flex-col">
					<div className="mb-12">
						<Image src={KeyPic} alt="keyPic" />
					</div>
					<Typography as="span" appearance="regular">
						Понимание внутренней работы криптовалютного и банковского секторов
					</Typography>
				</div>
			</div>
			<div className="px-6 py-10 md:p-12 help-with">
				<div className="flex flex-col">
					<div className="mb-12">
						<Image src={HandShakePic} alt="HandShakePic" />
					</div>
					<Typography as="span" appearance="regular">
						Индивидуальный подход и консультирование клиентов 24/7
					</Typography>
				</div>
			</div>
			<div className="px-6 py-10 md:p-12 help-with">
				<div className="flex flex-col">
					<div className="mb-12">
						<Image src={LinesDotsPic} alt="LinesDotsPic" />
					</div>
					<Typography as="span" appearance="regular">
						Нетривиальные подходы к решению вопросов в кратчайшие сроки
					</Typography>
				</div>
			</div>
		</div>
	);
};
