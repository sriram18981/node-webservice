const redis = require('redis');


var redis_options = {};
redis_options.host =  (process.env.REDIS_PORT_6379_TCP_ADDR) ? process.env.REDIS_PORT_6379_TCP_ADDR : null;
redis_options.port = (process.env.REDIS_PORT_6379_TCP_PORT) ? process.env.REDIS_PORT_6379_TCP_PORT : '6379';

const redisClient = redis.createClient(redis_options);

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