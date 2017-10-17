function callback() {
    console.log('I am a callback!')
}

var oldCall;

function f4(cb) {
    var newCall = Date.now();
    if (newCall - oldCall < 300 || oldCall == undefined) {
        oldCall = newCall
        console.log('wait 300 more milliseconds, then run again!')
    } else {
        oldCall = newCall
        return cb()
    }
}


f4(callback); // first execution.

setTimeout(function() {
    f4(callback)
}, 100); //100ms after the first execution. will not run callback.

setTimeout(function() {
    f4(callback)
}, 400); //400ms after the first execution, but only 300ms after the previous one. will run callback
