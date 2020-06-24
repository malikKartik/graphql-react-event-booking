const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')
const isAuth = require('./middleware/isAuth')

const graphQlSchema = require('./graphql/schema/index')
const graphQlResolver = require('./graphql/resolvers/index')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json())
app.use(isAuth)

const user = async userId =>{
    try{
        const user = await User.findById(userId)
    }catch(e){
        throw e
    }

}

app.use('/graphql', graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolver ,
    graphiql: true
}))

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-u1akd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then((data)=>{
    // console.log(data)
    console.log("Connected to DB" + process.env.DB_NAME)
}).catch(err=>console.log(err))
app.listen(PORT,()=>{
    console.log("serving on port: " + PORT)
})