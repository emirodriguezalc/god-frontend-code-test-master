import React, { useMemo, useState } from 'react';

import { Car } from '../../types/Car';

type CarBodyType = {
	name: string;
	slug: string;
};

const carBodyTypes: CarBodyType[] = [
	{ name: 'All', slug: '' },
	{ name: 'SUV', slug: 'suv' },
	{ name: 'Station wagon', slug: 'estate' },
	{ name: 'Sedan', slug: 'sedan' },
];

type CarFilterProps = {
	handleFilterChange: (bodyType: string) => void;
	cars: Car[];
};

const CarListFilter = ({ handleFilterChange, cars }: CarFilterProps) => {
	/* 	const [activeFilter, setActiveFilter] = useState('');
	 */
	const carBodyTypeCounts = useMemo(() => {
		return carBodyTypes.map((carBodyType) => {
			const count = carBodyType.slug === '' ? cars.length : cars.filter((car) => car.bodyType === carBodyType.slug).length;
			return { ...carBodyType, count };
		});
	}, [cars]);

	const handleClick = (slug: string) => {
		/* 		setActiveFilter(slug);
		 */ handleFilterChange(slug);
	};

	return (
		<>
			<ul>
				{carBodyTypeCounts.map((carBodyType) => (
					<li key={carBodyType.slug} /* className={activeFilter === carBodyType.slug ? 'active' : ''} */>
						<button onClick={() => handleClick(carBodyType.slug)}>{`${carBodyType.name} (${carBodyType.count})`}</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default React.memo(CarListFilter);
