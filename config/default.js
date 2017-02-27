/**
 * Created by yangxin on 17-2-21.
 */
module.exports = {
    port : 3000,
    session : {
        secret : 'tally',
        key : 'tally',
        maxAge : 2592000000
    },
    mongodb : 'mongodb://localhost:27017/tally'
};
