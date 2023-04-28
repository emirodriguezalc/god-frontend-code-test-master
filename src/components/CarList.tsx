import { Car } from '../../types/Car';

type CarListProps = {
	cars: Car[];
};

const CarList = ({ cars }: CarListProps) => {
	return (
		<ul>
			{cars.map((car) => (
				<li key={car.id}>
					{car.modelName} ({car.bodyType})
				</li>
			))}
		</ul>
	);
};
export default CarList;
