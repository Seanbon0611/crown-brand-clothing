import React, { useMemo } from "react";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/ShopSelector";
import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const collections = useSelector(selectCollection(match.params.routeName));
  const memoizedCollections = useMemo(() => collections, [collections]);
  const { title, items } = memoizedCollections;
  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
