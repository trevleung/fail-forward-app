
![](client/components/assets/fail.png) ![](client/components/assets/foward.png)
Fail Forward is a application that tracks all of the conversions and keeps you motivated within in the job hunting process.
There are 4 different stages job applications can be stored *Applied*, *Phone Interview*, *Technical Interview*, *Final Interview* where conversion rates can be found beside each stage. Fail forward offers Full CRUD operations with an easter egg ```?``` button that converts rejections into bitcoins.

![](client/components/assets/cookie2.png)

## How To Get Started
Database : You will need a POSTGRESQL URI. You can go to https://www.elephantsql.com and register for an account. Create a .env file at the main directory and set DB_URI to the URI you want to use. It will look something like this:
```
DB_URI = <your postgres URI>
```

1. clone this repo
2. bundle react app with webpack by using the command
```
npm build
```
3. Start server and open localhost:3000 on the webpage
```
npm start
```
