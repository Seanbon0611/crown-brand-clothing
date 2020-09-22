import React from "react";
import CollectionItem from "../../components/collection-item/CollectionItem";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  return (
    <div className="collection-page">
      {console.log(match.params.collectionId)}
      <h2>{match.params.collectionId}</h2>
    </div>
  );
};

export default CollectionPage;
