
const { Router } = require('express');

const { getUsers,
        postUser } = require('../controllers/usuarios');

const router = Router();


router.get('/', getUsers );

router.post('/', postUser );




module.exports = router;