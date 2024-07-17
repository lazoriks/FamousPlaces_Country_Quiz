const total = require('total4');
const http = require('http');

const port = process.env.PORT || 8000;  


const app = total.HTTP('debug');


app.route('/', function() {
    this.plain('Hello, World!');
});


http.createServer(app).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
