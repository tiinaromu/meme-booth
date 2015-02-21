'use strict';

module.exports = {
  MONGODB: process.env.MONGOLAB_URI || process.env.MONGODB || '',
  PHOTOSDATADIR: process.env.PHOTOSDATADIR || 'photos',
  KNOX_KEY: process.env.KNOX_KEY || '',
  KNOX_SECRET: process.env.KNOX_SECRET || '',
  KNOX_BUCKET: process.env.KNOX_BUCKET || '',
  KNOX_REGION: process.env.KNOX_REGION || '',
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY || '',
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET || '',
  TWITTER_TOKEN: process.env.TWITTER_TOKEN || '',
  TWITTER_TOKEN_SECRET: process.env.TWITTER_TOKEN_SECRET || '',
  USERNAME: process.env.USERNAME || '',
  PASSWORD: process.env.PASSWORD || ''
};
