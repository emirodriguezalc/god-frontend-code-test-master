import { Car } from '../../types/Car';

export const fetchData = async (endpoint: string): Promise<Car[]> => {
	if (typeof window === 'undefined') {
		// fetch data on server-side
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';

		const absoluteUrl = `${baseUrl}${endpoint}`;
		const res = await fetch(absoluteUrl);
		const data = (await res.json()) as Car[];
		return data;
	} else {
		// fetch data on client-side
		const res = await fetch(endpoint);
		const data = (await res.json()) as Car[];
		return data;
	}
};
