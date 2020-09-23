import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceToCents = price * 100;
  const publishbleKey =
    "pk_test_51H21vEL37GrW3rTgFD9IYQ3uTzcm66S8GU6ee4khfRinCXNOicIaazI6l0sLxXlwMSdPTvd3Q0aiPTe09XOLE4Gl00snYcwan7";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Crown Brand Clothing"
        billingAddress
        shippingAddress
        description={`Your Total is $${price}`}
        image="https://sendeyo.com/up/d/f3eb2117da"
        amount={priceToCents}
        stripeKey={publishbleKey}
        panelLabel="Pay Now"
        token={onToken}
      />
    </div>
  );
};

export default StripeCheckoutButton;
