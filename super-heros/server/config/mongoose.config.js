const mongoose = require('mongoose')
const database = "superheros2022"

mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>console.log(`Databse connection established: ${database}`))
.catch((err)=>console.log('Error ',err));