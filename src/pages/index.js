import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Box, Icon, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
import { BsTools, BsDiamond, BsFillClockFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--headline3">
					ГРАН-ПРИ
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-404">
						8(800)12345678
					</Override>
					<Override slot="link-index">
						ЕКАТЕРИНБУРГ
					</Override>
				</Menu>
				<Button>
					Вам перезвонить?
				</Button>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://uploads.quarkly.io/5faad99e79530b001fd24b49/images/1.png?v=2020-11-10T18:55:33.008Z) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						ЖЕНСКИЙ ЧЕТВЕРГ
					</Text>
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Всем девушкам, женщинам,{" "}
						<br />
						посетившим нашу автомойку{" "}
						<br />
						в четверг скидки до 50%
					</Text>
				</StackItem>
			</Stack>
			<Button width="20%" margin="20px 0px 0px 0px">
				ОТПРАВИТЬ ЗАЯВКУ
			</Button>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Наши УСЛУГИ{" "}
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Stack margin-top="40px">
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5faad99e79530b001fd24b49/images/11.png?v=2020-11-10T19:18:06.004Z) 50% 0/cover no-repeat" />
					<Text as="h3" font="--headline3" margin="5px 0 5px 0" text-align="center">
						МОЙКА АВТО
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						Хотите очистить свой автомобиль,{" "}
						<br />
						то Вам необходим данный вид услуги.
						<br />
						<br />
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						Стоимость:
					</Text>
					<Text as="p" margin="0px 0 30px 0" text-align="center" font="300 46px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						1 400 руб.
					</Text>
					<Button>
						ЗАПИСАТЬСЯ
					</Button>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5faad99e79530b001fd24b49/images/22.png?v=2020-11-10T19:34:16.521Z) 50% 0/cover no-repeat" />
					<Text as="h3" font="--headline3" margin="5px 0 5px 0" text-align="center">
						ХИМЧИСТКА САЛОНА
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						Если Вы хотите, чтобы салон Вашего автомобиля значительно посвежел, то мы можем предложить Вам услугу по химчистке салона.
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						Стоимость:
					</Text>
					<Text as="p" margin="0px 0 30px 0" text-align="center" font="300 46px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						1 050 руб.
					</Text>
					<Button>
						ЗАПИСАТЬСЯ
					</Button>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5faad99e79530b001fd24b49/images/33.png?v=2020-11-10T19:35:32.472Z) 50% 0/cover no-repeat" />
					<Text as="h3" font="--headline3" margin="5px 0 5px 0" text-align="center">
						ПОЛИРОВКА МАШИНЫ
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						Важный процесс для подержания внешнего вида транспортного средства в хорошем состоянии.
						<br />
						<br />
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						Стоимость:
					</Text>
					<Text as="p" margin="0px 0 30px 0" text-align="center" font="300 46px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						1 600 руб.
					</Text>
					<Button>
						ЗАПИСАТЬСЯ
					</Button>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				text-align="center"
			>
				Наши преимущества
			</Text>
			<Stack margin-top="40px">
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Icon
						category="bs"
						icon={BsTools}
						size="60px"
						color="#0069ce"
						text-align="center"
						align-items="center"
						width="100%"
					/>
					<Text as="h3" font="--headline3" margin="5px 0 5px 0" text-align="center">
						Высокое качество
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						обслуживания
					</Text>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Icon
						category="bs"
						icon={BsDiamond}
						size="60px"
						color="#0069ce"
						text-align="center"
						align-items="center"
						width="100%"
					/>
					<Text as="h3" font="--headline3" margin="5px 0 5px 0" text-align="center">
						Гарантия
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						низких цен
					</Text>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Icon
						category="bs"
						icon={BsFillClockFill}
						size="60px"
						color="#0069ce"
						text-align="center"
						align-items="center"
						width="100%"
					/>
					<Text as="h3" font="--headline3" margin="5px 0 5px 0" text-align="center">
						Сроки
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						исполнения заказов
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-primary"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
				<StackItem flex-grow="1" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline2"
						md-font="--headline2"
						color="--light"
					>
						ОСТАЛИСЬ ВОПРОСЫ?
					</Text>
				</StackItem>
				<StackItem md-width="100%" font="300 16px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
					<Button background="#00b41c">
						<Span font="300 24px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
							ЗАДАТЬ ВОПРОС
						</Span>
					</Button>
				</StackItem>
				<StackItem md-width="100%" />
			</Stack>
			<Text color="#f4f7ad" position="static" margin="5px 0px 16px 0px">
				Оставьте заявку и наш менеджер будет рад ответить на Ваши вопросы
			</Text>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-404">
					Gran-pri
				</Override>
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				gran-pri@gmail.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});