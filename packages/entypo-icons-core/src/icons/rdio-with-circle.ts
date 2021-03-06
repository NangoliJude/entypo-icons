var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.403 9.082c.022.17.034.342.034.518 0 2.176-1.742 3.941-3.892 3.941-2.148 0-3.891-1.766-3.891-3.941 0-2.178 1.742-3.942 3.891-3.942.309 0 .608.039.896.107V8.41c-.454-.166-1.015-.142-1.541.111-.952.461-1.435 1.494-1.079 2.311.357.816 1.418 1.106 2.371.645.656-.316 1.234-1.078 1.234-2.035V6.549c.082.045.162.096.24.146.739.465 1.838 1.086 3.121 1.152.501.026-.197 1.284-1.384 1.635z"></path>';
export default {
  icon: "rdio-with-circle",
  paths: paths,
  getSvg: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</svg>";
    return head + paths + tail;
  },
  getSprite: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg">';
    head += "<symbol";
    head += ' id="entypo-icon-rdio-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "rdio-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
