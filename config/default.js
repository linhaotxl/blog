module.exports = {
    port: 3001,
    mongodb: 'mongodb://localhost:27017/blog',
    session: {
        key: 'blog',
        secret: 'blog',
        maxAge: 60 * 60 * 1000  // 1小时
    }
};