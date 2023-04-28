import { Block, Button, Text } from 'vcc-ui';

import { Car } from '../types/Car';
import { fetchData } from '../lib/api/fetchData';

type HomeProps = {
	cars: Car[];
};

export default function Home({ cars }: HomeProps) {
	return (
		<Block extend={{ padding: 20 }}>
			<Text>Cars:</Text>
			<ul>
				{cars.map((car) => (
					<li key={car.id}>
						{car.modelName} ({car.bodyType})
					</li>
				))}
			</ul>
		</Block>
	);
}

export async function getStaticProps() {
	const cars = await fetchData('/api/cars.json');

	return {
		props: {
			cars,
		},
	};
}
