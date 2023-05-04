import { Block, Spacer, Text, View } from 'vcc-ui';
import { useCallback, useRef, useState } from 'react';

import type { Car } from '../../types/Car';
import Footer from '../../src/components/Footer';
import type { NextPage } from 'next';
import TopBar from '../../src/components/TopBar';
import { useRouter } from 'next/router';

interface ShopProps {
  car: Car;
}

const Shop: NextPage<ShopProps> = ({ car }) => {
  const router = useRouter();
  const carId = router.query.id as string;
  return (
    <View>
      <TopBar />
      <View extend={{
        alignItems: 'center',
        padding: 24
      }}>
        <Text variant="amundsen"> Shop page for {carId}</Text>
        <Text variant="kelly"> This page is under maintenance. Please come back later.</Text>
      </View>
    </View>
  );
};
//INFO: #7 Of the readme
/* export const getStaticProps: GetStaticProps<ShopProps, Params> = async ({ params }) => {
  const { id } = params!;
  const response = await fetch(`api/cars/${id}`);
  const car = await response.json();
  return {
    props: {
      car,
    },
  };
}; */

export default Shop;
