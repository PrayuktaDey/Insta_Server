// module.exports ={
//     // MONGOURI:"mongodb+srv://Prayukta:mimidey@insta-clone.eyhqg.mongodb.net/test",
//     // JWT_SECRET:"jjjherechutdwsfg",
//     SENDGRID_API:"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"
// }


if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod') 
// }else{
//     module.exports = require('./dev')
}
