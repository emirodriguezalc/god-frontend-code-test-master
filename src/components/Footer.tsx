import { Flex, Text } from 'vcc-ui';

const Footer = () => {
	return (
		<Flex
			extend={{
				padding: 24,
				backgroundColor: 'var(--v-color-background-secondary)',
				textAlign: 'center',
        marginTop: 'auto'
			}}>
			<Text
				extend={{
					color: 'var(--v-color-foreground-secondary)',
					fontSize: '12px',
				}}>
				Fake Copyright © 2023 NonVolvo Car Corporation (or its affiliates or licensors)
			</Text>
		</Flex>
	);
};
export default Footer;
