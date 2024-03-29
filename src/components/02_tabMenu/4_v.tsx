import { useState } from 'react';
import cx from './cx';
import data from './data';
import VanillaWrapper from '../vanillaWrapper';

const buildTabMenu = ({ id, title }: { id: string; title: string }) => {
  const $li = document.createElement('li');
  $li.classList.add(cx('tab'));
  $li.textContent = title;
  return $li;
};

const buildDescriptions = ({
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
  const $container = document.createElement('div');
  $container.className = cx('container', 'tabMenu2');

  const $tabUl = document.createElement('ul');
  $tabUl.className = cx('tabList');

  const $tabList = data.map(buildTabMenu);
  const $desc = data.map(buildDescriptions);

  $tabUl.append($tabList, $desc);
};

const TabMenu4 = () => <VanillaWrapper title="#4" initiator={initiator} />;
export default TabMenu4;
