try {
    const { minimumCoreVersion, Code } = require("./code.js");

    var started = false;

    const eventDeliverer = {
        messageIn: null,
        getLayoutIn: null,
        getCoreVersionIn: null,
        exitIn: null,
        layoutOut: null,
        coreVersionOut: null,
        exitDoneOut: null,
        controllerModificationOut: null,
    };

    const letMeListen = (name, f) => {
        try {
            if (name === 'messageIn' || name === 'getLayoutIn' || name === 'exitIn') {
                eventDeliverer[name] = f;
            }
        } catch (err) {

        }
    };

    eventDeliverer.layoutOut = (msg) => {
        try {
            LiquidCore.emit('layout', msg);
        } catch (err) {

        }
    };

    eventDeliverer.coreVersionOut = (msg) => {
        try {
            LiquidCore.emit('coreVersion', {});
        } catch (err) {

        }
    };

    eventDeliverer.exitDoneOut = (msg) => {
        try {
            LiquidCore.emit('exitDone', {});
        } catch (err) {

        }
    };

    eventDeliverer.controllerModificationOut = (msg) => {
        try {
            LiquidCore.emit('controllerModification', msg);
        } catch (err) {

        }
    };

    const vm = require('vm');

    LiquidCore.on('message', function (content) {
        if (eventDeliverer.messageIn) {
            try {
                eventDeliverer.messageIn(content);
            } catch (err) {

            }
        }
    });

    LiquidCore.on('getLayout', function (content) {
        if (eventDeliverer.getLayoutIn) {
            try {
                eventDeliverer.getLayoutIn(content);
            } catch (err) {

            }
        }
    });

    LiquidCore.on('exit', function (name) {
        try {
            eventDeliverer = {};
            process.exit(0);
        } catch (err) {

        }
    });

    LiquidCore.on('getCoreVersion', function (content) {
        if (!started) {
            if (!minimumCoreVersion || (minimumCoreVersion && content && minimumCoreVersion <= content)) {
                try {
                    vm.runInNewContext("", new Code(letMeListen, eventDeliverer).start());
                    started = true;
                } catch (err) {

                }
            } else {
                try {
                    LiquidCore.emit('layout', {
                        message: {
                            "widget": {
                                "type": "Text",
                                "text": "小程序内核版本过低"
                            },
                        }
                    });
                } catch (err) {

                }
            }
        }
        if (eventDeliverer.getCoreVersionIn) {
            try {
                eventDeliverer.getCoreVersionIn(content);
            } catch (err) {

            }
        }
    });

    LiquidCore.emit('coreVersion', {});

    // keep plugin running
    setInterval(function () { }, 1000);

    LiquidCore.emit('ready');
} catch (err) {

}