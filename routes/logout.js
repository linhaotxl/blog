const router = require( 'express' ).Router();

router.post( '/', ( req, res ) => {
    res.send( '登出' );
});

module.exports = router;