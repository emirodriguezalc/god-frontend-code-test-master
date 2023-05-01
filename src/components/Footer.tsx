import { Flex, Text } from 'vcc-ui';

const Footer = () => {
  return (
    <Flex
      extend={{
        padding: 24,
        backgroundColor: 'var(--v-color-background-secondary)',
        alignItems: 'center',
        marginTop: 'auto'
      }}>
      <Text
        variant="kelly" subStyle="inline-link">
        Fake Copyright © 2023 NonVolvo Car Corporation (or its affiliates or licensors)
      </Text>
    </Flex>
  );
};
export default Footer;
