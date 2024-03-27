import Accordions1 from './1_r';
import Accordions2 from './2_r';
import Accordions3 from './3_r';
import Accordions4 from './4_v';
import Accordions5 from './5_r';
import Accordions6 from './6_r';
import cx from './cx';

const Accordions = () => {
  return (
    <div className={cx('Accordions')}>
      <h2>아코디언</h2>
      <Accordions1 />
      <Accordions2 />
      <Accordions3 />
      <Accordions4 />
      <Accordions5 />
      <Accordions6 />
    </div>
  );
};

export default Accordions;
