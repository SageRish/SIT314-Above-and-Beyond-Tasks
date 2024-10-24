// smoke_detector.js
const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
var topic="/fire_detector_rishantmqtt33";
var message="";
var fire_level=0;

client.on('connect', () =>
{
    console.log('mqtt connected');

    setInterval(function() { //loops every second.
        message = fire_level.toString();
        client.publish(topic, message);
        console.log('published to Topic: ' + topic + " with Message: " + message);
        fire_level += 4;
    }, 1000);
});