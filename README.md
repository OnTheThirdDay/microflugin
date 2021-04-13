# microflugin

A (very primitive) framework for hybrid development

## Getting Started
- go to [flugin_dev](./flugin_dev)
- ```npm install```
- go to ```flugin_dev/node_modules/react-native/node_modules/metro/src/blacklist.js``` and change the first pattern of sharedBlacklist to ```/node_modules[\/\\]react[\/\\]dist[\/\\].*/```
- develop in ```code.js``` (a sokoban program is provided as a starting point)
- build with ```npm run bundler -- --platform=android --dev=false --minify``` or ```npm run bundler -- --platform=ios --dev=false --minify```
- test ```liquid.bundle``` with main app

## Execution Lifecycle and Communication
- ```index.js``` instantiates ```Code``` class in ```code.js```, with params ```letMeListen``` and ```eventDeliverer```
- The ```Code``` instance runs in VM and if it wanted to listen to any system-level calls from ```index.js```, it should do something like 
    ```
    // this can be getMessageIn or other getXXXIn
    this.letMeListen('getMessageIn', function (content) {

    });
    ```
- If the ```Code``` instance want to call a system-level call, it should do something like
    ```
    // this can be layoutOut or other xxxOut
    this.eventDeliverer.layoutOut({  });
    ```
- e.g. the instance finds the UI needs to be redrawn, e.g. into a red ```Container```, then it should do
    ```
    this.eventDeliverer.layoutOut({ 
        message: 
        {
            "widget":
            {
                "type": "Container",
                "color": "0x00ff0000",
            }
        }
    });
    ```
- If the ```Code``` instance want to fetch user input from e.g. a ```TextFormField``` once a button is pressed, assign a ```controllerId``` for this ```TextFormField```, and add an ```id``` and ```fetchValue``` in ```onPressed``` of the button
    ```
    {
        "type": "Row",
        "children": [
            {
                "type": "Expanded",
                "child": {
                    "type": "TextFormField",
                    "controllerId": "textfield0",
                },
            },
            {
                "type": "TextButton",
                "text": "send",
                "onPressed": {
                    "id": "onPressed0",
                    "fetchValues": ["textfield0"],
                },
            },
        ],
    },
    ```
    then listen to ```messageIn```
    ```
    this.letMeListen('messageIn', function (content) {
        if (content["triggerer"] === "onPressed") {
            if (content["id"] === "onPressed0") {
                // user input is content["fetchedValues"]["textfield0"]
                // empty user input field
                controllerModificationOut({ message: { 'textfield0': "" } });
            }
        }
    });
    ```

## Supported Calls(outbound)

### layout
Map<propertyName, propertyValue> Map["widget"]

### controllerModification
Map<controllerId, newValue>

## Supported Requests(inbound)

### getLayout

### message

## Supported Widgets

### Container
- child
- width
- height
- color
- padding[Left|Top|Right|Bottom]
- margin[Left|Top|Right|Bottom]
- alignment

### Expanded
- child
- flex

### Row
- mainAxisAlignment
- crossAxisAlignment
- mainAxisSize
- children

### Column
- mainAxisAlignment
- crossAxisAlignment
- mainAxisSize
- children

### Stack
- alignmentX
- alignmentY
- children

### Positioned
- child
- left
- right
- top
- bottom
- width
- height

### SingleChildScrollView
- child

### Text
- text
- textAlign

### TextFormField
- controllerId
- hint

### TextButton
- text
- Map onPressed
    - List<controllerIds> fetchValues
    - id

### GestureDetector
- Map onTap
    - List<controllerIds> fetchValues
    - id
- Map onDoubleTap
    - List<controllerIds> fetchValues
    - id
- Map onLongPress
    - List<controllerIds> fetchValues
    - id

### ImageFromNetwork
- url

### ImageFromBase64
- base64 (without data:image/xxx;base64,)

### Icon
- codePoint

### ListView
- children

## Not supported currently

### TabBar & TabBarView

### DropdownButton

### PopupMenuButton

### Checkbox

### Radio

### Date & Time Pickers

### Slider

### Switch

### Dialog

### ExpansionPanel

### GridView

### PageView

### CustomScrollView

### Ticker