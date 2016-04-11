# RNNPMCompat

More compatibility with NPM packages by utilizing browserify's shims.
This is an example project showing the global-react-native / ignoring modules pull request.
To install it, clone it, run npm install inside of it and then npm start.
If you want to test it in your own project, follow the steps below.

## Install shims

@todo, evaluate if we need to use others for react-native

```shell
npm install --save-dev actual-empty-file \
  assert \
  browserify-zlib \
  buffer \
  console-browserify \
  constants-browserify \
  domain-browser \
  events \
  https-browserify \
  os-browserify \
  path-browserify \
  process \
  punycode \
  querystring-es3 \
  readable-stream \
  stream-browserify \
  string_decoder \
  timers-browserify \
  tty-browserify \
  url \
  util \
  vm-browserify \
  react-native-udp \
  react-native-tcp \
  react-native-level-fs \
  react-native-crypto \
  react-native-http \
  asyncstorage-down \
  react-native-randombytes
```

## Add global-react-native key to package.json
```json
"global-react-native": {
  "assert": "assert/assert.js",
  "buffer": "buffer/index.js",
  "child_process": "actual-empty-file",
  "cluster": "actual-empty-file",
  "console": "console-browserify/index.js",
  "constants": "constants-browserify/constants.json",
  "crypto": "crypto-browserify/index.js",
  "dgram": "actual-empty-file",
  "dns": "actual-empty-file",
  "domain": "domain-browser/index.js",
  "events": "events/events.js",
  "fs": "actual-empty-file",
  "http": "stream-http/index.js",
  "https": "https-browserify/index.js",
  "module": "actual-empty-file",
  "net": "actual-empty-file",
  "os": "os-browserify/browser.js",
  "path": "path-browserify/index.js",
  "punycode": "punycode/punycode.js",
  "querystring": "querystring-es3/index.js",
  "readline": "actual-empty-file",
  "repl": "actual-empty-file",
  "stream": "stream-browserify/index.js",
  "_stream_duplex": "readable-stream/duplex.js",
  "_stream_passthrough": "readable-stream/passthrough.js",
  "_stream_readable": "readable-stream/readable.js",
  "_stream_transform": "readable-stream/transform.js",
  "_stream_writable": "readable-stream/writable.js",
  "string_decoder": "string_decoder/index.js",
  "sys": "util/util.js",
  "timers": "timers-browserify/main.js",
  "tls": "actual-empty-file",
  "tty": "tty-browserify/index.js",
  "url": "url/url.js",
  "util": "util/util.js",
  "vm": "vm-browserify/index.js",
  "zlib": "browserify-zlib/src/index.js",
  "_process": "process/browser.js"
}
```

## Install node-haste fork with global-react-native support

```shell
npm install --save-dev git+https://github.com/vespakoen/node-haste.git#global-react-native
cd node_modules/node-haste && npm install && npm run build
```

## Test it out

```shell
npm start
```
