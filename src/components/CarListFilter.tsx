import { Flex, TabNav, TabNavItem } from 'vcc-ui';
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
  const [active, setActive] = useState<number>(1);

  const carBodyTypeCounts = useMemo(() => {
    return carBodyTypes.map((carBodyType) => {
      const count = carBodyType.slug === '' ? cars.length : cars.filter((car) => car.bodyType === carBodyType.slug).length;
      return { ...carBodyType, count };
    });
  }, [cars]);

  const handleClick = (slug: string, index: number) => {
    //INFO: #6 Of the readme
    setActive(index);
    handleFilterChange(slug);
  };

  return (
    <TabNav>
      <Flex extend={{
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center'
      }}>
        {carBodyTypeCounts.map((carBodyType, index) => (
          <TabNavItem
            key={carBodyType.slug}
            isActive={active === index + 1}
            onClick={() => handleClick(carBodyType.slug, index + 1)}
          >
            {`${carBodyType.name} (${carBodyType.count})`}
          </TabNavItem>
        ))}
      </Flex >
    </TabNav>
  );
};

export default React.memo(CarListFilter);
