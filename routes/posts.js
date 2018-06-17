const router = require( 'express' ).Router();

router.get( '/publish', ( req, res ) => {
    res.send( '发表一篇新的文章页面' );
});

router.post( '/publish', ( req, res ) => {
    res.send( '发表一篇新的文章' );
});

router.get( '/update/:postid', ( req, res ) => {
    res.send( `更新编号为 ${ req.params.postid } 的文章页面` );
});

router.post( '/update/:postid', ( req, res ) => {
    res.send( `更新编号为 ${ req.params.postid } 的文章` );
});

router.post( '/delete/:postid', ( req, res ) => {
    res.send( `删除编号为 ${ req.params.postid } 的文章` );
});

router.get( '/detail/:postid', ( req, res ) => {
    res.send( `编号为 ${ req.params.postid } 的文章详情` );
});

module.exports = router;