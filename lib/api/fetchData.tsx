import { Car } from '../../types/Car';

export async function fetchData(endpoint: string, bodyTypeFilter?: string): Promise<Car[]> {
	if (typeof window === 'undefined') {
		// fetch data on server-side
		const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';

		const absoluteUrl = `${baseUrl}${endpoint}`;
		const res = await fetch(absoluteUrl);
		const data = (await res.json()) as Car[];
		if (bodyTypeFilter) {
			return data.filter((car) => car.bodyType === bodyTypeFilter);
		} else {
			return data;
		}
	} else {
		// fetch data on client-side
		const res = await fetch(endpoint);
		const data = (await res.json()) as Car[];
		if (bodyTypeFilter) {
			return data.filter((car) => car.bodyType === bodyTypeFilter);
		} else {
			return data;
		}
	}
}
