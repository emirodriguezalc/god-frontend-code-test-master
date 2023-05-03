import AnimatedCarDetails from './AnimatedCarDetails';
import { Car } from '../../types/Car';
import { Flex } from 'vcc-ui';
import LinkButtons from './LinkButtons';

type CarListItemProps = {
  car: Car;
};

const CarListItem = ({ car }: CarListItemProps) => {
  return (
    <Flex extend={{ padding: '0 12' }}>
      {/* INFO: #4 Of the readme */}
      <AnimatedCarDetails car={car} />
      <LinkButtons id={car.id} />
    </Flex >
  );
};

export default CarListItem;
