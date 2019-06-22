
```js
require("dotenv").config();
```

Add the code required to import the `keys.js` file and store it in a variable.

```js
  var keys = require("./keys.js");
```
  
* You should then be able to access your keys information like so

  ```js
  var spotify = new Spotify(keys.spotify);
  ```