import { Block, Spacer, Text, View } from 'vcc-ui';
import type { GetStaticProps, NextPage } from 'next';
import { useCallback, useState } from 'react';

import type { Car } from '../types/Car';
import CarListFilter from '../src/components/CarListFilter';
import Carousel from '../src/components/carousel/Carousel';
import Footer from '../src/components/Footer';
import Head from 'next/head'
import TopBar from '../src/components/TopBar';
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
    <>
      <Head>
        <title>Volvo Cars</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <View extend={{ height: '100vh' }}>
        <TopBar />
        <View extend={{
          fromM: {
            padding: 24
          },
        }}>
          <Block extend={{
            marginBottom: '32px',
            textAlign: 'center',
            fromM: {
              marginBottom: '48px'
            },
          }} >
            <Text variant="ootah" subStyle="emphasis">All Recharge models</Text>
          </Block>
          <Spacer />
          <CarListFilter handleFilterChange={handleFilterChange} cars={allCars} />
          <Spacer />
          <Carousel cars={cars} />
        </View>
        <Footer />
      </View>
    </>
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

export default Home
