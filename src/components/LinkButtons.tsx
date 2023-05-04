import { Block, Flex, Link } from 'vcc-ui';
type LinkButtonsProps = { id: string; };

const LinkButtons = ({ id }: LinkButtonsProps) => {
  return (
    <Flex
      extend={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        padding: 12,
      }}
    >
      <Block extend={{ marginLeft: 12, marginRight: 12 }}>
        <Link textTransform="none" href={`/${id}/learn/`} arrow="right">
          LEARN
        </Link>
      </Block>
      <Block extend={{ marginLeft: 12, marginRight: 12 }}>
        <Link textTransform="none" href={`/${id}/shop/`} arrow="right">
          SHOP
        </Link>
      </Block>
    </Flex>
  );
};
export default LinkButtons;
