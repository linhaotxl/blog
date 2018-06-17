const router = require( 'express' ).Router();

router.get( '/', ( req, res ) => {
    res.send( '注册页面' );
});

router.post( '/', ( req, res ) => {
    res.send( '注册' );
});

module.exports = router;