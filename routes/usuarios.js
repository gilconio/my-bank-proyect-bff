
const { Router } = require('express');
const { postCustomer } = require('../controllers/customer/customers.controller');
const router = Router();


/* router.get('/', getUsers ); */

router.post('/', postCustomer );




module.exports = router;