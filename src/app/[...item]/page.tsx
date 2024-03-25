'use client';

// import { ROUTE_PATH, isParentRoute, routePaths, routes } from '@/routes';

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ['', ...item].join('/');
  return <div>Item page {path}</div>;
};

export default ItemPage;
