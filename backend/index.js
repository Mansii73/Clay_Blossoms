const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/user', require('./routers/UserRouter'));
app.use('/product', require('./routers/productRoutes'));
app.use('/order', require('./routers/orderRoutes'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);