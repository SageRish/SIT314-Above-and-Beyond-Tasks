// smoke_detector.js
const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
var topic="/heat_detector_rishantmqtt33/1";
var message="";
var heat_level=0;

client.on('connect', () =>
{
    console.log('mqtt connected');

    setInterval(function() { //loops every second.
        message = heat_level.toString();
        client.publish(topic, message);
        console.log('published to Topic: ' + topic + " with Message: " + message);
        heat_level += 3;
    }, 1000);
});