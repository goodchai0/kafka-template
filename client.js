const { Kafka } = require('kafkajs')

// Create the client with the broker list
exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['192.168.0.101:9092'],
  })