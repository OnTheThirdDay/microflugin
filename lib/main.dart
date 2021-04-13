import 'package:flutter/material.dart';

import 'microflugin_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MicroFlugin Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'MicroFlugin Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  TextEditingController controller;

  @override
  void initState() {
    controller = TextEditingController(
        text: "https://github.com/OnTheThirdDay/microflugin/releases/download/app/sokoban.bundle");
    super.initState();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text("下面是一个推箱子的小程序，也可以替换成任意在线小程序包地址"),
            TextField(
              controller: controller,
            ),
            ElevatedButton(
              onPressed: () {
                if (controller.text != null && controller.text.length > 0) {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) =>
                          MicroFluginPage(pluginName: "test microflugin", pluginURI: controller.text)));
                }
              },
              child: Text("启动小程序"),
            ),
          ],
        ),
      ),
    );
  }
}
