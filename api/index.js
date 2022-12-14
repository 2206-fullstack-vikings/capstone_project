const apiRouter = require('express').Router();

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});

// place your routers here
// ROUTER: /api/products
const productsRouter = require('./products');
apiRouter.use('/products', productsRouter);

// place your routers here
// ROUTER: /api/users
const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);
//ROUTER: /api/cart
const cartRouter = require('./cart');
apiRouter.use('/cart', cartRouter);

const orderRouter= require('./order');
apiRouter.use('/order', orderRouter)


module.exports = apiRouter;
