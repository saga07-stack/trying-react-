import React from 'react'
import WelcomeMessage from './assets/component/WelcomeMessage' ;
import RestrictedContent from './assets/component/RestrictedContent';
import CustomButton from './assets/component/CustomButton';
import UserBadge from './assets/component/UserBadge';
import ErrorDisplay from './assets/component/ErrorDisplay';
import SiteContent from './assets/component/SiteContent';
import ProductCard from './assets/component/ProductCard';
import NotificationCount from './assets/component/NotificationCount';
import AdminTools from './assets/component/AdminTools';
import DiscountBanner from './assets/component/DiscountBanner';
const App = () => {
  return (
    <div>
      <WelcomeMessage isLoggedIn={true}/>
      <RestrictedContent age={20} />
      <CustomButton onClick={true} /> 
      <UserBadge isPremium={true} />
      <ErrorDisplay errorMessage={""} />
      <SiteContent isUnderMaintenance={false} />
      <ProductCard isInStock={0} />
      <NotificationCount  notification={0} />
      <AdminTools userRole={"admisn"} />
      <DiscountBanner hasDiscount={true} />

    </div>
  );
};

export default App;
