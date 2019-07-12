const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('connect', function () { 
    console.log('Redis client connected.'); 
});

redisClient.on('error', function(err){
    console.error('Some error occured while connecting to Redis' + err);
});

redisClient.set('sample key','sample value', redis.print);
redisClient.get('sample key', function(error, value){
    if(error) {
        console.error('Some error occured while retrieving key : ' + error);
        throw error;
    }
    console.info('Got value :: ' + value);
});