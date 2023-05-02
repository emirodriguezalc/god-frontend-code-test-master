import { Car } from '../../types/Car';
import CarListItem from './CarListItem';

type CarListProps = {
  cars: Car[];
};

const CarList = ({ cars }: CarListProps) => {
  return (
    <>
      {cars.map((car) => (
        <CarListItem {...car} key={car.id} />
      ))}
    </>
  );
};
export default CarList;
