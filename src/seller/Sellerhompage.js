import React from 'react'
// import { useLocation } from 'react-router-dom'
import SellerNavbar from '../components/SellerNavbar';
import ViewItems from '../customer/ViewItems';
import config from '../config';

function Sellerhomepage() {

  // const location = useLocation();
  return (
    <div>
      <SellerNavbar />
      <ViewItems />
    </div>
  )
}

export default Sellerhomepage