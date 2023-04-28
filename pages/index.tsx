import { Block, Button, Text } from 'vcc-ui';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { Car } from '../types/Car';
import CarList from '../src/components/CarList';
import CarListFilter from '../src/components/CarListFilter';
import { fetchData } from '../lib/api/fetchData';

type HomeProps = {
	allCars: Car[];
};

export default function Home({ allCars }: HomeProps) {
	const [cars, setCars] = useState<Car[]>(allCars);
	const [bodyTypeFilter, setBodyTypeFilter] = useState<string | undefined>();
	const isFirstRender = useRef(true);

	useLayoutEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		async function loadData() {
			const data = await fetchData('/api/cars.json', bodyTypeFilter);
			setCars(data);
		}

		loadData();
	}, [bodyTypeFilter]);

	async function handleFilterChange(filter: string | undefined) {
		setBodyTypeFilter(filter);
	}

	return (
		<Block extend={{ padding: 20 }}>
			<Text>Cars:</Text>
			<CarListFilter handleFilterChange={handleFilterChange} cars={allCars} />
			<CarList cars={cars} />
		</Block>
	);
}

export async function getStaticProps() {
	const allCars = await fetchData('/api/cars.json', '');

	return {
		props: {
			allCars,
		},
	};
}
