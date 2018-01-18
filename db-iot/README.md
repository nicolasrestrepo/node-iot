## Database Module IoT


```js
const setupDatabase = require('db-iot');

setupDatabase(config).then(db => {
    {Agent, Metric} = db;
}).catch(err => console.log(err)) 

```
