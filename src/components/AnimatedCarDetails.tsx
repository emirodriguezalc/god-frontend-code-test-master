import { Transition, TransitionStatus } from 'react-transition-group';
import { useRef, useState } from 'react';

import { Car } from '../../types/Car';
import CarDetails from './CarDetails';
import CarImage from './CarImage';

type CarListItemProps = {
  car: Car;
};
const duration = 300;


const AnimatedCarDetails = ({ car }: CarListItemProps) => {
  const { imageUrl, bodyType, modelType, modelName } = car;
  const [isHovering, setIsHovering] = useState(false);
  const nodeRef = useRef<HTMLImageElement>(null);
  return (
    <Transition
      in={isHovering}
      timeout={duration}
      nodeRef={nodeRef}
      key={modelName}
    >
      {(state: TransitionStatus) => (
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ cursor: 'pointer' }}
          ref={nodeRef}
        >
          <CarDetails state={state} bodyType={bodyType} modelName={modelName} modelType={modelType} />
          <CarImage state={state} imageUrl={imageUrl} bodyType={bodyType} modelName={modelName} modelType={modelType} />
        </div>
      )}
    </Transition>
  );
};


export default AnimatedCarDetails;
