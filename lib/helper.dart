import 'package:flutter/material.dart';

class Helper {
  static Color colorFromString(String s) {
    return Color(
      int.tryParse(s ?? "") ?? 0,
    );
  }

  static MainAxisAlignment mainAxisAlignmentFromString(String s) {
    switch (s) {
      case "start":
        return MainAxisAlignment.start;
      case "center":
        return MainAxisAlignment.center;
      case "end":
        return MainAxisAlignment.end;
      case "spaceAround":
        return MainAxisAlignment.spaceAround;
      case "spaceBetween":
        return MainAxisAlignment.spaceBetween;
      case "spaceEvenly":
        return MainAxisAlignment.spaceEvenly;
      default:
        return MainAxisAlignment.start;
    }
  }

  static CrossAxisAlignment crossAxisAlignmentFromString(String s) {
    switch (s) {
      case "start":
        return CrossAxisAlignment.start;
      case "center":
        return CrossAxisAlignment.center;
      case "end":
        return CrossAxisAlignment.end;
      case "stretch":
        return CrossAxisAlignment.stretch;
      case "baseline":
        return CrossAxisAlignment.baseline;
      default:
        return CrossAxisAlignment.center;
    }
  }

  static MainAxisSize mainAxisSizeFromString(String s) {
    switch (s) {
      case "min":
        return MainAxisSize.min;
      case "max":
        return MainAxisSize.max;
      default:
        return MainAxisSize.min;
    }
  }

  static AlignmentGeometry alignmentGeometryFromString(String s) {
    switch (s) {
      case "center":
        return Alignment.center;
      case "topLeft":
        return Alignment.topLeft;
      case "topCenter":
        return Alignment.topCenter;
      case "topRight":
        return Alignment.topRight;
      case "centerLeft":
        return Alignment.centerLeft;
      case "centerRight":
        return Alignment.centerRight;
      case "bottomLeft":
        return Alignment.bottomLeft;
      case "bottomCenter":
        return Alignment.bottomCenter;
      case "bottomRight":
        return Alignment.bottomRight;
      default:
        return Alignment.center;
    }
  }

  static TextAlign textAlignFromString(String s) {
    switch (s) {
      case "center":
        return TextAlign.center;
      case "left":
        return TextAlign.left;
      case "right":
        return TextAlign.right;
      case "justify":
        return TextAlign.justify;
      case "start":
        return TextAlign.start;
      case "end":
        return TextAlign.end;
      default:
        return TextAlign.start;
    }
  }
}
