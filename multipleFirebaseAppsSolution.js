Instead of reusing the same credential object, create a new credential object for each Firebase app initialization using `credential.cert()`. This approach ensures that each app instance has its unique credential, resolving the unexpected error.

```javascript
//Correct Implementation
const admin = require('firebase-admin');

const serviceAccount1 = require('./path/to/serviceAccountKey1.json');
const serviceAccount2 = require('./path/to/serviceAccountKey2.json');

const app1 = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount1),
  databaseURL: "https://project1-database-url.firebaseio.com"
}, "app1");

const app2 = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount2),
  databaseURL: "https://project2-database-url.firebaseio.com"
}, "app2");
```