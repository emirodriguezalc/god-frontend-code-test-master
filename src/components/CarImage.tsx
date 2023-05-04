import { Flex } from 'vcc-ui';
import { TransitionStatus } from 'react-transition-group';

interface Props {
  state: TransitionStatus;
  bodyType: string;
  modelName: string;
  modelType: string;
  imageUrl: string;
}

const duration = 300;

const defaultImageStyle: React.CSSProperties = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: 'scale(1)',
  transformOrigin: 'center',
  width: '100%',
};

const transitionImageStyles: {
  [key in TransitionStatus]: React.CSSProperties;
} = {
  entering: { transform: 'scale(1)' },
  entered: { transform: 'scale(1.1)' },
  exiting: { transform: 'scale(1)' },
  exited: { transform: 'scale(1)' },
  unmounted: {},
};

const CarImage = ({ state, imageUrl, bodyType, modelType, modelName }: Props) => {
  return (
    <Flex extend={{ marginTop: 16, overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={`A ${modelName} ${modelType} ${bodyType} standing still on grey floor in a studio`}
        style={{ ...defaultImageStyle, ...transitionImageStyles[state] }}

      />
    </Flex>
  );
};

export default CarImage;
