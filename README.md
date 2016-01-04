# Account-Server API's
## Server
Repo: https://github.com/pataiadam/account-server

## Installation

This library is distributed on npm. In order to add it as a dependency, run the following command:
```
npm install account-server-api --save
```

## Usage

```javascript
var accountServer = require('account-server-api');
var API = new accountServer({appId: 123456789, appSecret: 'RyynZBRfLmFWqe2P',  accountServerURL: 'http://localhost:3000'});

API.auth({
    provider: 'facebook',
    access_tokesn: 'your_access_token'
}).then(function(result){
    console.log(result);
    // {error: null, user: {}}
});
```

## API Reference
### API.auth(params).then(result => {})
##### Arguments
```
params (Object) (Required)
params.provider (String) (Required)
...other (e.g. 'params.access_token', ... it depends on provider)
```
##### Returns
```
result (Object) 
result.error (null || String)
result.user (false || (Object))
```
## License
MIT. Copyright (c) 2015 pataiadam
