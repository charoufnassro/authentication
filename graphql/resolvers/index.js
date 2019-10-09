const userResolver = require('./User');


const rootResolver = {
    ...userResolver,   
}

module.exports = rootResolver;