
const resolvers = {
    Query: {
        ad: async (_, {adId}) => {
            return {description:"hello world"}
        }
    }
};
module.exports = resolvers;