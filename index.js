var express = require('express');
var userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');
const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/api', userRouter);
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})