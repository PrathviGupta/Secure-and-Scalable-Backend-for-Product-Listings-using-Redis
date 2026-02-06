const router = require('express').Router();

router.get('/products', (req, res) => {
  res.json({ message: 'Product list (cached)' });
});

router.post('/auth/login', (req, res) => {
  res.json({ token: 'jwt-token' });
});

module.exports = router;
