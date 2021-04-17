const msgGateway = require('msg/src/gateway');

const msg = msgGateway({
  port: 3300,
  serviceName: 'chss-service-gateway'
})

msg.start();
