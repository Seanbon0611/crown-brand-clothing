import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
  {console.log(match)}
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
  </div>
);


export default ShopPage;