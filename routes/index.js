const login     = require( './login' );     // 登录路由
const logout    = require( './logout' );    // 登出路由
const register  = require( './register' );  // 注册路由
const user      = require( './user' );      // 用户信息路由
const posts     = require( './posts' );     // 文章路由
const comments  = require( './comments' );  // 留言路由

const router = function ( app ) {
    // app.use( '/', ( req, res ) => {
    //     res.redirect( '/posts' );
    // });

    app.use( '/login', login );
    app.use( '/logout', logout );
    app.use( '/register', register );
    app.use( '/user', user );
    app.use( '/posts', posts );
    app.use( '/comments', comments );
    console.log( 1 )
}

module.exports = router;