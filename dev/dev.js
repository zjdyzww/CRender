var dev = (function (React, ReactDOM) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "html,\nbody,\n#root,\ncanvas {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n}\n";
  styleInject(css_248z);

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var Status;
  (function (Status) {
      Status["STATIC"] = "STATIC";
      Status["HOVER"] = "HOVER";
      Status["ACTIVE"] = "ACTIVE";
      Status["DRAG"] = "DRAG";
  })(Status || (Status = {}));

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  function __spreadArrays$1() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var ColorKeywords;

  (function (ColorKeywords) {
    ColorKeywords["transparent"] = "rgba(0,0,0,0)";
    ColorKeywords["black"] = "#000000";
    ColorKeywords["silver"] = "#C0C0C0";
    ColorKeywords["gray"] = "#808080";
    ColorKeywords["white"] = "#FFFFFF";
    ColorKeywords["maroon"] = "#800000";
    ColorKeywords["red"] = "#FF0000";
    ColorKeywords["purple"] = "#800080";
    ColorKeywords["fuchsia"] = "#FF00FF";
    ColorKeywords["green"] = "#008000";
    ColorKeywords["lime"] = "#00FF00";
    ColorKeywords["olive"] = "#808000";
    ColorKeywords["yellow"] = "#FFFF00";
    ColorKeywords["navy"] = "#000080";
    ColorKeywords["blue"] = "#0000FF";
    ColorKeywords["teal"] = "#008080";
    ColorKeywords["aqua"] = "#00FFFF";
    ColorKeywords["aliceblue"] = "#f0f8ff";
    ColorKeywords["antiquewhite"] = "#faebd7";
    ColorKeywords["aquamarine"] = "#7fffd4";
    ColorKeywords["azure"] = "#f0ffff";
    ColorKeywords["beige"] = "#f5f5dc";
    ColorKeywords["bisque"] = "#ffe4c4";
    ColorKeywords["blanchedalmond"] = "#ffebcd";
    ColorKeywords["blueviolet"] = "#8a2be2";
    ColorKeywords["brown"] = "#a52a2a";
    ColorKeywords["burlywood"] = "#deb887";
    ColorKeywords["cadetblue"] = "#5f9ea0";
    ColorKeywords["chartreuse"] = "#7fff00";
    ColorKeywords["chocolate"] = "#d2691e";
    ColorKeywords["coral"] = "#ff7f50";
    ColorKeywords["cornflowerblue"] = "#6495ed";
    ColorKeywords["cornsilk"] = "#fff8dc";
    ColorKeywords["crimson"] = "#dc143c";
    ColorKeywords["cyan"] = "#00ffff";
    ColorKeywords["darkblue"] = "#00008b";
    ColorKeywords["darkcyan"] = "#008b8b";
    ColorKeywords["darkgoldenrod"] = "#b8860b";
    ColorKeywords["darkgray"] = "#a9a9a9";
    ColorKeywords["darkgreen"] = "#006400";
    ColorKeywords["darkgrey"] = "#a9a9a9";
    ColorKeywords["darkkhaki"] = "#bdb76b";
    ColorKeywords["darkmagenta"] = "#8b008b";
    ColorKeywords["darkolivegreen"] = "#556b2f";
    ColorKeywords["darkorange"] = "#ff8c00";
    ColorKeywords["darkorchid"] = "#9932cc";
    ColorKeywords["darkred"] = "#8b0000";
    ColorKeywords["darksalmon"] = "#e9967a";
    ColorKeywords["darkseagreen"] = "#8fbc8f";
    ColorKeywords["darkslateblue"] = "#483d8b";
    ColorKeywords["darkslategray"] = "#2f4f4f";
    ColorKeywords["darkslategrey"] = "#2f4f4f";
    ColorKeywords["darkturquoise"] = "#00ced1";
    ColorKeywords["darkviolet"] = "#9400d3";
    ColorKeywords["deeppink"] = "#ff1493";
    ColorKeywords["deepskyblue"] = "#00bfff";
    ColorKeywords["dimgray"] = "#696969";
    ColorKeywords["dimgrey"] = "#696969";
    ColorKeywords["dodgerblue"] = "#1e90ff";
    ColorKeywords["firebrick"] = "#b22222";
    ColorKeywords["floralwhite"] = "#fffaf0";
    ColorKeywords["forestgreen"] = "#228b22";
    ColorKeywords["gainsboro"] = "#dcdcdc";
    ColorKeywords["ghostwhite"] = "#f8f8ff";
    ColorKeywords["gold"] = "#ffd700";
    ColorKeywords["goldenrod"] = "#daa520";
    ColorKeywords["greenyellow"] = "#adff2f";
    ColorKeywords["grey"] = "#808080";
    ColorKeywords["honeydew"] = "#f0fff0";
    ColorKeywords["hotpink"] = "#ff69b4";
    ColorKeywords["indianred"] = "#cd5c5c";
    ColorKeywords["indigo"] = "#4b0082";
    ColorKeywords["ivory"] = "#fffff0";
    ColorKeywords["khaki"] = "#f0e68c";
    ColorKeywords["lavender"] = "#e6e6fa";
    ColorKeywords["lavenderblush"] = "#fff0f5";
    ColorKeywords["lawngreen"] = "#7cfc00";
    ColorKeywords["lemonchiffon"] = "#fffacd";
    ColorKeywords["lightblue"] = "#add8e6";
    ColorKeywords["lightcoral"] = "#f08080";
    ColorKeywords["lightcyan"] = "#e0ffff";
    ColorKeywords["lightgoldenrodyellow"] = "#fafad2";
    ColorKeywords["lightgray"] = "#d3d3d3";
    ColorKeywords["lightgreen"] = "#90ee90";
    ColorKeywords["lightgrey"] = "#d3d3d3";
    ColorKeywords["lightpink"] = "#ffb6c1";
    ColorKeywords["lightsalmon"] = "#ffa07a";
    ColorKeywords["lightseagreen"] = "#20b2aa";
    ColorKeywords["lightskyblue"] = "#87cefa";
    ColorKeywords["lightslategray"] = "#778899";
    ColorKeywords["lightslategrey"] = "#778899";
    ColorKeywords["lightsteelblue"] = "#b0c4de";
    ColorKeywords["lightyellow"] = "#ffffe0";
    ColorKeywords["limegreen"] = "#32cd32";
    ColorKeywords["linen"] = "#faf0e6";
    ColorKeywords["magenta"] = "#ff00ff";
    ColorKeywords["mediumaquamarine"] = "#66cdaa";
    ColorKeywords["mediumblue"] = "#0000cd";
    ColorKeywords["mediumorchid"] = "#ba55d3";
    ColorKeywords["mediumpurple"] = "#9370db";
    ColorKeywords["mediumseagreen"] = "#3cb371";
    ColorKeywords["mediumslateblue"] = "#7b68ee";
    ColorKeywords["mediumspringgreen"] = "#00fa9a";
    ColorKeywords["mediumturquoise"] = "#48d1cc";
    ColorKeywords["mediumvioletred"] = "#c71585";
    ColorKeywords["midnightblue"] = "#191970";
    ColorKeywords["mintcream"] = "#f5fffa";
    ColorKeywords["mistyrose"] = "#ffe4e1";
    ColorKeywords["moccasin"] = "#ffe4b5";
    ColorKeywords["navajowhite"] = "#ffdead";
    ColorKeywords["oldlace"] = "#fdf5e6";
    ColorKeywords["olivedrab"] = "#6b8e23";
    ColorKeywords["orange"] = "#ffa500";
    ColorKeywords["orangered"] = "#ff4500";
    ColorKeywords["orchid"] = "#da70d6";
    ColorKeywords["palegoldenrod"] = "#eee8aa";
    ColorKeywords["palegreen"] = "#98fb98";
    ColorKeywords["paleturquoise"] = "#afeeee";
    ColorKeywords["palevioletred"] = "#db7093";
    ColorKeywords["papayawhip"] = "#ffefd5";
    ColorKeywords["peachpuff"] = "#ffdab9";
    ColorKeywords["peru"] = "#cd853f";
    ColorKeywords["pink"] = "#ffc0cb";
    ColorKeywords["plum"] = "#dda0dd";
    ColorKeywords["powderblue"] = "#b0e0e6";
    ColorKeywords["rosybrown"] = "#bc8f8f";
    ColorKeywords["royalblue"] = "#4169e1";
    ColorKeywords["saddlebrown"] = "#8b4513";
    ColorKeywords["salmon"] = "#fa8072";
    ColorKeywords["sandybrown"] = "#f4a460";
    ColorKeywords["seagreen"] = "#2e8b57";
    ColorKeywords["seashell"] = "#fff5ee";
    ColorKeywords["sienna"] = "#a0522d";
    ColorKeywords["skyblue"] = "#87ceeb";
    ColorKeywords["slateblue"] = "#6a5acd";
    ColorKeywords["slategray"] = "#708090";
    ColorKeywords["snow"] = "#fffafa";
    ColorKeywords["springgreen"] = "#00ff7f";
    ColorKeywords["steelblue"] = "#4682b4";
    ColorKeywords["tan"] = "#d2b48c";
    ColorKeywords["thistle"] = "#d8bfd8";
    ColorKeywords["tomato"] = "#ff6347";
    ColorKeywords["turquoise"] = "#40e0d0";
    ColorKeywords["violet"] = "#ee82ee";
    ColorKeywords["wheat"] = "#f5deb3";
    ColorKeywords["whitesmoke"] = "#f5f5f5";
    ColorKeywords["yellowgreen"] = "#9acd32";
  })(ColorKeywords || (ColorKeywords = {}));

  var ColorKeywords$1 = ColorKeywords;

  /**
   * @description Test if a hex color
   * @param {string} color color string
   * @return {boolean} Test result
   */

  function isHex(color) {
    if (typeof color !== 'string') return false;
    color = color.toLowerCase();
    return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(color);
  }
  /**
   * @description Test if a rgba color
   * @param {string} color color string
   * @return {boolean} Test result
   */

  function isRgba(color) {
    if (typeof color !== 'string') return false;
    color = color.toLowerCase();
    return /^(rgba|RGBA)/.test(color);
  }
  /**
   * @description Test if a rgb or rgba color
   * @param {string} color color string
   * @return {boolean} Test result
   */

  function isRgbOrRgba(color) {
    return /^(rgb|rgba|RGB|RGBA)/.test(color);
  }
  /**
   * @description Get color by keyword
   * @param {keyof typeof ColorKeywords} keyword Color keyword like red, green and etc.
   * @return {ColorKeywords} Hex or rgba color
   */

  function getColorByKeyword(keyword) {
    return ColorKeywords$1[keyword];
  }
  /**
   * @description Color validator
   * @param {string} color Hex|Rgb|Rgba color or color keywords
   * @return {string} Color (Invalid input will throw an error)
   */


  function validator(color) {
    if (isHex(color) || isRgbOrRgba(color)) return color;
    var keywordColor = getColorByKeyword(color);
    if (!keywordColor) throw new Error("Color: Invalid Input of " + color);
    return keywordColor;
  }
  /**
   * @description Get the rgb value of the hex color
   * @param {string} color Hex color
   * @return {RgbValue} Rgb value of the color
   */


  function getRgbValueFromHex(color) {
    color = color.replace('#', '');
    if (color.length === 3) color = Array.from(color).map(function (hexNum) {
      return hexNum + hexNum;
    }).join('');
    var colorValues = color.split('');
    return new Array(3).fill(0).map(function (_, i) {
      return parseInt("0x" + colorValues[i * 2] + colorValues[i * 2 + 1]);
    });
  }
  /**
   * @description Get the rgb value of the rgb/rgba color
   * @param {string} color Hex color
   * @return {RgbValue} Rgb value of the color
   */


  function getRgbValueFromRgb(color) {
    return color.replace(/rgb\(|rgba\(|\)/g, '').split(',').slice(0, 3).map(function (n) {
      return parseInt(n);
    });
  }
  /**
   * @description Get the Rgb value of the color
   * @param {string} color Hex|Rgb|Rgba color or color keyword
   * @return {RgbValue} Rgb value of the color
   */


  function getRgbValue(color) {
    var validColor = validator(color);
    var lowerColor = validColor.toLowerCase();
    return isHex(lowerColor) ? getRgbValueFromHex(lowerColor) : getRgbValueFromRgb(lowerColor);
  }
  /**
   * @description Get the opacity of color
   * @param {string} color Hex|Rgb|Rgba color or color keyword
   * @return {number} Color opacity
   */

  function getOpacity(color) {
    var validColor = validator(color);
    if (!isRgba(validColor)) return 1;
    return Number(validColor.toLowerCase().split(',').slice(-1)[0].replace(/[)|\s]/g, ''));
  }
  /**
   * @description Get the Rgba value of the color
   * @param {string} color Hex|Rgb|Rgba color or color keyword
   * @return {RgbaValue} Rgba value of the color
   */

  function getRgbaValue(color) {
    var rgbValue = getRgbValue(color);
    return rgbValue && __spreadArrays$1(rgbValue, [getOpacity(color)]);
  }
  /**
   * @description Get Color from Rgb|Rgba value
   * @param {RgbValue|RgbaValue} value Rgb|Rgba color value
   * @return {string} Rgb|Rgba color
   */

  function getColorFromRgbValue(value) {
    if (!Array.isArray(value)) throw new Error("getColorFromRgbValue: " + value + " is not an array");
    var length = value.length;
    if (length !== 3 && length !== 4) throw new Error("getColorFromRgbValue: value length should be 3 or 4");
    return (length === 3 ? 'rgb(' : 'rgba(') + value.join(',') + ')';
  }

  /**
   * reverse: false | string    -> RgbaValue
   * reverse: true  | RgbaValue -> string
   */
  function transformColor(reverse) {
      return function (color) {
          var isString = typeof color === 'string';
          var isArray = Array.isArray(color);
          if (isString && reverse)
              return color;
          if (isArray && !reverse)
              return __spreadArrays(color);
          if (isString && !reverse)
              return getRgbaValue(color);
          if (isArray && reverse)
              return getColorFromRgbValue(color);
          throw new Error('CRender Style transformColor: Unexpected color!');
      };
  }
  function getCtxRealColorWithOpacity(opacity) {
      return function (color) {
          var _color = __spreadArrays(color);
          _color[3] * opacity;
          return getColorFromRgbValue(_color);
      };
  }
  function gradientColorValidator(style) {
      var gradientColor = style.gradientColor, gradientParams = style.gradientParams, gradientType = style.gradientType, gradientWith = style.gradientWith, gradientStops = style.gradientStops;
      if (!gradientColor || !gradientParams)
          return false;
      if (gradientColor.length === 1) {
          console.warn('CRender Style: The gradient needs to provide at least two colors');
          return false;
      }
      if (gradientType !== 'linear' && gradientType !== 'radial') {
          console.warn("CRender Style: GradientType only supports linear or radial, current value is " + gradientType);
          return false;
      }
      var gradientParamsLength = gradientParams.length;
      if ((gradientType === 'linear' && gradientParamsLength !== 4) ||
          (gradientType === 'radial' && gradientParamsLength !== 6)) {
          console.warn("CRender Style: The expected length of gradientParams is " + (gradientType === 'linear' ? '4' : '6'));
          return false;
      }
      if (gradientWith !== 'fill' && gradientWith !== 'stroke') {
          console.warn("CRender Style: GradientWith only supports fill or stroke, current value is " + gradientWith);
          return false;
      }
      if (gradientStops !== 'auto' && !(gradientStops instanceof Array)) {
          console.warn("CRender Style: gradientStops only supports 'auto' or Number Array ([0, .5, 1]), current value is " + gradientStops);
          return false;
      }
      return true;
  }
  function getAutoColorStops(color) {
      var stopGap = 1 / (color.length - 1);
      return color.map(function (foo, i) { return stopGap * i; });
  }

  var Style = /** @class */ (function () {
      function Style(style) {
          /**
           * @description Rgba value of graph fill color
           */
          this.fill = [0, 0, 0, 1];
          /**
           * @description Rgba value of graph stroke color
           */
          this.stroke = [0, 0, 0, 0];
          /**
           * @description Opacity of graph
           */
          this.opacity = 1;
          /**
           * @description LineCap of Ctx
           */
          this.lineCap = 'butt';
          /**
           * @description Linejoin of Ctx
           */
          this.lineJoin = 'miter';
          /**
           * @description LineDash of Ctx
           */
          this.lineDash = [];
          /**
           * @description LineDashOffset of Ctx
           */
          this.lineDashOffset = 0;
          /**
           * @description ShadowBlur of Ctx
           */
          this.shadowBlur = 0;
          /**
           * @description Rgba value of graph shadow color
           */
          this.shadowColor = [0, 0, 0, 0];
          /**
           * @description ShadowOffsetX of Ctx
           */
          this.shadowOffsetX = 0;
          /**
           * @description ShadowOffsetY of Ctx
           */
          this.shadowOffsetY = 0;
          /**
           * @description LineWidth of Ctx
           */
          this.lineWidth = 1;
          /**
           * @description Cursor status when hover
           */
          this.hoverCursor = 'pointer';
          /**
           * @description Font style of Ctx
           */
          this.fontStyle = 'normal';
          /**
           * @description Font varient of Ctx
           */
          this.fontVarient = 'normal';
          /**
           * @description Font weight of Ctx
           */
          this.fontWeight = 'normal';
          /**
           * @description Font size of Ctx
           */
          this.fontSize = 10;
          /**
           * @description Font family of Ctx
           */
          this.fontFamily = 'Arial';
          /**
           * @description TextAlign of Ctx
           */
          this.textAlign = 'center';
          /**
           * @description TextBaseline of Ctx
           */
          this.textBaseline = 'middle';
          /**
           * @description Gradient type
           */
          this.gradientType = 'linear';
          /**
           * @description When to use gradients
           */
          this.gradientWith = 'stroke';
          /**
           * @description Gradient color stops
           */
          this.gradientStops = 'auto';
          if (style)
              this.update(style);
      }
      Style.prototype.update = function (style) {
          Object.assign(this, Style.colorProcessor(style));
      };
      Style.colorProcessor = function (style, reverse) {
          var processedStyle = __assign({}, style);
          var transform = transformColor(reverse);
          if (processedStyle.fill)
              processedStyle.fill = transform(processedStyle.fill);
          if (processedStyle.stroke)
              processedStyle.stroke = transform(processedStyle.stroke);
          if (processedStyle.shadowColor)
              processedStyle.shadowColor = transform(processedStyle.shadowColor);
          processedStyle.gradientColor = (processedStyle.gradientColor || []).map(transform);
          if (reverse) {
              return processedStyle;
          }
          else {
              return processedStyle;
          }
      };
      Style.prototype.setCtx = function (ctx) {
          Style.setCtxTransform(ctx, this);
          Style.setCtxStyle(ctx, this);
          Style.setCtxGradientColor(ctx, this);
      };
      Style.setCtxTransform = function (ctx, style) {
          ctx.save();
          var graphCenter = style.graphCenter, rotate = style.rotate, scale = style.scale, translate = style.translate;
          if (!(graphCenter instanceof Array))
              return;
          ctx.translate.apply(ctx, graphCenter);
          if (rotate)
              ctx.rotate((rotate * Math.PI) / 180);
          if (scale instanceof Array)
              ctx.scale.apply(ctx, scale);
          if (translate)
              ctx.translate.apply(ctx, translate);
          ctx.translate(-graphCenter[0], -graphCenter[1]);
      };
      Style.setCtxStyle = function (ctx, style) {
          // Set directly
          ctx.lineCap = style.lineCap;
          ctx.lineJoin = style.lineJoin;
          ctx.lineDashOffset = style.lineDashOffset;
          ctx.shadowOffsetX = style.shadowOffsetX;
          ctx.shadowOffsetY = style.shadowOffsetY;
          ctx.lineWidth = style.lineWidth;
          ctx.textAlign = style.textAlign;
          ctx.textBaseline = style.textBaseline;
          // Merge global opacity into colors
          var fill = style.fill, stroke = style.stroke, shadowColor = style.shadowColor, opacity = style.opacity;
          var getCtxRealColor = getCtxRealColorWithOpacity(opacity);
          ctx.fillStyle = getCtxRealColor(fill);
          ctx.strokeStyle = getCtxRealColor(stroke);
          ctx.shadowColor = getCtxRealColor(shadowColor);
          var lineDash = style.lineDash, shadowBlur = style.shadowBlur;
          // Avoid negative values
          if (lineDash)
              ctx.setLineDash(lineDash.map(function (v) { return (v >= 0 ? v : 0); }));
          if (typeof shadowBlur === 'number')
              ctx.shadowBlur = shadowBlur > 0 ? shadowBlur : 0.001;
          // Set Ctx font
          var fontStyle = style.fontStyle, fontVarient = style.fontVarient, fontWeight = style.fontWeight, fontSize = style.fontSize, fontFamily = style.fontFamily;
          ctx.font = fontStyle + " " + fontVarient + " " + fontWeight + " " + fontSize + "px " + fontFamily;
      };
      Style.setCtxGradientColor = function (ctx, style) {
          if (!gradientColorValidator(style))
              return;
          var gradientColor = style.gradientColor, gradientParams = style.gradientParams, gradientType = style.gradientType, gradientWith = style.gradientWith, gradientStops = style.gradientStops, opacity = style.opacity;
          var getCtxRealColor = getCtxRealColorWithOpacity(opacity);
          var _gradientColor = gradientColor.map(getCtxRealColor);
          var _gradientStops = gradientStops === 'auto' ? getAutoColorStops(_gradientColor) : gradientStops;
          var gradient;
          if (gradientType === 'linear') {
              gradient = ctx.createLinearGradient.apply(ctx, gradientParams);
          }
          else {
              gradient = ctx.createRadialGradient.apply(ctx, gradientParams);
          }
          _gradientStops.forEach(function (stop, i) { return gradient.addColorStop(stop, _gradientColor[i]); });
          ctx[gradientWith === 'fill' ? 'fillStyle' : 'strokeStyle'] = gradient;
      };
      Style.prototype.restoreCtx = function (ctx) {
          ctx.restore();
      };
      return Style;
  }());

  /**
   * @description Get the coordinates of the rotated point
   */
  function getRotatePointPos(rotate, point, origin) {
      if (rotate === void 0) { rotate = 0; }
      if (origin === void 0) { origin = [0, 0]; }
      if (rotate % 360 === 0)
          return point;
      var x = point[0], y = point[1];
      var ox = origin[0], oy = origin[1];
      rotate *= Math.PI / 180;
      return [
          (x - ox) * Math.cos(rotate) - (y - oy) * Math.sin(rotate) + ox,
          (x - ox) * Math.sin(rotate) + (y - oy) * Math.cos(rotate) + oy,
      ];
  }
  /**
   * @description Get the coordinates of the scaled point
   */
  function getScalePointPos(scale, point, origin) {
      if (scale === void 0) { scale = [1, 1]; }
      if (origin === void 0) { origin = [0, 0]; }
      var x = point[0], y = point[1];
      var ox = origin[0], oy = origin[1];
      var xs = scale[0], ys = scale[1];
      var relativePosX = x - ox;
      var relativePosY = y - oy;
      return [relativePosX * xs + ox, relativePosY * ys + oy];
  }
  /**
   * @description Get the coordinates of the scaled point
   */
  function getTranslatePointPos(translate, point) {
      var x = point[0], y = point[1];
      var tx = translate[0], ty = translate[1];
      return [x + tx, y + ty];
  }
  /**
   * @description Check if the point is inside the rect
   */
  function checkPointIsInRect(_a, x, y, width, height) {
      var px = _a[0], py = _a[1];
      if (px < x)
          return false;
      if (py < y)
          return false;
      if (px > x + width)
          return false;
      if (py > y + height)
          return false;
      return true;
  }
  /**
   * @description Return a timed release Promise
   */
  function delay(time) {
      return new Promise(function (resolve) {
          setTimeout(resolve, time);
      });
  }

  // eslint-disable-next-line
  function deepClone(obj, cache) {
      if (cache === void 0) { cache = new Map([]); }
      if (obj === null || typeof obj !== 'object')
          return obj;
      if (cache.has(obj))
          return cache.get(obj);
      // eslint-disable-next-line
      var clone = Array.isArray(obj) ? [] : {};
      cache.set(obj, clone);
      // @ts-ignore
      Object.keys(obj).forEach(function (key) { return (clone[key] = deepClone(obj[key], cache)); });
      return clone;
  }

  var curves = new Map([]);
  /**
   * @description Get bezier curve by t
   * @param {TransitionCurve} transitionCurve transition curve
   * @param {number} t                        Current frame t
   * @return {BezierCurve} Bezier Curve
   */

  function getBezierCurveByT(transitionCurve, t) {
    var curveNum = transitionCurve.length;
    var lastIndex = curveNum - 1;
    var begin;
    var end;

    for (var i = 0; i < curveNum; i++) {
      if (i === lastIndex) continue;
      var segment = transitionCurve[i];
      begin = segment;
      end = transitionCurve[i + 1];
      var currentMainPointX = begin[0][0];
      var nextMainPointX = end[0][0];
      if (t >= currentMainPointX && t < nextMainPointX) break;
    }

    var p0 = begin[0];
    var p1 = begin[2] || begin[0];
    var p2 = end[1] || end[0];
    var p3 = end[0];
    return [p0, p1, p2, p3];
  }
  /**
   * @description Get bezier curve relative t
   * @param {BezierCurve} bezierCurve Bezier Curve
   * @param {number} t                Current frame t
   * @return {number} Relative t of bezier curve
   */


  function getBezierCurveRelativeT(bezierCurve, t) {
    var reBeginX = bezierCurve[0][0];
    var reEndX = bezierCurve[3][0];
    var xMinus = reEndX - reBeginX;
    var tMinus = t - reBeginX;
    return tMinus / xMinus;
  }
  /**
   * @description Get the bezier curve progress of t
   * @param {BezierCurve} bezierCurve Bezier curve
   * @param {number} t                Current frame t
   * @return {number} Progress of current frame
   */


  function getBezierCurveTProgress(_a, t) {
    var _b = _a[0],
        p0 = _b[1],
        _c = _a[1],
        p1 = _c[1],
        _d = _a[2],
        p2 = _d[1],
        _e = _a[3],
        p3 = _e[1];
    var tMinus = 1 - t;
    var result1 = p0 * Math.pow(tMinus, 3);
    var result2 = 3 * p1 * t * Math.pow(tMinus, 2);
    var result3 = 3 * p2 * Math.pow(t, 2) * tMinus;
    var result4 = p3 * Math.pow(t, 3);
    return 1 - (result1 + result2 + result3 + result4);
  }
  /**
   * @description Get frame progress at time t
   * @param {TransitionCurve} transitionCurve Transition bezier curve
   * @param {number} t                        Current frame t
   * @return {number} Progress of frame
   */


  function getFrameProgressByT(transitionCurve, t) {
    var bezierCurve = getBezierCurveByT(transitionCurve, t);
    var relativeT = getBezierCurveRelativeT(bezierCurve, t);
    return getBezierCurveTProgress(bezierCurve, relativeT);
  }
  /**
   * @description Get frame state progress by curve
   * @param {TransitionCurve|string} curve Transition curve or curve name extended
   * @param {number} frameNum              Frame number
   * @return {number[]} Frame state progress
   */


  function getFrameStateProgressByCurve(curve, frameNum) {
    var targetCurve;

    if (typeof curve === 'string') {
      targetCurve = curves.get(curve);
    } else {
      targetCurve = curve;
    }

    var tGap = 1 / (frameNum - 1);
    var tState = new Array(frameNum).fill(0).map(function (_, i) {
      return i * tGap;
    });
    return tState.map(function (t) {
      return getFrameProgressByT(targetCurve, t);
    });
  }

  /**
   * @description Linear
   */
  var linear = function linear(t, b, c, d) {
    return c * t / d + b;
  };
  /**
   * @description Sine
   */

  var easeInSine = function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  };
  var easeOutSine = function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  };
  var easeInOutSine = function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  };
  /**
   * @description Quad
   */

  var easeInQuad = function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
  };
  var easeOutQuad = function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  };
  var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
  };
  /**
   * @description Cubic
   */

  var easeInCubic = function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
  };
  var easeOutCubic = function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  };
  var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  };
  /**
   * @description Quart
   */

  var easeInQuart = function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  };
  var easeOutQuart = function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  };
  var easeInOutQuart = function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  };
  /**
   * @description Quint
   */

  var easeInQuint = function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  };
  var easeOutQuint = function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  };
  var easeInOutQuint = function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  };
  /**
   * @description Back
   */

  var easeInBack = function easeInBack(t, b, c, d) {
    var s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  };
  var easeOutBack = function easeOutBack(t, b, c, d) {
    var s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  };
  var easeInOutBack = function easeInOutBack(t, b, c, d) {
    var s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  };
  /**
   * @description Elastic
   */

  var easeInElastic = function easeInElastic(t, b, c, d) {
    if (t === 0) return b;
    if ((t /= d) === 1) return b + c;
    return -(c * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - d * 0.3 / 4) * (2 * Math.PI) / (d * 0.3))) + b;
  };
  var easeOutElastic = function easeOutElastic(t, b, c, d) {
    if (t === 0) return b;
    if ((t /= d) === 1) return b + c;
    return c * Math.pow(2, -10 * t) * Math.sin((t * d - d * 0.3 / 4) * (2 * Math.PI) / (d * 0.3)) + c + b;
  };
  var easeInOutElastic = function easeInOutElastic(t, b, c, d) {
    if (t === 0) return b;
    if ((t /= d / 2) === 2) return b + c;
    var p = d * (0.3 * 1.5);
    var s = p / 4;
    if (t < 1) return -0.5 * (c * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return c * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  };
  /**
   * @description Bounce
   */

  var easeOutBounce = function easeOutBounce(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    }

    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
  };
  var easeInBounce = function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
  };
  var easeInOutBounce = function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  };
  var tweens = new Map([['linear', linear], ['easeInSine', easeInSine], ['easeOutSine', easeOutSine], ['easeInOutSine', easeInOutSine], ['easeInQuad', easeInQuad], ['easeOutQuad', easeOutQuad], ['easeInOutQuad', easeInOutQuad], ['easeInCubic', easeInCubic], ['easeOutCubic', easeOutCubic], ['easeInOutCubic', easeInOutCubic], ['easeInQuart', easeInQuart], ['easeOutQuart', easeOutQuart], ['easeInOutQuart', easeInOutQuart], ['easeInQuint', easeInQuint], ['easeOutQuint', easeOutQuint], ['easeInOutQuint', easeInOutQuint], ['easeInBack', easeInBack], ['easeOutBack', easeOutBack], ['easeInOutBack', easeInOutBack], ['easeInElastic', easeInElastic], ['easeOutElastic', easeOutElastic], ['easeInOutElastic', easeInOutElastic], ['easeInBounce', easeInBounce], ['easeOutBounce', easeOutBounce], ['easeInOutBounce', easeInOutBounce]]);
  /**
   * @description Get frame state progress by tween
   * @param {TweenName} tweenName Tween name
   * @param {number} frameNum     Frame number
   * @return {number[]} Frame state progress
   */

  function getFrameStateProgressByTween(tweenName, frameNum) {
    if (frameNum === void 0) {
      frameNum = 30;
    }

    var _a = [0, 1],
        startState = _a[0],
        changeValue = _a[1];
    var tGap = frameNum / (frameNum - 1);
    var tweenFun = tweens.get(tweenName);
    return new Array(frameNum).fill(0).map(function (_, i) {
      return tweenFun(i * tGap, startState, changeValue, frameNum);
    });
  }

  function easeCurveValidator(easeCurve) {
    var isArray = easeCurve instanceof Array;
    var isCurve = curves.has(easeCurve);
    var isTween = tweens.has(easeCurve);
    if (isArray) return 'transitionCurve';
    if (isCurve) return 'transitionCurveName';
    if (isTween) return 'tween';
    throw new Error("Transition: Invalid ease curve of " + easeCurve);
  }
  function getFrameStateProgress(easeCurve, frameNum) {
    if (frameNum === void 0) {
      frameNum = 30;
    }

    var easeCurveType = easeCurveValidator(easeCurve);
    var calculator = easeCurveType === 'tween' ? getFrameStateProgressByTween : getFrameStateProgressByCurve;
    return calculator(easeCurve, frameNum);
  }

  function getType(target) {
    return Object.prototype.toString.call(target).replace(/\[object |\]/g, '').toLowerCase();
  } // eslint-disable-next-line


  function isNumber(target) {
    return Number.isFinite(target);
  } // eslint-disable-next-line


  function recursiveAble(target) {
    var type = getType(target);
    return type === 'array' || type === 'object';
  } // eslint-disable-next-line


  function transitionAble(startState) {
    var stateType = getType(startState);
    return ['number', 'array', 'object'].includes(stateType);
  } // eslint-disable-next-line


  function asNumber(target) {
    return target;
  }

  function createTargetArray(target, num) {
    return new Array(num).fill(0).map(function (_) {
      return target;
    });
  } // eslint-disable-next-line


  function updateTargetValues(target, values, key) {
    // eslint-disable-next-line
    target.forEach(function (_, i) {
      return _[key] = values[i];
    });
    return target;
  }

  function createInitState(isArray) {
    return isArray ? [] : {};
  }

  function getTransitionState(start, end, frameStateProgress) {
    var minus = end - start;
    return frameStateProgress.map(function (s) {
      return start + minus * s;
    });
  }

  function validator$1(easeCurve, startState, endState, frameNum) {
    var argTypes = [easeCurve, startState, endState, frameNum].map(getType);
    if (argTypes.find(function (_) {
      return _ === 'undefined';
    })) throw new Error('transition: Missing Parameters!');
    if (argTypes[1] !== argTypes[2]) throw new Error('transition: The start state type and the end state type are inconsistent!');
    if (argTypes[3] !== 'number' || frameNum <= 0) throw new Error("Transition: frameNum should be a number and greater than 1");
    easeCurveValidator(easeCurve);
    return true;
  }

  function recursiveTransition(startState, endState, frameStateProgress, deep) {
    var stateType = getType(startState);
    var length = frameStateProgress.length;
    if (stateType === 'number') return getTransitionState(asNumber(startState), asNumber(endState), frameStateProgress);
    var isArray = stateType === 'array';
    var state = new Array(length).fill(isArray).map(createInitState);

    for (var key in endState) {
      var start = startState[key];
      var end = endState[key]; // eslint-disable-next-line

      var keyState = [];

      if (isNumber(start) && isNumber(end)) {
        keyState = getTransitionState(asNumber(start), asNumber(end), frameStateProgress);
      } else if (recursiveAble(start) && recursiveAble(end) && deep) {
        keyState = recursiveTransition(start, end, frameStateProgress, deep);
      } else {
        keyState = createTargetArray(end, length);
      }

      state = updateTargetValues(state, keyState, key);
    }

    return state;
  }
  /**
   * @description Get the N-frame animation state by the start and end state
   *              of the animation and the ease curve
   * @param {EaseCurve} easeCurve Ease curve name or data
   * @param {Any} startState      Animation start state
   * @param {Any} endState        Animation end state
   * @param {Number} frameNum     Number of Animation frames
   * @param {Boolean} deep        Whether to use recursive mode
   * @return {Array} State of each frame of the animation
   */


  function transition(easeCurve, startState, endState, frameNum, deep) {
    if (frameNum === void 0) {
      frameNum = 30;
    }

    if (deep === void 0) {
      deep = false;
    }

    validator$1(easeCurve, startState, endState, frameNum);

    if (!transitionAble(startState)) {
      console.warn('Transition: Only supports array number and object types');
      return [startState, endState];
    }

    try {
      var frameStateProgress = getFrameStateProgress(easeCurve, frameNum);
      return recursiveTransition(startState, endState, frameStateProgress, deep);
    } catch (_a) {
      console.warn('Transition: parameter may be abnormal!');
      return [endState];
    }
  }

  // eslint-disable-next-line
  var Graph = /** @class */ (function () {
      function Graph(graphModel, config, render) {
          /**
           * @description Weather to render graph
           */
          this.visible = true;
          /**
           * @description Whether to enable drag
           */
          this.drag = false;
          /**
           * @description Whether to enable hover
           */
          this.hover = false;
          /**
           * @description Graph rendering index
           *  Give priority to index high graph in rendering
           */
          this.index = 1;
          /**
           * @description Animation delay time(ms)
           */
          this.animationDelay = 0;
          /**
           * @description Number of animation frames
           */
          this.animationFrame = 30;
          /**
           * @description Animation dynamic curve (Supported by transition)
           * @link https://github.com/jiaming743/Transition
           */
          this.animationCurve = 'linear';
          /**
           * @description Weather to pause graph animation
           */
          this.animationPause = false;
          /**
           * @description Graph current status
           */
          this.status = Status.STATIC;
          /**
           * @description Graph animation frame state
           */
          this.animationQueue = [];
          var shape = Object.assign({}, graphModel.shape, config.shape);
          var style = new Style(config.style);
          Object.assign(this, graphModel, config, {
              shape: shape,
              style: style,
          }, {
              status: Status.STATIC,
              animationRoot: [],
              animationKeys: [],
              animationFrameState: [],
              cache: {},
              render: render,
          });
          if (this.setGraphCenter)
              this.setGraphCenter(this);
          // The life cycle 'added'
          if (this.added)
              this.added();
      }
      Graph.prototype.drawProcessor = function () {
          var render = this.render;
          var ctx = render.ctx;
          this.style.setCtx(ctx);
          if (this.beforeDraw)
              this.beforeDraw(render);
          this.draw(render, this);
          if (this.drawed)
              this.drawed(render);
          this.style.restoreCtx(ctx);
      };
      Graph.prototype.hoverCheckProcessor = function (point) {
          var _a = this, hoverRect = _a.hoverRect, style = _a.style;
          var graphCenter = style.graphCenter, rotate = style.rotate, scale = style.scale, translate = style.translate;
          if (!this.hoverCheck)
              return false;
          if (graphCenter) {
              if (rotate)
                  point = getRotatePointPos(-rotate, point, graphCenter);
              if (scale)
                  point = getScalePointPos(scale.map(function (s) { return 1 / s; }), point, graphCenter);
              if (translate)
                  point = getTranslatePointPos(translate.map(function (v) { return v * -1; }), point);
          }
          if (hoverRect)
              return checkPointIsInRect.apply(void 0, __spreadArrays([point], hoverRect));
          return this.hoverCheck(point, this);
      };
      Graph.prototype.moveProcessor = function (e) {
          if (!this.move)
              return;
          if (this.beforeMove)
              this.beforeMove(e);
          this.move(e, this);
          if (this.moved)
              this.moved(e);
          if (this.setGraphCenter)
              this.setGraphCenter(this);
      };
      /**
       * @description Update graph attribute
       */
      Graph.prototype.attr = function (key, value, reDraw) {
          if (reDraw === void 0) { reDraw = true; }
          var isObject = typeof this[key] === 'object';
          if (isObject)
              value = deepClone(value);
          var render = this.render;
          if (key === 'style') {
              this.style.update(value);
          }
          else if (isObject) {
              Object.assign(this[key], value);
          }
          else {
              // @ts-ignore
              this[key] = value;
          }
          if (key === 'index')
              render.sortGraphsByIndex();
          if (reDraw)
              render.drawAllGraph();
      };
      Graph.prototype.animation = function (key, value, wait) {
          if (wait === void 0) { wait = false; }
          return __awaiter(this, void 0, void 0, function () {
              var valueRoot, valueKeys, beforeValue, _a, animationFrame, animationCurve, animationDelay, frameState, render;
              var _this = this;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          if (key !== 'shape' && key !== 'style') {
                              console.error('Graph animation: Only supported shape and style animation!');
                              return [2 /*return*/];
                          }
                          if (typeof value !== 'object') {
                              console.error('Graph animation: Shape or style must be an object!');
                              return [2 /*return*/];
                          }
                          value = deepClone(value);
                          if (key === 'style')
                              value = Style.colorProcessor(value);
                          valueRoot = this[key];
                          valueKeys = Object.keys(value);
                          beforeValue = valueKeys.reduce(function (state, currentKey) {
                              var _a;
                              return (__assign(__assign({}, state), (_a = {}, _a[currentKey] = valueRoot[currentKey], _a)));
                          }, Object.create(null));
                          _a = this, animationFrame = _a.animationFrame, animationCurve = _a.animationCurve, animationDelay = _a.animationDelay;
                          frameState = transition(animationCurve, beforeValue, value, animationFrame, true);
                          this.animationQueue.push({ key: key, frameState: frameState });
                          if (wait)
                              return [2 /*return*/];
                          if (!(animationDelay > 0)) return [3 /*break*/, 2];
                          return [4 /*yield*/, delay(animationDelay)];
                      case 1:
                          _b.sent();
                          _b.label = 2;
                      case 2:
                          render = this.render;
                          return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                  return __generator(this, function (_a) {
                                      switch (_a.label) {
                                          case 0: return [4 /*yield*/, render.launchAnimation()];
                                          case 1:
                                              _a.sent();
                                              resolve();
                                              return [2 /*return*/];
                                      }
                                  });
                              }); })];
                  }
              });
          });
      };
      /**
       * @description Extract the next frame of data from the animation queue
       * and update the graph state
       * @param timeStamp {number} Animation start timestamp
       */
      Graph.prototype.turnNextAnimationFrame = function (timeStamp) {
          var _this = this;
          var _a = this, animationPause = _a.animationPause, animationDelay = _a.animationDelay, animationQueue = _a.animationQueue;
          if (animationPause || Date.now() - timeStamp < animationDelay)
              return;
          this.animationQueue = animationQueue.reduce(function (queue, _a) {
              var key = _a.key, frameState = _a.frameState;
              Object.assign(_this[key], frameState.shift());
              if (frameState.length) {
                  return __spreadArrays(queue, [{ key: key, frameState: frameState }]);
              }
              else {
                  return queue;
              }
          }, []);
      };
      /**
       * @description Skip to the last frame of animation
       */
      Graph.prototype.animationEnd = function () {
          var _this = this;
          var _a = this, animationQueue = _a.animationQueue, render = _a.render;
          animationQueue.forEach(function (_a) {
              var key = _a.key, frameState = _a.frameState;
              return Object.assign(_this[key], frameState.pop());
          });
          this.animationQueue = [];
          return render.drawAllGraph();
      };
      /**
       * @description Pause animation behavior
       */
      Graph.prototype.pauseAnimation = function () {
          this.attr('animationPause', true);
      };
      /**
       * @description Try animate
       */
      Graph.prototype.playAnimation = function () {
          var _this = this;
          var render = this.render;
          this.attr('animationPause', false);
          return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, render.launchAnimation()];
                      case 1:
                          _a.sent();
                          resolve();
                          return [2 /*return*/];
                  }
              });
          }); });
      };
      /**
       * @description Processor of delete
       */
      Graph.prototype.delProcessor = function () {
          var _this = this;
          var graphs = this.render.graphs;
          var index = graphs.findIndex(function (graph) { return graph === _this; });
          if (index === -1)
              return;
          if (this.beforeDelete)
              this.beforeDelete();
          graphs.splice(index, 1);
          if (this.deleted)
              this.deleted();
      };
      return Graph;
  }());

  function getTwoPointDistance(_a, _b) {
      var xa = _a[0], ya = _a[1];
      var xb = _b[0], yb = _b[1];
      var minusX = Math.abs(xa - xb);
      var minusY = Math.abs(ya - yb);
      return Math.sqrt(minusX * minusX + minusY * minusY);
  }
  function checkPointIsInCircle(point, _a) {
      var rx = _a.rx, ry = _a.ry, r = _a.r;
      return getTwoPointDistance(point, [rx, ry]) <= r;
  }
  function checkPointIsInRect$1(_a, _b) {
      var px = _a[0], py = _a[1];
      var x = _b.x, y = _b.y, w = _b.w, h = _b.h;
      if (px < x)
          return false;
      if (py < y)
          return false;
      if (px > x + w)
          return false;
      if (py > y + h)
          return false;
      return true;
  }
  /**
   * @description Determine if the point is in the clockwise direction of the vector
   */
  function isClockWise(vArm, vPoint) {
      var ax = vArm[0], ay = vArm[1];
      var px = vPoint[0], py = vPoint[1];
      return -ay * px + ax * py > 0;
  }
  /**
   * @description Get the coordinates of the specified radian on the circle
   */
  function getCircleRadianPoint(x, y, radius, radian) {
      return [x + Math.cos(radian) * radius, y + Math.sin(radian) * radius];
  }
  function checkPointIsInSector(point, _a) {
      var _b, _c, _d;
      var rx = _a.rx, ry = _a.ry, r = _a.r, startAngle = _a.startAngle, endAngle = _a.endAngle, clockWise = _a.clockWise;
      if (!point)
          return false;
      if (getTwoPointDistance(point, [rx, ry]) > r)
          return false;
      if (!clockWise)
          _b = [endAngle, startAngle], startAngle = _b[0], endAngle = _b[1];
      var reverseBE = startAngle > endAngle;
      if (reverseBE)
          _c = [endAngle, startAngle], startAngle = _c[0], endAngle = _c[1];
      var minus = endAngle - startAngle;
      if (minus >= Math.PI * 2)
          return true;
      var x = point[0], y = point[1];
      var _e = getCircleRadianPoint(rx, ry, r, startAngle), bx = _e[0], by = _e[1];
      var _f = getCircleRadianPoint(rx, ry, r, endAngle), ex = _f[0], ey = _f[1];
      var vPoint = [x - rx, y - ry];
      var vBArm = [bx - rx, by - ry];
      var vEArm = [ex - rx, ey - ry];
      var reverse = minus > Math.PI;
      if (reverse)
          _d = [vEArm, vBArm], vBArm = _d[0], vEArm = _d[1];
      var inSector = isClockWise(vBArm, vPoint) && !isClockWise(vEArm, vPoint);
      if (reverse)
          inSector = !inSector;
      if (reverseBE)
          inSector = !inSector;
      return inSector;
  }
  /**
   * @description Get the points that make up a regular polygon
   */
  function getRegularPolygonPoints(_a, minus) {
      var rx = _a.rx, ry = _a.ry, r = _a.r, side = _a.side;
      if (minus === void 0) { minus = Math.PI * -0.5; }
      var radianGap = (Math.PI * 2) / side;
      var radians = new Array(side).fill('').map(function (t, i) { return i * radianGap + minus; });
      return radians.map(function (radian) { return getCircleRadianPoint(rx, ry, r, radian); });
  }
  /**
   * @description Check if the point is inside the polygon
   */
  function checkPointIsInPolygon(point, polygon) {
      var counter = 0;
      var x = point[0], y = point[1];
      var pointNum = polygon.length;
      for (var i = 1, p1 = polygon[0]; i <= pointNum; i++) {
          var p2 = polygon[i % pointNum];
          if (x > Math.min(p1[0], p2[0]) && x <= Math.max(p1[0], p2[0])) {
              if (y <= Math.max(p1[1], p2[1])) {
                  if (p1[0] !== p2[0]) {
                      var xinters = ((x - p1[0]) * (p2[1] - p1[1])) / (p2[0] - p1[0]) + p1[1];
                      if (p1[1] === p2[1] || y <= xinters) {
                          counter++;
                      }
                  }
              }
          }
          p1 = p2;
      }
      return counter % 2 === 1;
  }
  /**
   * @description Check if the point is inside the polyline
   */
  function checkPointIsNearPolyline(point, polyline, lineWidth) {
      var halfLineWidth = lineWidth / 2;
      var moveUpPolyline = polyline.map(function (_a) {
          var x = _a[0], y = _a[1];
          return [x, y - halfLineWidth];
      });
      var moveDownPolyline = polyline.map(function (_a) {
          var x = _a[0], y = _a[1];
          return [x, y + halfLineWidth];
      });
      var polygon = __spreadArrays(moveUpPolyline, moveDownPolyline.reverse());
      return checkPointIsInPolygon(point, polygon);
  }
  /**
   * @description Eliminate line blur due to 1px line width
   */
  function eliminateBlur(points) {
      return points.map(function (_a) {
          var x = _a[0], y = _a[1];
          return [(x | 0) + 0.5, (y | 0) + 0.5];
      });
  }

  var arc = {
      shape: {
          rx: 0,
          ry: 0,
          r: 0,
          startAngle: 0,
          endAngle: 0,
          clockWise: true,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var keys = ['rx', 'ry', 'r', 'startAngle', 'endAngle'];
          if (keys.find(function (key) { return typeof shape[key] !== 'number'; })) {
              console.error('CRender Graph Arc: Arc shape configuration is invalid!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape;
          var rx = shape.rx, ry = shape.ry, r = shape.r, startAngle = shape.startAngle, endAngle = shape.endAngle, clockWise = shape.clockWise;
          ctx.beginPath();
          ctx.arc(rx, ry, r > 0 ? r : 0, startAngle, endAngle, !clockWise);
          ctx.stroke();
      },
      hoverCheck: function (point, _a) {
          var shape = _a.shape, style = _a.style;
          var rx = shape.rx, ry = shape.ry, r = shape.r, startAngle = shape.startAngle, endAngle = shape.endAngle, clockWise = shape.clockWise;
          var lineWidth = style.lineWidth;
          var halfLineWidth = lineWidth / 2;
          var insideRadius = r - halfLineWidth;
          var outsideRadius = r + halfLineWidth;
          var inSide = checkPointIsInSector(point, {
              rx: rx,
              ry: ry,
              r: insideRadius,
              startAngle: startAngle,
              endAngle: endAngle,
              clockWise: clockWise,
          });
          var outSide = checkPointIsInSector(point, {
              rx: rx,
              ry: ry,
              r: outsideRadius,
              startAngle: startAngle,
              endAngle: endAngle,
              clockWise: clockWise,
          });
          return !inSide && outSide;
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var rx = shape.rx, ry = shape.ry;
          style.graphCenter = [rx, ry];
      },
      move: function (_a, arc) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var shape = arc.shape;
          arc.attr('shape', {
              rx: shape.rx + movementX,
              ry: shape.ry + movementY,
          });
      },
  };

  /**
   * @description Draw a polyline path
   */
  function drawPolylinePath(ctx, points, beginPath, closePath) {
      if (beginPath === void 0) { beginPath = false; }
      if (closePath === void 0) { closePath = false; }
      if (points.length < 2)
          return;
      if (beginPath)
          ctx.beginPath();
      points.forEach(function (point, i) { return point && (i === 0 ? ctx.moveTo.apply(ctx, point) : ctx.lineTo.apply(ctx, point)); });
      if (closePath)
          ctx.closePath();
  }
  /**
   * @description Draw a bezier curve path
   */
  function drawBezierCurvePath(ctx, points, moveTo, beginPath, closePath) {
      if (moveTo === void 0) { moveTo = false; }
      if (beginPath === void 0) { beginPath = false; }
      if (closePath === void 0) { closePath = false; }
      if (!ctx || !points)
          return;
      if (beginPath)
          ctx.beginPath();
      if (moveTo)
          ctx.moveTo.apply(ctx, moveTo);
      points.forEach(function (item) {
          return ctx.bezierCurveTo(item[0][0], item[0][1], item[1][0], item[1][1], item[2][0], item[2][1]);
      });
      if (closePath)
          ctx.closePath();
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  function __spreadArrays$2() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var DEFAULT_SEGMENT_POINTS_NUM = 50;

  function getBezierCurveStartPoint(bezierCurve) {
    return bezierCurve[0];
  }

  function getBezierCurveEndPoint(bezierCurve) {
    return bezierCurve.slice(-1)[0][2];
  }

  function getBezierCurveSegments(bezierCurve) {
    return bezierCurve.slice(1);
  }
  /**
   * @description Get the sum of the {number[]}
   */


  function getNumSum(nums) {
    return nums.reduce(function (sum, num) {
      return sum + num;
    }, 0);
  }
  /**
   * @description Get the distance between two points
   */


  function getTwoPointDistance$1(_a, _b) {
    var ax = _a[0],
        ay = _a[1];
    var bx = _b[0],
        by = _b[1];
    return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
  }

  function flatten(input) {
    return input.reduce(function (_, __) {
      return __spreadArrays$2(_, __);
    }, []);
  }
  /**
   * @description  Generate a function to calculate the point coordinates at time t
   * @param {Point} beginPoint    BezierCurve begin point
   * @param {Point} controlPoint1 BezierCurve controlPoint1
   * @param {Point} controlPoint2 BezierCurve controlPoint2
   * @param {Point} endPoint      BezierCurve end point
   */


  function createGetBezierCurveTPointFun(beginPoint, controlPoint1, controlPoint2, endPoint) {
    var cache = new Map([]);
    return function (t) {
      if (cache.has(t)) return cache.get(t);
      var subtractedT = 1 - t;
      var subtractedTPow3 = Math.pow(subtractedT, 3);
      var subtractedTPow2 = Math.pow(subtractedT, 2);
      var tPow3 = Math.pow(t, 3);
      var tPow2 = Math.pow(t, 2);
      var point = [beginPoint[0] * subtractedTPow3 + 3 * controlPoint1[0] * t * subtractedTPow2 + 3 * controlPoint2[0] * tPow2 * subtractedT + endPoint[0] * tPow3, beginPoint[1] * subtractedTPow3 + 3 * controlPoint1[1] * t * subtractedTPow2 + 3 * controlPoint2[1] * tPow2 * subtractedT + endPoint[1] * tPow3];
      cache.set(t, point);
      return point;
    };
  }
  /**
   * @description Create {GetBezierCurveTPointFunction} for every segment of bezierCurve
   */


  function createGetSegmentTPointFuns(bezierCurve) {
    var segments = getBezierCurveSegments(bezierCurve);
    var startPoint = getBezierCurveStartPoint(bezierCurve);
    return segments.map(function (segment, i) {
      var beginPoint = i === 0 ? startPoint : segments[i - 1][2];
      return createGetBezierCurveTPointFun.apply(void 0, __spreadArrays$2([beginPoint], segment));
    });
  }

  function getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum) {
    return getSegmentTPointFuns.map(function (getSegmentTPointFun, i) {
      var tGap = 1 / (segmentPointsNum[i] - 1);
      return new Array(segmentPointsNum[i]).fill(0).map(function (_, j) {
        return getSegmentTPointFun(j * tGap);
      });
    });
  }

  function createSegmentPoints(getSegmentTPointFuns) {
    var length = getSegmentTPointFuns.length; // Initialize the curve to a polyline

    var segmentPointsNum = new Array(length).fill(DEFAULT_SEGMENT_POINTS_NUM);
    return getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum);
  }
  /**
   * @description Get the distance of multiple sets of points
   */


  function getPointsDistance(points) {
    return new Array(points.length - 1).fill(0).map(function (_, j) {
      return getTwoPointDistance$1(points[j], points[j + 1]);
    });
  }

  function getSegmentPointsDistance(segmentPoints) {
    return segmentPoints.map(getPointsDistance);
  }
  /**
   * @description Get the sum of deviations between line segment and the average length
   * @param {Array} segmentPointsDistance Segment length of polyline
   * @param {Number} avgLength            Average length of the line segment
   * @return {Number} Deviations
   */


  function getAllDeviations(segmentPointsDistance, avgLength) {
    var calcDeviation = function calcDeviation(distance) {
      return distance.map(function (d) {
        return Math.abs(d - avgLength);
      });
    };

    return getNumSum(segmentPointsDistance.map(calcDeviation).map(getNumSum));
  }

  function getSegmentPointsData(segmentPoints) {
    var segmentPointsDistance = getSegmentPointsDistance(segmentPoints);
    var lineSegmentNum = getNumSum(segmentPointsDistance.map(function (_a) {
      var length = _a.length;
      return length;
    }));
    var segmentLength = segmentPointsDistance.map(getNumSum);
    var totalLength = getNumSum(segmentLength);
    var avgDistance = totalLength / lineSegmentNum;
    var deviation = getAllDeviations(segmentPointsDistance, avgDistance);
    return {
      totalLength: totalLength,
      segmentLength: segmentLength,
      avgDistance: avgDistance,
      deviation: deviation
    };
  }

  function getSegmentPointsCount(segmentPoints) {
    return flatten(segmentPoints).length;
  }

  function reGetSegmentPoints(segmentPoints, getSegmentTPointFuns, _a, precision) {
    var avgDistance = _a.avgDistance,
        totalLength = _a.totalLength,
        segmentLength = _a.segmentLength;
    var pointsCount = getSegmentPointsCount(segmentPoints); // Add more points to enhance accuracy

    pointsCount = Math.ceil(avgDistance / precision * pointsCount * 1.1); // Redistribution points acount

    var segmentPointsNum = segmentLength.map(function (length) {
      return Math.ceil(length / totalLength * pointsCount);
    }) // At least need two points
    .map(function (_) {
      return _ > 1 ? _ : 2;
    }); // Calculate the points after redistribution

    return getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum);
  }

  function recursiveCalcSegmentPoints(segmentPoints, getSegmentTPointFuns, _a, recursiveCount) {
    var avgDistance = _a.avgDistance;
    var pointsCount = getSegmentPointsCount(segmentPoints);
    var stepSize = 1 / pointsCount / 10; // Recursively for each segment of the polyline

    getSegmentTPointFuns.forEach(function (getSegmentTPointFun, i) {
      var currentSegmentPointsNum = segmentPoints[i].length;
      var tGap = 1 / (currentSegmentPointsNum - 1);
      var t = new Array(currentSegmentPointsNum).fill(0).map(function (_, j) {
        return j * tGap;
      }); // Repeated recursive offset

      for (var r = 0; r < recursiveCount; r++) {
        var distance = getPointsDistance(segmentPoints[i]);
        var deviations = distance.map(function (d) {
          return d - avgDistance;
        });
        var offset = 0;

        for (var j = 0; j < currentSegmentPointsNum; j++) {
          if (j === 0) continue;
          offset += deviations[j - 1];
          t[j] -= stepSize * offset;
          if (t[j] > 1) t[j] = 1;
          if (t[j] < 0) t[j] = 0;
          segmentPoints[i][j] = getSegmentTPointFun(t[j]);
        }
      }
    });
    return segmentPoints;
  }

  function calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, precision, recursiveCount) {
    console.warn('-------------start-------------');
    var segmentPointsData = getSegmentPointsData(segmentPoints);
    if (segmentPointsData.deviation <= precision) return flatten(segmentPoints);
    segmentPoints = reGetSegmentPoints(segmentPoints, getSegmentTPointFuns, segmentPointsData, precision);
    if (recursiveCount <= 0) return flatten(segmentPoints);
    segmentPointsData = getSegmentPointsData(segmentPoints);
    segmentPoints = recursiveCalcSegmentPoints(segmentPoints, getSegmentTPointFuns, segmentPointsData, recursiveCount);
    return flatten(segmentPoints);
  }
  /**
   * @description Convert bezierCurve to polyline.
   * Calculation results cannot guarantee accuracy！
   * Recusive calculation can get more accurate results
   * @param {BezierCurve} bezierCurve bezierCurve data
   * @param {number} precision        calculation accuracy. Recommended for 1-20
   * @param {number} recursiveCount   Recursive count
   */


  function convertBezierCurveToPolyline(bezierCurve, precision, recursiveCount) {
    if (precision === void 0) {
      precision = 5;
    }

    if (recursiveCount === void 0) {
      recursiveCount = 0;
    }

    var getSegmentTPointFuns = createGetSegmentTPointFuns(bezierCurve);
    var segmentPoints = createSegmentPoints(getSegmentTPointFuns); // Calculate uniformly distributed points by iteratively

    var polyline = calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, precision, recursiveCount);
    var endPoint = getBezierCurveEndPoint(bezierCurve);
    polyline.push(endPoint);
    return polyline;
  }
  /**
   * @description Transform bezierCurve to polyline
   * @param {BezierCurve} bezierCurve bezier curve
   * @param {number} precision        Wanted precision (Not always achieveable)
   * @param {number} recursiveCount   Recursive count
   */


  function bezierCurveToPolyline(bezierCurve, precision, recursiveCount) {
    if (precision === void 0) {
      precision = 5;
    }

    if (recursiveCount === void 0) {
      recursiveCount = 0;
    }

    if (!(bezierCurve instanceof Array)) throw new Error("bezierCurveToPolyline: Invalid input of " + bezierCurve);
    if (bezierCurve.length <= 1) throw new Error("bezierCurveToPolyline: The length of the bezierCurve should be greater than 1");
    if (typeof precision !== 'number') throw new Error("bezierCurveToPolyline: Type of precision must be number");
    return convertBezierCurveToPolyline(bezierCurve, precision, recursiveCount);
  }

  /**
   * @description Get the control points of the Bezier curve
   * @param {Point[]} polyline A set of points that make up a polyline
   * @param {number} index   The index of which get controls points's point in polyline
   * @param {boolean} close  Closed curve
   * @param {number} offsetA Smoothness
   * @param {number} offsetB Smoothness
   * @return {Point[]|null} Control points
   */

  function getBezierCurveLineControlPoints(polyline, index, close, offsetA, offsetB) {
    if (close === void 0) {
      close = false;
    }

    if (offsetA === void 0) {
      offsetA = 0.25;
    }

    if (offsetB === void 0) {
      offsetB = 0.25;
    }

    var pointNum = polyline.length;
    if (pointNum < 3 || index >= pointNum) return null;
    var beforePointIndex = index - 1;
    if (beforePointIndex < 0) beforePointIndex = close ? pointNum + beforePointIndex : 0;
    var afterPointIndex = index + 1;
    if (afterPointIndex >= pointNum) afterPointIndex = close ? afterPointIndex - pointNum : pointNum - 1;
    var afterNextPointIndex = index + 2;
    if (afterNextPointIndex >= pointNum) afterNextPointIndex = close ? afterNextPointIndex - pointNum : pointNum - 1;
    var pointBefore = polyline[beforePointIndex];
    var pointMiddle = polyline[index];
    var pointAfter = polyline[afterPointIndex];
    var pointAfterNext = polyline[afterNextPointIndex];
    return [[pointMiddle[0] + offsetA * (pointAfter[0] - pointBefore[0]), pointMiddle[1] + offsetA * (pointAfter[1] - pointBefore[1])], [pointAfter[0] - offsetB * (pointAfterNext[0] - pointMiddle[0]), pointAfter[1] - offsetB * (pointAfterNext[1] - pointMiddle[1])]];
  }
  /**
   * @description Get the symmetry point
   * @param {Point} point       Symmetric point
   * @param {Point} centerPoint Symmetric center
   * @return {Point} Symmetric point
   */


  function getSymmetryPoint(_a, _b) {
    var px = _a[0],
        py = _a[1];
    var cx = _b[0],
        cy = _b[1];
    var minusX = cx - px;
    var minusY = cy - py;
    return [cx + minusX, cy + minusY];
  }
  /**
   * @description Get the last curve of the closure
   */


  function closeBezierCurve(bezierCurve, startPoint) {
    var firstSubCurve = bezierCurve[0];
    var lastSubCurve = bezierCurve.slice(-1)[0];
    bezierCurve.push([getSymmetryPoint(lastSubCurve[1], lastSubCurve[2]), getSymmetryPoint(firstSubCurve[0], startPoint), startPoint]);
    return bezierCurve;
  }
  /**
   * @description Convert polyline to bezierCurve
   * @param {Point[]} polyline A set of points that make up a polyline
   * @param {boolean} close    Closed curve
   * @param {number} offsetA   Smoothness
   * @param {number} offsetB   Smoothness
   * @return {BezierCurve} A set of bezier curve (Invalid input will return false)
   */


  function polylineToBezierCurve(polyline, close, offsetA, offsetB) {
    if (close === void 0) {
      close = false;
    }

    if (offsetA === void 0) {
      offsetA = 0.25;
    }

    if (offsetB === void 0) {
      offsetB = 0.25;
    }

    if (!(polyline instanceof Array)) throw new Error("polylineToBezierCurve: Invalid input of " + polyline);
    if (polyline.length <= 2) throw new Error("polylineToBezierCurve: The length of the polyline should be greater than 2");
    var startPoint = polyline[0];
    var bezierCurveLineNum = polyline.length - 1;
    var bezierCurvePoints = new Array(bezierCurveLineNum).fill(0).map(function (_, i) {
      return __spreadArrays$2(getBezierCurveLineControlPoints(polyline, i, close, offsetA, offsetB), [polyline[i + 1]]);
    });
    if (close) closeBezierCurve(bezierCurvePoints, startPoint);
    bezierCurvePoints.unshift(polyline[0]);
    return bezierCurvePoints;
  }

  var bezierCurve = {
      shape: {
          points: [],
          close: false,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var points = shape.points;
          if (!(points instanceof Array)) {
              console.error('CRender Graph BezierCurve: BezierCurve points should be an array!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape, cache = _b.cache;
          var points = shape.points, close = shape.close;
          if (!cache.points || cache.points.toString() !== points.toString()) {
              var hoverPoints = bezierCurveToPolyline(points, 20);
              Object.assign(cache, {
                  points: deepClone(points),
                  hoverPoints: hoverPoints,
              });
          }
          ctx.beginPath();
          drawBezierCurvePath(ctx, points.slice(1), points[0]);
          if (close) {
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
          }
          else {
              ctx.stroke();
          }
      },
      hoverCheck: function (point, _a) {
          var cache = _a.cache, shape = _a.shape, style = _a.style;
          var hoverPoints = cache.hoverPoints;
          var close = shape.close;
          var lineWidth = style.lineWidth;
          if (close) {
              return checkPointIsInPolygon(point, hoverPoints);
          }
          else {
              return checkPointIsNearPolyline(point, hoverPoints, lineWidth);
          }
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var points = shape.points;
          style.graphCenter = points[0];
      },
      move: function (_a, bezierCurve) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var shape = bezierCurve.shape, cache = bezierCurve.cache;
          var points = shape.points;
          var _b = points[0], fx = _b[0], fy = _b[1];
          var curves = points.slice(1);
          var bezierCurvePoints = __spreadArrays([
              [fx + movementX, fy + movementY]
          ], curves.map(function (curve) {
              return curve.map(function (_a) {
                  var x = _a[0], y = _a[1];
                  return [x + movementX, y + movementY];
              });
          }));
          cache.points = bezierCurvePoints;
          cache.hoverPoints = cache.hoverPoints.map(function (_a) {
              var x = _a[0], y = _a[1];
              return [x + movementX, y + movementY];
          });
          bezierCurve.attr('shape', {
              points: bezierCurvePoints,
          });
      },
  };

  var circle = {
      shape: {
          rx: 0,
          ry: 0,
          r: 0,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var rx = shape.rx, ry = shape.ry, r = shape.r;
          if (typeof rx !== 'number' || typeof ry !== 'number' || typeof r !== 'number') {
              console.error('CRender Graph Circle: Circle shape configuration is invalid!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape;
          var rx = shape.rx, ry = shape.ry, r = shape.r;
          ctx.beginPath();
          ctx.arc(rx, ry, r > 0 ? r : 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
      },
      hoverCheck: function (point, _a) {
          var shape = _a.shape;
          return checkPointIsInCircle(point, shape);
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var rx = shape.rx, ry = shape.ry;
          style.graphCenter = [rx, ry];
      },
      move: function (_a, circle) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var shape = circle.shape;
          circle.attr('shape', {
              rx: shape.rx + movementX,
              ry: shape.ry + movementY,
          });
      },
  };

  var ellipse = {
      shape: {
          rx: 0,
          ry: 0,
          hr: 0,
          vr: 0,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var rx = shape.rx, ry = shape.ry, hr = shape.hr, vr = shape.vr;
          if (typeof rx !== 'number' ||
              typeof ry !== 'number' ||
              typeof hr !== 'number' ||
              typeof vr !== 'number') {
              console.error('CRender Graph Ellipse: Ellipse shape configuration is invalid!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape;
          var rx = shape.rx, ry = shape.ry, hr = shape.hr, vr = shape.vr;
          ctx.beginPath();
          ctx.ellipse(rx, ry, hr > 0 ? hr : 0, vr > 0 ? vr : 0, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
      },
      hoverCheck: function (point, _a) {
          var shape = _a.shape;
          var rx = shape.rx, ry = shape.ry, hr = shape.hr, vr = shape.vr;
          var a = Math.max(hr, vr);
          var b = Math.min(hr, vr);
          var c = Math.sqrt(a * a - b * b);
          var leftFocusPoint = [rx - c, ry];
          var rightFocusPoint = [rx + c, ry];
          var distance = getTwoPointDistance(point, leftFocusPoint) + getTwoPointDistance(point, rightFocusPoint);
          return distance <= 2 * a;
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var rx = shape.rx, ry = shape.ry;
          style.graphCenter = [rx, ry];
      },
      move: function (_a, ellipse) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var shape = ellipse.shape;
          ellipse.attr('shape', {
              rx: shape.rx + movementX,
              ry: shape.ry + movementY,
          });
      },
  };

  var polyline = {
      shape: {
          points: [],
          close: false,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var points = shape.points;
          if (!(points instanceof Array)) {
              console.error('CRender Graph Polyline: Polyline points should be an array!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape, lineWidth = _b.style.lineWidth;
          var points = shape.points, close = shape.close;
          ctx.beginPath();
          drawPolylinePath(ctx, lineWidth === 1 ? eliminateBlur(points) : points);
          if (close) {
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
          }
          else {
              ctx.stroke();
          }
      },
      hoverCheck: function (point, _a) {
          var shape = _a.shape, style = _a.style;
          var points = shape.points, close = shape.close;
          var lineWidth = style.lineWidth;
          if (close) {
              return checkPointIsInPolygon(point, points);
          }
          else {
              return checkPointIsNearPolyline(point, points, lineWidth);
          }
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var points = shape.points;
          style.graphCenter = points[0];
      },
      move: function (_a, polyline) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var points = polyline.shape.points;
          var moveAfterPoints = points.map(function (_a) {
              var x = _a[0], y = _a[1];
              return [x + movementX, y + movementY];
          });
          polyline.attr('shape', {
              points: moveAfterPoints,
          });
      },
  };

  var rect = {
      shape: {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
          if (typeof x !== 'number' ||
              typeof y !== 'number' ||
              typeof w !== 'number' ||
              typeof h !== 'number') {
              console.error('CRender Graph Rect: Rect shape configuration is invalid!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape;
          var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
          ctx.beginPath();
          ctx.rect(x, y, w, h);
          ctx.fill();
          ctx.stroke();
      },
      hoverCheck: function (point, _a) {
          var shape = _a.shape;
          return checkPointIsInRect$1(point, shape);
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
          style.graphCenter = [x + w / 2, y + h / 2];
      },
      move: function (_a, rect) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var shape = rect.shape;
          rect.attr('shape', {
              x: shape.x + movementX,
              y: shape.y + movementY,
          });
      },
  };

  var regPolygon = {
      shape: {
          rx: 0,
          ry: 0,
          r: 0,
          side: 0,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var side = shape.side;
          var keys = ['rx', 'ry', 'r', 'side'];
          if (keys.find(function (key) { return typeof shape[key] !== 'number'; })) {
              console.error('CRender Graph RegPolygon: RegPolygon shape configuration is invalid!');
              return false;
          }
          if (side < 3) {
              console.error('CRender Graph RegPolygon: RegPolygon at least trigon!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape, cache = _b.cache;
          var rx = shape.rx, ry = shape.ry, r = shape.r, side = shape.side;
          if (cache.points ||
              cache.rx !== rx ||
              cache.ry !== ry ||
              cache.r !== r ||
              cache.side !== side) {
              var points_1 = getRegularPolygonPoints(shape);
              Object.assign(cache, { points: points_1, rx: rx, ry: ry, r: r, side: side });
          }
          var points = cache.points;
          ctx.beginPath();
          drawPolylinePath(ctx, points);
          ctx.stroke();
          ctx.fill();
      },
      hoverCheck: function (point, _a) {
          var cache = _a.cache;
          var points = cache.points;
          return checkPointIsInPolygon(point, points);
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var rx = shape.rx, ry = shape.ry;
          style.graphCenter = [rx, ry];
      },
      move: function (_a, regPolygon) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var shape = regPolygon.shape, cache = regPolygon.cache;
          var rx = shape.rx, ry = shape.ry;
          cache.rx += movementX;
          cache.ry += movementY;
          regPolygon.attr('shape', {
              rx: rx + movementX,
              ry: ry + movementY,
          });
          cache.points = cache.points.map(function (_a) {
              var x = _a[0], y = _a[1];
              return [x + movementX, y + movementY];
          });
      },
  };

  var ring = {
      shape: {
          rx: 0,
          ry: 0,
          r: 0,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var rx = shape.rx, ry = shape.ry, r = shape.r;
          if (typeof rx !== 'number' || typeof ry !== 'number' || typeof r !== 'number') {
              console.error('CRender Graph Ring: Ring shape configuration is invalid!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape;
          var rx = shape.rx, ry = shape.ry, r = shape.r;
          ctx.beginPath();
          ctx.arc(rx, ry, r > 0 ? r : 0, 0, Math.PI * 2);
          ctx.stroke();
      },
      hoverCheck: function (point, _a) {
          var shape = _a.shape, style = _a.style;
          var rx = shape.rx, ry = shape.ry, r = shape.r;
          var lineWidth = style.lineWidth;
          var halfLineWidth = lineWidth / 2;
          var minDistance = r - halfLineWidth;
          var maxDistance = r + halfLineWidth;
          var distance = getTwoPointDistance(point, [rx, ry]);
          return distance >= minDistance && distance <= maxDistance;
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var rx = shape.rx, ry = shape.ry;
          style.graphCenter = [rx, ry];
      },
      move: function (_a, ring) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var shape = ring.shape;
          ring.attr('shape', {
              rx: shape.rx + movementX,
              ry: shape.ry + movementY,
          });
      },
  };

  var sector = {
      shape: {
          rx: 0,
          ry: 0,
          r: 0,
          startAngle: 0,
          endAngle: 0,
          clockWise: true,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var keys = ['rx', 'ry', 'r', 'startAngle', 'endAngle'];
          if (keys.find(function (key) { return typeof shape[key] !== 'number'; })) {
              console.error('CRender Graph Sector: Sector shape configuration is invalid!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape;
          var rx = shape.rx, ry = shape.ry, r = shape.r, startAngle = shape.startAngle, endAngle = shape.endAngle, clockWise = shape.clockWise;
          ctx.beginPath();
          ctx.arc(rx, ry, r > 0 ? r : 0, startAngle, endAngle, !clockWise);
          ctx.lineTo(rx, ry);
          ctx.stroke();
          ctx.fill();
      },
      hoverCheck: function (point, _a) {
          var shape = _a.shape;
          return checkPointIsInSector(point, shape);
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var rx = shape.rx, ry = shape.ry;
          style.graphCenter = [rx, ry];
      },
      move: function (_a, sector) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var _b = sector.shape, rx = _b.rx, ry = _b.ry;
          sector.attr('shape', {
              rx: rx + movementX,
              ry: ry + movementY,
          });
      },
  };

  var smoothline = {
      shape: {
          points: [],
          close: false,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var points = shape.points;
          if (!(points instanceof Array)) {
              console.error('CRender Graph Smoothline: Smoothline points should be an array!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape, cache = _b.cache;
          var points = shape.points, close = shape.close;
          if (!cache.points || cache.points.toString() !== points.toString()) {
              var bezierCurve_1 = polylineToBezierCurve(points, close);
              var hoverPoints = bezierCurveToPolyline(bezierCurve_1);
              Object.assign(cache, {
                  points: deepClone(points),
                  bezierCurve: bezierCurve_1,
                  hoverPoints: hoverPoints,
              });
          }
          var bezierCurve = cache.bezierCurve;
          ctx.beginPath();
          drawBezierCurvePath(ctx, bezierCurve.slice(1), bezierCurve[0]);
          if (close) {
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
          }
          else {
              ctx.stroke();
          }
      },
      hoverCheck: function (point, _a) {
          var cache = _a.cache, shape = _a.shape, style = _a.style;
          var hoverPoints = cache.hoverPoints;
          var close = shape.close;
          var lineWidth = style.lineWidth;
          if (close) {
              return checkPointIsInPolygon(point, hoverPoints);
          }
          else {
              return checkPointIsNearPolyline(point, hoverPoints, lineWidth);
          }
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var points = shape.points;
          style.graphCenter = points[0];
      },
      move: function (_a, smoothline) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var shape = smoothline.shape, cache = smoothline.cache;
          var points = shape.points;
          var moveAfterPoints = points.map(function (_a) {
              var x = _a[0], y = _a[1];
              return [x + movementX, y + movementY];
          });
          cache.points = moveAfterPoints;
          var _b = cache.bezierCurve[0], fx = _b[0], fy = _b[1];
          var curves = cache.bezierCurve.slice(1);
          cache.bezierCurve = __spreadArrays([
              [fx + movementX, fy + movementY]
          ], curves.map(function (curve) {
              return curve.map(function (_a) {
                  var x = _a[0], y = _a[1];
                  return [x + movementX, y + movementY];
              });
          }));
          cache.hoverPoints = cache.hoverPoints.map(function (_a) {
              var x = _a[0], y = _a[1];
              return [x + movementX, y + movementY];
          });
          smoothline.attr('shape', {
              points: moveAfterPoints,
          });
      },
  };

  var text = {
      shape: {
          content: '',
          position: [0, 0],
          maxWidth: undefined,
          rowGap: 0,
      },
      validator: function (_a) {
          var shape = _a.shape;
          var content = shape.content, position = shape.position, rowGap = shape.rowGap;
          if (typeof content !== 'string') {
              console.error('CRender Graph Text: Text content should be a string!');
              return false;
          }
          if (!Array.isArray(position)) {
              console.error('CRender Graph Text: Text position should be an array!');
              return false;
          }
          if (typeof rowGap !== 'number') {
              console.error('CRender Graph Text: Text rowGap should be a number!');
              return false;
          }
          return true;
      },
      draw: function (_a, _b) {
          var ctx = _a.ctx;
          var shape = _b.shape;
          var content = shape.content, position = shape.position, maxWidth = shape.maxWidth, rowGap = shape.rowGap;
          var textBaseline = ctx.textBaseline, font = ctx.font;
          var contentArr = content.split('\n');
          var rowNum = contentArr.length;
          var fontSize = parseInt(font.replace(/\D/g, ''));
          var lineHeight = fontSize + rowGap;
          var allHeight = rowNum * lineHeight - rowGap;
          var offset = 0;
          var x = position[0];
          var y = position[1];
          if (textBaseline === 'middle') {
              offset = allHeight / 2;
              y += fontSize / 2;
          }
          if (textBaseline === 'bottom') {
              offset = allHeight;
              y += fontSize;
          }
          var positions = new Array(rowNum)
              .fill(0)
              .map(function (_, i) { return [x, y + i * lineHeight - offset]; });
          ctx.beginPath();
          contentArr.forEach(function (text, i) {
              ctx.fillText(text, positions[i][0], positions[i][1], maxWidth);
              ctx.strokeText(text, positions[i][0], positions[i][1], maxWidth);
          });
          ctx.closePath();
      },
      hoverCheck: function () {
          return false;
      },
      setGraphCenter: function (_a) {
          var shape = _a.shape, style = _a.style;
          var position = shape.position;
          style.graphCenter = __spreadArrays(position);
      },
      move: function (_a, text) {
          var movementX = _a.movementX, movementY = _a.movementY;
          var _b = text.shape.position, x = _b[0], y = _b[1];
          text.attr('shape', {
              position: [x + movementX, y + movementY],
          });
      },
  };

  var GRAPHS = new Map([
      ['arc', arc],
      ['bezierCurve', bezierCurve],
      ['circle', circle],
      ['ellipse', ellipse],
      ['polyline', polyline],
      ['rect', rect],
      ['regPolygon', regPolygon],
      ['ring', ring],
      ['sector', sector],
      ['smoothline', smoothline],
      ['text', text],
  ]);

  var CRender = /** @class */ (function () {
      function CRender(canvas) {
          /**
           * @description Width and height of the canvas
           */
          this.area = [0, 0];
          /**
           * @description Whether render is in animation rendering
           */
          this.animationStatus = false;
          /**
           * @description Added graph
           */
          this.graphs = [];
          if (!canvas) {
              console.error('CRender: Missing parameters!');
              return;
          }
          var ctx = canvas.getContext('2d');
          var clientWidth = canvas.clientWidth, clientHeight = canvas.clientHeight;
          var area = [clientWidth, clientHeight];
          canvas.setAttribute('width', clientWidth + '');
          canvas.setAttribute('height', clientHeight + '');
          Object.assign(this, { canvas: canvas, ctx: ctx, area: area });
          canvas.addEventListener('mousedown', this.mouseDown.bind(this));
          canvas.addEventListener('mousemove', this.mouseMove.bind(this));
          canvas.addEventListener('mouseup', this.mouseUp.bind(this));
      }
      CRender.prototype.clearArea = function () {
          var _a = this, canvas = _a.canvas, area = _a.area;
          canvas.width = area[0];
      };
      /**
       * @description Sort the graphs by index
       * Give priority to index high graph in rendering
       */
      CRender.prototype.sortGraphsByIndex = function () {
          var graphs = this.graphs;
          graphs.sort(function (_a, _b) {
              var a = _a.index;
              var b = _b.index;
              return a - b;
          });
      };
      CRender.prototype.drawAllGraph = function () {
          this.clearArea();
          this.graphs.filter(function (graph) { return graph.visible; }).forEach(function (graph) { return graph.drawProcessor(); });
      };
      CRender.prototype.add = function (config, wait) {
          if (wait === void 0) { wait = false; }
          var name = config.name;
          if (!name) {
              console.error('CRender add: Missing parameters!');
              return null;
          }
          var graphConfig = GRAPHS.get(name);
          if (!graphConfig) {
              console.warn('CRender add: No corresponding graph configuration found!');
              return null;
          }
          if (!graphConfig.validator(config))
              return null;
          var graph = new Graph(graphConfig, config, this);
          this.graphs.push(graph);
          this.sortGraphsByIndex();
          if (!wait)
              this.drawAllGraph();
          return graph;
      };
      CRender.prototype.delGraph = function (graph) {
          graph.delProcessor();
          this.drawAllGraph();
      };
      CRender.prototype.delAllGraph = function () {
          this.graphs.forEach(function (graph) { return graph.delProcessor(); });
          this.clearArea();
      };
      CRender.prototype.clone = function (graph) {
          var config = deepClone(__assign({}, graph));
          return this.add(config);
      };
      /**
       * @description Animate the graph whose animation queue is not empty
       * and the animationPause is false
       */
      CRender.prototype.launchAnimation = function () {
          var _this = this;
          var animationStatus = this.animationStatus;
          if (animationStatus)
              return;
          this.animationStatus = true;
          return new Promise(function (resolve) {
              _this.animate(function () {
                  _this.animationStatus = false;
                  resolve();
              }, Date.now());
          });
      };
      CRender.prototype.animate = function (callback, timeStamp) {
          var graphs = this.graphs;
          if (!this.animateAble()) {
              callback();
              return;
          }
          graphs.forEach(function (graph) { return graph.turnNextAnimationFrame(timeStamp); });
          this.drawAllGraph();
          requestAnimationFrame(this.animate.bind(this, callback, timeStamp));
      };
      CRender.prototype.animateAble = function () {
          var graphs = this.graphs;
          return !!graphs.find(function (graph) { return !graph.animationPause && graph.animationQueue.length; });
      };
      /**
       * @description Handler of CRender mousedown event
       */
      CRender.prototype.mouseDown = function () {
          var graphs = this.graphs;
          var hoverGraph = graphs.find(function (graph) { return graph.status === Status.HOVER; });
          if (!hoverGraph)
              return;
          hoverGraph.status = Status.ACTIVE;
      };
      /**
       * @description Handler of CRender mousemove event
       */
      CRender.prototype.mouseMove = function (e) {
          var offsetX = e.offsetX, offsetY = e.offsetY;
          var position = [offsetX, offsetY];
          var graphs = this.graphs;
          var activeGraph = graphs.find(function (graph) { return graph.status === Status.ACTIVE || graph.status === Status.DRAG; });
          // Active Graph | Drag Able | Move Able
          if (activeGraph && activeGraph.drag && activeGraph.move) {
              activeGraph.moveProcessor(e);
              activeGraph.status = Status.DRAG;
              return;
          }
          var hoverGraph = graphs.find(function (graph) { return graph.status === Status.HOVER; });
          var hoverAbleGraphs = graphs.filter(function (graph) { return graph.hover && (graph.hoverCheck || graph.hoverRect); });
          var hoveredGraph = hoverAbleGraphs.find(function (graph) { return graph.hoverCheckProcessor(position); });
          // Hover Graph
          if (hoveredGraph) {
              document.body.style.cursor = hoveredGraph.style.hoverCursor;
          }
          else {
              document.body.style.cursor = 'default';
          }
          // No hover graph
          if (!hoveredGraph && !hoverGraph)
              return;
          // Same hover graph
          if (hoveredGraph === hoverGraph)
              return;
          // No hoverd graph But before had
          if (!hoveredGraph && hoverGraph) {
              if (hoverGraph.onMouseOuter)
                  hoverGraph.onMouseOuter(e);
              hoverGraph.status = Status.STATIC;
              return;
          }
          // Only has hovered graph
          if (hoveredGraph && !hoverGraph) {
              if (hoveredGraph.onMouseEnter)
                  hoveredGraph.onMouseEnter(e);
              hoveredGraph.status = Status.HOVER;
              return;
          }
          // Not a same graph
          if (hoverGraph.onMouseOuter)
              hoverGraph.onMouseOuter(e);
          hoverGraph.status = Status.STATIC;
          if (hoveredGraph.onMouseEnter)
              hoveredGraph.onMouseEnter(e);
          hoveredGraph.status = Status.HOVER;
      };
      /**
       * @description Handler of CRender mouseup event
       * @return {Undefined} Void
       */
      CRender.prototype.mouseUp = function (e) {
          var graphs = this.graphs;
          var activeGraph = graphs.find(function (graph) { return graph.status === Status.ACTIVE; });
          var dragGraph = graphs.find(function (graph) { return graph.status === Status.DRAG; });
          if (activeGraph && activeGraph.onClick)
              activeGraph.onClick(e);
          graphs.forEach(function (graph) { return (graph.status = Status.STATIC); });
          if (activeGraph)
              activeGraph.status = Status.HOVER;
          if (dragGraph)
              dragGraph.status = Status.HOVER;
      };
      return CRender;
  }());

  function randomNum(start, end, fixed) {
      if (fixed === void 0) { fixed = 0; }
      var differ = end - start;
      var random = Math.random();
      return +(start + differ * random).toFixed(fixed);
  }
  var Dev = function () {
      var canvas = React.useRef(null);
      React.useEffect(function () {
          var render = new CRender(canvas.current);
          var _a = render.area, w = _a[0], h = _a[1];
          var circles = [];
          console.time('test');
          for (var i = 0; i < 1000; i++) {
              circles.push(render.add({
                  name: 'circle',
                  shape: {
                      rx: randomNum(0, w),
                      ry: randomNum(0, h),
                      r: randomNum(10, 50),
                  },
                  style: {
                      stroke: 'red',
                      fill: 'transparent',
                  },
              }, true));
          }
          render.drawAllGraph();
          console.timeEnd('test');
          console.warn(circles);
      });
      return React__default.createElement("canvas", { ref: canvas });
  };
  ReactDOM.render(React__default.createElement(Dev, null), document.getElementById('root'));
  var dev = null;

  return dev;

}(React, ReactDOM));
//# sourceMappingURL=dev.js.map