
const { Router } = require('express');
const { check } = require('express-validator');
const { postCustomer } = require('../controllers/create-customers.controller');
const { getCustomer } = require('../controllers/get-customers.controller');
const { makeTransfer } = require('../controllers/make.transfer.controller');
const { validateFields } = require('../middlewares/validate-fields');
const { existEmail } = require('../utils/db-validators');
const router = Router();

router.post('/', [
    check('rut', 'El rut es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio o no es un correo válido').not().isEmpty().isEmail(),
    check('correo', 'El correo es obligatorio o no es un correo válido').custom( existEmail ),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check('banco', 'El banco es obligatorio').not().isEmpty(),
    check('tipocuenta', 'El tipo de la cuenta es obligatorio').not().isEmpty(),
    check('ncuenta', 'El número de cuenta es obligatorio').not().isEmpty(),], 
    validateFields
,postCustomer);
router.post('/transferir', makeTransfer);
router.get('/', getCustomer);




module.exports = router;