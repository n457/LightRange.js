// LightRange.js - A simple and lightweight selection, range and caret information library in native JavaScript.
// Version 1.1.1
// MIT License
// Copyright (c) 2015 Bertrand Vignaud-Lerouge / n457 - https://github.com/n457


function lightrange() {

  'use strict';

  var selection = {},
      range = {},

      rect = {},

      data = {};

  if (window.getSelection) {
    selection = window.getSelection();

    // If something is selected.
    if (selection.rangeCount > 0) {
      // With cloneRange() we create a perfect abstract copy of the range. We do not want to modify the real one.
      range = selection.getRangeAt(0).cloneRange();

      // getBoundingClientRect() gives us correct information about a range but not about a caret (returns 0 as coordinates (here we test a height of 0) ).
      // getClientRects() gives us correct information about a caret but not about a range (returns wrong coordinates).
      rect = range.getBoundingClientRect();
      if (rect.height === 0) {
        rect = range.getClientRects()[0];
      }

      // If the caret is on an empty line or if the range contains noting or new lines only, 'rect' will be undefined.
      if (rect) {
        data.width = rect.width;
        data.height = rect.height;

        // By default, x and y are calculated at the beginning of the range.
        data.xStart = rect.left;
        data.yStart = rect.top;
      }

      data.text = selection.toString();

      data.charStart = range.startOffset;
      data.charEnd = range.endOffset;
      data.length = data.charEnd - data.charStart;

      // Collapse the range to its end.
      range.collapse(false);
      // We have to update the rect with getClientRects() because the range became a caret.
      rect = range.getClientRects()[0];

      if (rect) {
        data.xEnd = rect.left;
        data.yEnd = rect.top;
      }

    }
  }

  // Some properties can be undefined. This is fine, because it's easier for developers to handle special cases. So we prefer returning nothing than 0.
  return data;
}
