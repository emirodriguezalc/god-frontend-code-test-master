import { Car } from '../../types/Car';
import { useState } from 'react';

type CarBodyType = {
	name: string;
	slug: string;
	count: number;
};

const carBodyTypes: CarBodyType[] = [
	{ name: 'All', slug: '', count: 0 },
	{ name: 'SUV', slug: 'suv', count: 0 },
	{ name: 'Station wagon', slug: 'estate', count: 0 },
	{ name: 'Sedan', slug: 'sedan', count: 0 },
];

type CarFilterProps = {
	handleFilterChange: (bodyType: string) => void;
	cars: Car[];
};

const CarListFilter = ({ handleFilterChange, cars }: CarFilterProps) => {
	const [activeFilter, setActiveFilter] = useState('');

	const handleClick = (slug: string) => {
		setActiveFilter(slug);
		handleFilterChange(slug);
	};

	carBodyTypes.map((carbodyType) => {
		console.log(carbodyType.slug, cars);

		carbodyType.count = carbodyType.slug === '' ? cars.length : cars.filter((car) => car.bodyType === carbodyType.slug).length;
	});

	return (
		<div>
			<ul>
				{carBodyTypes.map((type) => (
					<li key={type.slug} className={activeFilter === type.slug ? 'active' : ''}>
						<button onClick={() => handleClick(type.slug)}>{`${type.name} (${type.count})`}</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CarListFilter;
