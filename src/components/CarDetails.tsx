import { Text } from 'vcc-ui';
import { TransitionStatus } from 'react-transition-group';

interface Props {
  state: TransitionStatus;
  bodyType: string;
  modelName: string;
  modelType: string;
}

const CarDetails = ({ state, bodyType, modelName, modelType }: Props) => {
  const duration = 300;

  const defaultTextStyle: React.CSSProperties = {
    transition: `transform ${duration}ms ease-in-out`,
  };

  const transitionTextStyles: {
    [key in TransitionStatus]?: React.CSSProperties;
  } = {
    entering: {},
    entered: { color: 'var(--v-color-foreground-accent-blue)' },
    exiting: {},
    exited: {},
    unmounted: {},
  };
  return (
    <>
      <Text
        style={{ ...defaultTextStyle, ...transitionTextStyles[state] }}
        extend={{
          textTransform: 'uppercase',
          color: 'var(--v-color-foreground-secondary)',
        }}
        variant="bates"
        subStyle="emphasis"
      >
        {bodyType}
      </Text>
      <Text
        style={{ ...defaultTextStyle, ...transitionTextStyles[state] }}
        variant="columbus"
        subStyle="emphasis"
      >
        {modelName}
      </Text>
      <Text
        style={{ ...defaultTextStyle, ...transitionTextStyles[state] }}
        variant="columbus"
        subStyle="inline-link"
      >
        {modelType}
      </Text>
    </>
  );
};

export default CarDetails;
