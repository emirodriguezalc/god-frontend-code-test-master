import { Block, Flex, Link, Text } from 'vcc-ui';

import { Car } from '../../types/Car';

type CarListItemProps = Car;

const CarListItem = ({ id, modelName, bodyType, modelType, imageUrl }: CarListItemProps) => {
  return (
    <Flex
      extend={{
        padding: '0 12',
        width: '300px'
      }}>
      <Text extend={{ textTransform: 'uppercase', color: 'var(--v-color-foreground-secondary)' }} variant="bates" subStyle="emphasis">{bodyType}</Text>
      <Text variant="columbus" subStyle="emphasis">{modelName}</Text>
      <Text variant="columbus" subStyle="inline-link">{modelType}</Text>
      {/* TODO: HOW TO USE NEXT IMAGE WITH DYNAMIC ROUTES? */}
      <Flex extend={{
        marginTop: 16
      }}>
        {/* INFO: #3 Of the readme */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={`A ${modelName} ${modelType} ${bodyType} standing still on grey floor in a studio`} />
      </Flex>
      <Flex extend={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        padding: 12
      }}>
        <Block extend={{ marginLeft: 12, marginRight: 12 }}>
          <Link textTransform='none' href={`/learn/${id}`} arrow="right">
            LEARN
          </Link>
        </Block>
        <Block extend={{ marginLeft: 12, marginRight: 12 }}>
          <Link textTransform='none' href={`/shop/${id}`} arrow="right">
            SHOP
          </Link>
        </Block>
      </Flex>
    </Flex>
  );
};

export default CarListItem;
