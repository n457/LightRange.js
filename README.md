# LightRange.js
#### v.2.1.1

A **simple** and lightweight **selection, range and caret information** library in **native JavaScript**, with an additional selection **save & restore** system.

http://n457.github.io/LightRange.js/

![Screenshot](screenshot.png)



### Usage

LightRange.js is written in native JavaScript, so it **doesn't need any dependency**.
Just include [LightRange.min.js](LightRange.min.js) in `<head></head>` or just before `</body>` (**recommended**).

**Important** : [src/LightRange.ES6.js](src/LightRange.ES6.js) is the source code of the library, written in **ES6** and should be used directly for production in **very specific cases**. ES6 is a very recent JavaScript syntax, not supported by old browsers. The use of the minimized & regular JavaScript version [LightRange.min.js](LightRange.min.js) **is recommended**.

```html
  <script src="/your-custom-path/LightRange.min.js"></script>
  <script src="/another-path/your-script.js"></script>
</body>
```



### API

`lightrange.getSelectionInfo()` returns an `Object` (see below) or `null` if the feature is not supported by the browser.

* `xStart` : **X** coordinate at the **beginning** of the range, in **pixels**.
* `yStart` : **Y** coordinate at the **beginning** of the range, in **pixels**.
* `xEnd` : **X** coordinate at the **end** of the range, in **pixels**.
* `yEnd` : **Y** coordinate at the **end** of the range, in **pixels**.
* `width` : **Width** of the range.
* `height` : **Height** of the range.
* `charStart` : Coordinate at the **beginning** of the range, in **characters number**.
* `charEnd` : Coordinate at the **end** of the range, in **characters number**.
* `characters` : **Number of characters** in the range, **without white spaces**.
* `charactersAll` : **Number of characters** in the range, **including white spaces**.
* `text` : **Text content** of the range.

**Note** : If you want to count more than characters (paragraphs, words, etc.), you can pass the LightRange.js `text` property to the [Countable.js](https://github.com/RadLikeWhoa/Countable) library.


`lightrange.saveSelection()` & `lightrange.restoreSelection()` return a `Range` object or `null` if the features are not supported by the browser.



### Compatibility

LightRange.js is compatible with **all modern browsers** and with **some old browsers** like **Internet Explorer 8**.

However, the library **doesn't provide charStart and charEnd for old browsers**.

It's compatible with `contenteditable` elements, but **not compatible** with editable `<input type="text" />` and `<textarea></textarea>` elements.



### Notes

* [src/LightRange.ES6.js](src/LightRange.ES6.js) is converted **from ES6 to regular JS** ([LightRange.min.js](LightRange.min.js)) via [Google Closure Compiler](https://closure-compiler.appspot.com/home).
* LightRange.js is based on the work of [Tim Down](https://github.com/timdown) and his Stack Overflow answers.
* This library is a very basic & lightweight alternative to the [Rangy](https://github.com/timdown/rangy) library (by [Tim Down](https://github.com/timdown)).
* If you like LightRange.js, star this repository so it can **easily be found** and then **help other developers**.



### License

LightRange.js is released under the [MIT License](LICENSE).
