import { Block, Flex, Link, Text } from 'vcc-ui';
import { Transition, TransitionStatus } from 'react-transition-group';
import { useRef, useState } from 'react';

import { Car } from '../../types/Car';

type CarListItemProps = Car;

const CarListItem = ({ id, modelName, bodyType, modelType, imageUrl }: CarListItemProps) => {
  const duration = 300;

  const defaultImageStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: 'scale(1)',
    transformOrigin: 'center',
    width: '300px',
    cursor: 'pointer'
  };

  const transitionImageStyles: { [key in TransitionStatus]: React.CSSProperties } = {
    entering: { transform: 'scale(1)' },
    entered: { transform: 'scale(1.1)' },
    exiting: { transform: 'scale(1)' },
    exited: { transform: 'scale(1)' },
    unmounted: {}
  };
  const defaultTextStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    cursor: 'pointer'
  };

  const transitionTextStyles: { [key in TransitionStatus]: React.CSSProperties } = {
    entering: {},
    entered: { color: 'var(--v-color-foreground-accent-blue)', },
    exiting: {},
    exited: {},
    unmounted: {}
  };

  const [isHovering, setIsHovering] = useState(false);
  const nodeRef = useRef<HTMLImageElement>(null);

  return (
    <Flex extend={{ padding: '0 12', width: '300px' }}>
      <Transition
        in={isHovering}
        timeout={duration}
        nodeRef={nodeRef}
        key={modelName}
      >
        {state => (
          <div onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <Text style={{ ...defaultTextStyle, ...transitionTextStyles[state] }} extend={{ textTransform: 'uppercase', color: 'var(--v-color-foreground-secondary)' }} variant="bates" subStyle="emphasis">{bodyType}</Text>
            <Text style={{ ...defaultTextStyle, ...transitionTextStyles[state] }} variant="columbus" subStyle="emphasis">{modelName}</Text>
            <Text style={{ ...defaultTextStyle, ...transitionTextStyles[state] }} variant="columbus" subStyle="inline-link">{modelType}</Text>
            <Flex extend={{ marginTop: 16, overflow: 'hidden' }}>
              <img
                src={imageUrl}
                alt={`A ${modelName} ${modelType} ${bodyType} standing still on grey floor in a studio`}
                style={{ ...defaultImageStyle, ...transitionImageStyles[state] }}
                ref={nodeRef}

              />
            </Flex>
          </div>
        )}
      </Transition>
      <Flex extend={{ flexDirection: 'row', width: '100%', justifyContent: 'center', padding: 12 }}>
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


    </Flex>
  );
};

export default CarListItem;
