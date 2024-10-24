// Initialize the context to store the values of each sensor
var smokeValue = context.get('smokeValue') || null;
var fireValue = context.get('fireValue') || null;
var heat1Value = context.get('heat1Value') || null;
var heat2Value = context.get('heat2Value') || null;

// Assign the incoming value based on the topic
switch (msg.topic) {
    case '/smoke_detector_rishantmqtt33':
        smokeValue = msg.payload;
        context.set('smokeValue', smokeValue);
        break;
    case '/fire_detector_rishantmqtt33':
        fireValue = msg.payload;
        context.set('fireValue', fireValue);
        break;
    case '/heat_detector_rishantmqtt33/1':
        heat1Value = msg.payload;
        context.set('heat1Value', heat1Value);
        break;
    case '/heat_detector_rishantmqtt33/2':
        heat2Value = msg.payload;
        context.set('heat2Value', heat2Value);
        break;
}

// Check if all sensor values have been received
if (smokeValue !== null && fireValue !== null && heat1Value !== null && heat2Value !== null) {
    // Check the conditions for each sensor
    if (smokeValue > 10 && fireValue > 50 && heat1Value > 30 && heat2Value > 20) {
        // Output 'Fire Confirmed' if all conditions are met
        return { payload: "Fire Confirmed" };
    } else {
        // Reset the context values if conditions are not met
        context.set('smokeValue', null);
        context.set('fireValue', null);
        context.set('heat1Value', null);
        context.set('heat2Value', null);
        return null;  // No output if conditions are not met
    }
}