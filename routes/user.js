const router = require( 'express' ).Router();

router.get( '/update/:userid', ( req, res ) => {
    res.send( `编号为 ${ req.params.userid } 的用户信息页面` );
});

router.post( '/update/:userid', ( req, res ) => {
    res.send( `修改编号为 ${ req.params.userid } 的用户信息` );
});

module.exports = router;