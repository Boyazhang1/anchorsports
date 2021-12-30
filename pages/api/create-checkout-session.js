const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const DOMAIN =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://learning-next-js-git-master-boyazhang1.vercel.app/';


export default async (req, res) => {
  const {items, email} = req.body;

  const transformedItem = items.map((item) => ({
    price_data: {
      currency: 'cad',
      unit_amount: item.price,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
    description: item.description,
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: transformedItem,
    mode: 'payment',
    success_url: `${DOMAIN}/success`,
    cancel_url: `${DOMAIN}/product`,
  });
  res.json({ id: session.id });
  console.log(items);
  console.log(email);
};
