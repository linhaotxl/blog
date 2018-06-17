const router = require( 'express' ).Router();

// 登录页面
router.get( '/', ( req, res ) => {
    res.render( 'login' );
})

router.post( '/', ( req, res ) => {
    res.send( '登录' );
});

module.exports = router;