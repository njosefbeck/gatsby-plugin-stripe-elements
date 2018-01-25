import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  return setPostBodyComponents([
    <script
      key={`gatsby-plugin-stripe-elements`}
      src="https://js.stripe.com/v3/"
    >
    </script>
  ]);
}