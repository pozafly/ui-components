import { useState } from 'react';
import cx from './cx';
import data from './data';

const TabItem = ({
  id,
  title,
  current,
  toggle,
}: {
  id: string;
  title: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx('tab', { current })} key={id} onClick={toggle}>
      <div className={cx('item')}>{title}</div>
    </li>
  );
};

const TabMenu2 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h3>
        #2. React <sub>다 그려놓고 hidden/show css로 처리</sub>
      </h3>
      <div className={cx('container', 'tabMenu2')}>
        <ul className={cx('tabList')}>
          {data.map((d) => (
            <TabItem
              {...d}
              key={d.id}
              current={currentId === d.id}
              toggle={toggleItem(d.id)}
            />
          ))}
        </ul>
        {data.map(({ id, description }) => (
          <div className={cx('description', { current: currentId === id })}>
            {description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabMenu2;
