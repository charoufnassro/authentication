module.exports = {
    Query: {
        getUsers: async () => {
            try {
                return await User.find({});
            } catch(e) {
                return e.message;
            }
        },
    },
    Mutation: {
        addUser: async (_, args) => {
            try { 
                let response = await User.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        },
    }
}