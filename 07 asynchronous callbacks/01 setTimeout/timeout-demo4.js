function sleep(duration) {
    const startTime = Date.now();
    while(Date.now() < startTime + duration){
        // do nothing
    }
}

function callback1() {
    console.log('callback 1 started');
    console.log('callback 1 finished');
}

function callback2() {
    console.log('callback 2 started ');
    console.log('callback 2 is working ...');
    sleep(5000);
    console.log('callback 2 finished');
}

function callback3() {
    console.log('callback 3 started');
    console.log('callback 3 finished');
}

setTimeout(callback1, 500);
setTimeout(callback2, 1000);
setTimeout(callback3, 2000);

/*
notice: callback 3 is executed too late (>= 6 seconds after program start)
reason: callback 2 blocks the thread for 5 seconds (remember: Node.js is single-threaded)
conclusion: blocking code must be avoided

That's why Node.js offloads operations to the system kernel whenever possible.

Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js, so that the appropriate callback can be executed.
*/