
export var minimumCoreVersion = 1;

export class Code {
    constructor(letMeListen, eventDeliverer) {
        let currentMP = this;
        currentMP.letMeListen = letMeListen;
        currentMP.eventDeliverer = eventDeliverer;
    }
    start() {
        let currentMP = this;
        var spaces =
            `
wwwwwwwwwwwww,
wwwwwwsswssww,
wwwwwwsssssww,
wwwwwwsswssww,
wssswwwswssww,
wssswsssswssw,
wsssssssssssw,
wssswsssswssw,
wssswwwswssww,
wwwwwwsssssww,
wwwwwwsswssww,
wwwwwwwwwwwww
`
            ;

        var splitSpacesIntoYX = () => {
            return spaces.split(',').map((r) => {
                return r.trim().split("");
            });
        }

        var p = {
            x: 7,
            y: 10,
        };

        var boxes = [
            {
                x: 8,
                y: 2,
            },
            {
                x: 9,
                y: 2,
            },
            {
                x: 7,
                y: 3,
            },
            {
                x: 7,
                y: 5,
            },
            {
                x: 6,
                y: 6,
            },
            {
                x: 8,
                y: 6,
            },
            {
                x: 10,
                y: 6,
            },
            {
                x: 7,
                y: 7,
            },
            {
                x: 7,
                y: 9,
            }
        ];

        var destinations = [
            {
                x: 1,
                y: 4,
            },
            {
                x: 2,
                y: 4,
            },
            {
                x: 3,
                y: 4,
            },
            {
                x: 1,
                y: 5,
            },
            {
                x: 1,
                y: 6,
            },
            {
                x: 1,
                y: 7,
            },
            {
                x: 1,
                y: 8,
            },
            {
                x: 2,
                y: 8,
            },
            {
                x: 3,
                y: 8,
            },
        ];

        var reset = () => {
            p = {
                x: 7,
                y: 10,
            };
            boxes = [
                {
                    x: 8,
                    y: 2,
                },
                {
                    x: 9,
                    y: 2,
                },
                {
                    x: 7,
                    y: 3,
                },
                {
                    x: 7,
                    y: 5,
                },
                {
                    x: 6,
                    y: 6,
                },
                {
                    x: 8,
                    y: 6,
                },
                {
                    x: 10,
                    y: 6,
                },
                {
                    x: 7,
                    y: 7,
                },
                {
                    x: 7,
                    y: 9,
                }
            ];
            destinations = [
                {
                    x: 1,
                    y: 4,
                },
                {
                    x: 2,
                    y: 4,
                },
                {
                    x: 3,
                    y: 4,
                },
                {
                    x: 1,
                    y: 5,
                },
                {
                    x: 1,
                    y: 6,
                },
                {
                    x: 1,
                    y: 7,
                },
                {
                    x: 1,
                    y: 8,
                },
                {
                    x: 2,
                    y: 8,
                },
                {
                    x: 3,
                    y: 8,
                },
            ];
        }

        var layout = () => {
            return {
                "widget":
                {
                    "type": "Row",
                    "children": [
                        {
                            "type": "Column",
                            "children": spaces.split(',').map((r, yy) => {
                                return {
                                    "type": "Row",
                                    "children": r.trim().split("").map((e, xx) => {
                                        if (boxes.find((b) => xx === b.x && yy === b.y)) {
                                            return {
                                                "type": "Container",
                                                "height": "20",
                                                "width": "20",
                                                "color": "0xffaaaaaa",
                                                "child": {
                                                    "type": "Text",
                                                    "text": ""
                                                }
                                            };
                                        }
                                        if (xx === p.x && yy === p.y) {
                                            return {
                                                "type": "Container",
                                                "height": "20",
                                                "width": "20",
                                                "color": "0xff00ff00",
                                                "child": {
                                                    "type": "Text",
                                                    "text": ""
                                                }
                                            };
                                        }
                                        if (destinations.find((d) => xx === d.x && yy === d.y)) {
                                            return {
                                                "type": "Container",
                                                "height": "20",
                                                "width": "20",
                                                "color": "0xff0000ff",
                                                "child": {
                                                    "type": "Text",
                                                    "text": ""
                                                }
                                            };
                                        }
                                        if (e === "w") {
                                            return {
                                                "type": "Container",
                                                "height": "20",
                                                "width": "20",
                                                "color": "0xff000000",
                                                "child": {
                                                    "type": "null"
                                                },
                                            };
                                        }
                                        if (e === "s") {
                                            return {
                                                "type": "Container",
                                                "height": "20",
                                                "width": "20",
                                                "color": "0xffffffff",
                                                "child": {
                                                    "type": "null"
                                                },
                                            };
                                        }
                                    })
                                }
                            }).concat([
                                {
                                    "type": "Row",
                                    "mainAxisAlignment": "center",
                                    "children": [
                                        {
                                            "type": "TextButton",
                                            "text": "↑",
                                            "onPressed": {
                                                "id": "onPressedUp",
                                                "fetchValues": [],
                                            },
                                        },
                                    ],
                                },
                                {
                                    "type": "Row",
                                    "children": [
                                        {
                                            "type": "TextButton",
                                            "text": "←",
                                            "onPressed": {
                                                "id": "onPressedLeft",
                                                "fetchValues": [],
                                            },
                                        },
                                        {
                                            "type": "TextButton",
                                            "text": "",
                                            "onPressed": {
                                                "id": "null",
                                                "fetchValues": [],
                                            },
                                        },
                                        {
                                            "type": "TextButton",
                                            "text": "→",
                                            "onPressed": {
                                                "id": "onPressedRight",
                                                "fetchValues": [],
                                            },
                                        },
                                    ],
                                },
                                {
                                    "type": "Row",
                                    "mainAxisAlignment": "center",
                                    "children": [
                                        {
                                            "type": "TextButton",
                                            "text": "↓",
                                            "onPressed": {
                                                "id": "onPressedDown",
                                                "fetchValues": [],
                                            },
                                        },
                                    ],
                                },
                            ]),
                        },
                        {
                            "type": "Column",
                            "children": [
                                {
                                    "type": "TextButton",
                                    "text": "restart",
                                    "onPressed": {
                                        "id": "onRestart",
                                        "fetchValues": [],
                                    },
                                },
                                {
                                    "type": "SingleChildScrollView",
                                    "child": {
                                        "type": "Container",
                                        "color": "0x00000000",
                                        "child": {
                                            "type": "Text",
                                            "text": "蓝色目标\n黑色墙\n灰色箱子\n绿色人"
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            };
        };

        currentMP.letMeListen('messageIn', function (content) {
            if (content["triggerer"] === "onPressed") {
                if (content["id"] === "onRestart") {
                    reset();
                }
                let yxSpaces = splitSpacesIntoYX();
                let i = -1;
                let j = -1;
                if (content["id"] === "onPressedLeft") {
                    i = boxes.findIndex((b) => p.y == b.y && p.x - 1 == b.x);
                    j = boxes.findIndex((b) => p.y == b.y && p.x - 2 == b.x);
                    if (i >= 0 && j < 0) {
                        if (yxSpaces[boxes[i].y][boxes[i].x - 1] === "w") {

                        } else {
                            p.x -= 1;
                            boxes[i].x -= 1;
                        }
                    } else if (i >= 0 && j >= 0) {

                    } else if (yxSpaces[p.y][p.x - 1] === "w") {

                    } else {
                        p.x -= 1;
                    }
                }
                if (content["id"] === "onPressedRight") {
                    i = boxes.findIndex((b) => p.y == b.y && p.x + 1 == b.x);
                    j = boxes.findIndex((b) => p.y == b.y && p.x + 2 == b.x);
                    if (i >= 0 && j < 0) {
                        if (yxSpaces[boxes[i].y][boxes[i].x + 1] === "w") {

                        } else {
                            p.x += 1;
                            boxes[i].x += 1;
                        }
                    } else if (i >= 0 && j >= 0) {

                    } else if (yxSpaces[p.y][p.x + 1] === "w") {

                    } else {
                        p.x += 1;
                    }
                }
                if (content["id"] === "onPressedUp") {
                    i = boxes.findIndex((b) => p.y - 1 == b.y && p.x == b.x);
                    j = boxes.findIndex((b) => p.y - 2 == b.y && p.x == b.x);
                    if (i >= 0 && j < 0) {
                        if (yxSpaces[boxes[i].y - 1][boxes[i].x] === "w") {

                        } else {
                            p.y -= 1;
                            boxes[i].y -= 1;
                        }
                    } else if (i >= 0 && j >= 0) {

                    } else if (yxSpaces[p.y - 1][p.x] === "w") {

                    } else {
                        p.y -= 1;
                    }
                }
                if (content["id"] === "onPressedDown") {
                    i = boxes.findIndex((b) => p.y + 1 == b.y && p.x == b.x);
                    j = boxes.findIndex((b) => p.y + 2 == b.y && p.x == b.x);
                    if (i >= 0 && j < 0) {
                        if (yxSpaces[boxes[i].y + 1][boxes[i].x] === "w") {

                        } else {
                            p.y += 1;
                            boxes[i].y += 1;
                        }
                    } else if (i >= 0 && j >= 0) {

                    } else if (yxSpaces[p.y + 1][p.x] === "w") {

                    } else {
                        p.y += 1;
                    }
                }
            }
            currentMP.eventDeliverer.layoutOut({ message: layout() });
        });

        currentMP.letMeListen('getLayoutIn', function (content) {
            currentMP.eventDeliverer.layoutOut({ message: layout() });
        });
    }
}