# gatsby-plugin-stripe-elements

A simple plugin that adds ```stripe.js``` to every page on your Gatsby site. This is especially useful for building out a Stripe integration using Stripe [Elements](https://stripe.com/docs/elements).

Once ```stripe.js``` is added to your Gatsby site, you can use [Stripe's React Element components](https://github.com/stripe/react-stripe-elements) to integrate Elements into your site.

## How to use

1. Install using either npm or yarn:

```
yarn add gatsby-plugin-stripe-elements
```

or

```
npm install gatsby-plugin-stripe-elements
```

2. Add to ```gatsby-config.js```

```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-stripe-elements`,
  ]
}
```