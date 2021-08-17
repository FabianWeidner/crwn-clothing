import React, { useState } from 'react';
import CollectionPreview from '../../components/preview-collection/CollectionPreview';
import ShopData from './ShopData';

const ShopPage = () => {
  const [collections, setCollections] = useState(ShopData);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
