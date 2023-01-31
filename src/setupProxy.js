const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: REACT_APP_API_URL,
            changeOrigin: true,
        })
    );
    app.use(
        '/ws-message',
        createProxyMiddleware({
            target: REACT_APP_API_URL,
            changeOrigin: true,
            ws: true,
        })
    );
};
