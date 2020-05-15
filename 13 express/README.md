# Express

According to the official homepage Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

For more details see http://expressjs.com/.

## Installation

[Here](https://expressjs.com/en/starter/installing.html) you find a tutorial how to install Express.

## HTTP Caching

If you reload a page and analyze the networt traffic (e.g. with Chrome DevTools) you can see that the Express webserver responses with HTTP Statuscode 304 ("Not Modified"). In this way the webserver tells the client, that the requested ressource has not changed. So the client can use the already cached resource.

To validate whether a cached resource is still up-to-date, Express uses ETags. For further information about HTTP Caching and ETags read [this post](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=de).

## ngrok

To get a public URL to your local webserver (e.g. for testing) you can use [ngrok](https://ngrok.com/).

### Use ngrok without installation

You can execute ngrok without installation by using `npx`. With following command you get a URL for http requests to port 3000:

```bash
npx ngrok http 3000
```

![img](./images/ngrok.png)

### Install ngrok globally

If you often use ngrok you should install it globally:

```bash
npm install ngrok -g
```

Then you can execute ngrok faster and without `npx`:

```bash
ngrok http 3000
```

### Install ngrok locally

Unfortunately, permission problems can make a global installation a little bit tricky. A simple solution is to install ngrok locally in your project directory as a development dependency.

Open your project directory in the terminal. Execute `npm init` (if you haven't already done) and install ngrok afterwards:

```bash
npm install ngrok --save-dev
```

Then you can execute ngrok with following command:

```bash
npx ngrok http 3000
```

The downside of this approach is, that you have to install ngrok in every project you need it.

## nodemon

[nodemon](https://www.npmjs.com/package/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

### Install nodemon globally

If you often use nodemon you should install it globally:

```bash
npm install -g nodemon
```

Then you can execute your `app.js` with nodemon:

```bash
nodemon app.js
```

### Install nodemon locally

Alternatively it's possible to install nodemon as a development dependency of your project:

```bash
npm install --save-dev nodemon
```

Then you can execute your `app.js` with nodemon by following command:

```bash
npx nodemon app.js
```
