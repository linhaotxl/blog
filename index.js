const path       = require( 'path' );
const express    = require( 'express' );
const session    = require( 'express-session' );
const MongoStore = require( 'connect-mongo' )( session );
const config     = require( 'config-lite' )( __dirname );
const app        = express();

const router = require( './routes' );
console.log( router );

// 设置模板引擎
app.set( 'views', path.resolve( __dirname, 'views' ) );  // 设置存放模板文件的目录
app.set( 'view engine', 'ejs' );                         // 设置模板引擎为 ejs

// 设置静态资源路径
app.use( express.static( path.resolve( __dirname, 'public' ) ) );

// 注册 session 
app.use( session({
    name: config.session.name,  // cookie 保存 session id 的键名
    secret: config.session.secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: config.session.maxAge
    },
    // store: new MongoStore({ // 将 session 信息存储到 mongodb 中，持久化
    //     url: config.mongodb
    // })
}));

// 注册路由
router( app );

app.listen( 3001 );