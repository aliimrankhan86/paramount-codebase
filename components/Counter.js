import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

const Counter = ({ end }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref}>
          {inView ? <CountUp end={end} duration={2} /> : <span>{end}</span>}
        </div>
      )}
    </InView>
  );
};

export default Counter; 