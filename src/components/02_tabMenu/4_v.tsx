import { useState } from 'react';
import cx from './cx';
import data from './data';
import VanillaWrapper from '../vanillaWrapper';

const buildTabMenu = ({ id, title }: { id: string; title: string }) => {
  const $li = document.createElement('li');
  $li.classList.add(cx('tab'));
  $li.textContent = title;
  $li.setAttribute('data-id', id);

  return $li;
};

const buildDescription = ({
  id,
  description,
}: {
  id: string;
  description: string;
}) => {
  const $div = document.createElement('div');
  $div.classList.add(cx('description'));
  $div.textContent = description;
  return $div;
};

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string = data[0].id;

  const $container = document.createElement('div');
  $container.classList.add(cx('container'), cx('tabMenu2'));

  const $tabUl = document.createElement('ul');
  $tabUl.classList.add(cx('tabList'));

  const $tabList = data.map(buildTabMenu);
  const $desc = data.map(buildDescription);

  $tabUl.append(...$tabList);
  $container.append($tabUl, ...$desc);

  const handleClickTab = (e: Event) => {
    const $el = e.target as HTMLElement;
    if (!$el.classList.contains(cx('tab'))) return;

    currentId = $el.dataset.id || data[0].id;
    $tabList.forEach(($item, index) => {
      $item.classList.toggle(cx('current'), currentId === $item.dataset.id);
      $desc[index].classList.toggle(
        cx('current', currentId === $item.dataset.id)
      );
    });
  };

  $tabUl.addEventListener('click', handleClickTab);
  wrapper.append($container);
  $tabList[0].click();
};

const TabMenu4 = () => <VanillaWrapper title="#4" initiator={initiator} />;
export default TabMenu4;
