import 'dotenv/config'
import app from './app.js'
import connectDB from './config/mongodb.js'

const port = process.env.PORT || 7000
connectDB()


app.listen(port, ()=> console.log('Server started on PORT : ' + port))