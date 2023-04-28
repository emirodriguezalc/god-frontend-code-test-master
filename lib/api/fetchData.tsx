import { Car } from '../../types/Car';
import fetch from 'node-fetch';

export async function fetchData(endpoint: string): Promise<Car[]> {
	if (typeof window === 'undefined') {
		// fetch data on server-side
		const res = await fetch(`http://localhost:3333${endpoint}`);
		const data = await res.json() as Car[];
		return data;
	} else {
		// fetch data on client-side
		const res = await fetch(endpoint);
		const data = await res.json() as Car[];
		return data;
	}
}
