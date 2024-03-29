import { useState } from 'react';
import cx from './cx';
import data from './data';

const TabItem = ({
  id,
  title,
  current,
  description,
  toggle,
}: {
  id: string;
  title: string;
  current: boolean;
  description: string;
  toggle: () => void;
}) => {
  return (
    <li className={cx('item', { current })} key={id}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      <div className={cx('description')}>{description}</div>
    </li>
  );
};

const TabMenu3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h3>
        #3. React <sub>한 li 안에 title/description 모두 있게 처리</sub>
      </h3>
      <div className={cx('container')}>
        <ul className={cx('tabList', 'tabMenu3')}>
          {data.map((d) => (
            <TabItem
              {...d}
              key={d.id}
              current={currentId === d.id}
              toggle={toggleItem(d.id)}
              description={d.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabMenu3;
