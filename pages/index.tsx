import { Block, Button, Text } from 'vcc-ui';
import type { GetStaticProps, NextPage } from 'next';
import { useCallback, useRef, useState } from 'react';

import type { Car } from '../types/Car';
import CarList from '../src/components/CarList';
import CarListFilter from '../src/components/CarListFilter';
import { fetchData } from '../lib/api/fetchData';

interface HomeProps {
	allCars: Car[];
}

const Home: NextPage<HomeProps> = ({ allCars }) => {
	const [cars, setCars] = useState<Car[]>(allCars);
	//INFO: #1 Of the readme
	const handleFilterChange = useCallback(
		(filter: string | undefined) => {
			if (filter) {
				const filteredCars = allCars.filter((car) => car.bodyType === filter);
				setCars(filteredCars);
			} else {
				setCars(allCars);
			}
		},
		[allCars]
	);

	return (
		<Block extend={{ padding: 20 }}>
			<Text>Cars:</Text>
			<CarListFilter handleFilterChange={handleFilterChange} cars={allCars} />
			<CarList cars={cars} />
		</Block>
	);
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	//INFO: #2 Of the readme

	const allCars = await fetchData('/api/cars.json');
	return {
		props: {
			allCars,
		},
	};
};

export default Home;
