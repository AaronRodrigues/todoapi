var config = {
       port: process.env.PORT || 2000,
       db: process.env.MOGOLAB_URI || "mongodb://localhost/todoapi"
}
module.exports = config;
