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
        <Link textTransform="none" href={`/learn/${id}`} arrow="right">
          LEARN
        </Link>
      </Block>
      <Block extend={{ marginLeft: 12, marginRight: 12 }}>
        <Link textTransform="none" href={`/shop/${id}`} arrow="right">
          SHOP
        </Link>
      </Block>
    </Flex>
  );
};
export default LinkButtons;
