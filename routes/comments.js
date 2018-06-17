const router = require( 'express' ).Router();

router.post( '/publish', ( req, res ) => {
    res.send( '发表新的留言' );
});

router.post( '/delete/:commentid', ( req, res ) => {
    res.send( `删除编号为 ${ req.params.commentid } 的留言` );
});

module.exports = router;