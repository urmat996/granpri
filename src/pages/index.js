import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon, Input, Button, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
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
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
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
				</Menu>
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
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Наши УСЛУГИ{" "}
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
			<Input />
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Stack margin-top="40px">
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5faad99e79530b001fd24b49/images/11.png?v=2020-11-10T19:18:06.004Z) 50% 0/cover no-repeat" />
					<Text as="h3" font="--headline3" margin="5px 0 5px 0" text-align="center">
						МОЙКА АВТО{"\n\n"}
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
						Если Вы хотите, чтобы салон Вашего автомобиля значительно посвежел, то мы можем предложить Вам услугу по химчистке салона.{"\n\n"}
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						Стоимость:
					</Text>
					<Text as="p" margin="0px 0 30px 0" text-align="center" font="300 46px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						1 050 руб.{"\n\n"}
					</Text>
					<Button>
						ЗАПИСАТЬСЯ
					</Button>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5faad99e79530b001fd24b49/images/33.png?v=2020-11-10T19:35:32.472Z) 50% 0/cover no-repeat" />
					<Text as="h3" font="--headline3" margin="5px 0 5px 0" text-align="center">
						ПОЛИРОВКА МАШИНЫ{"\n\n"}
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						Важный процесс для подержания внешнего вида транспортного средства в хорошем состоянии.
						<br />
						<br />
						{"\n\n"}
					</Text>
					<Text as="p" margin="0px 0 20px 0" text-align="center">
						Стоимость:
					</Text>
					<Text as="p" margin="0px 0 30px 0" text-align="center" font="300 46px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						1 600 руб.{"\n\n"}
					</Text>
					<Button>
						ЗАПИСАТЬСЯ
					</Button>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px" />
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
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