import { Flex, Logo } from 'vcc-ui';

const TopBar = () => {
	return (
		<Flex
			extend={{
				padding: 24,
				backgroundColor: 'var(--v-color-background-secondary)',
				height: '7px',
				alignItems: 'flex-start',
				fromM: {
					height: '8px',
				},
			}}>
			<Logo />
		</Flex>
	);
};
export default TopBar;
