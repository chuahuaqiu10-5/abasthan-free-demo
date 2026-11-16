# abasthan-free-demo

A minimal Node.js demo app for Abasthan's free tier.

## What it is

A simple web service built with only Node.js built-in modules (no third-party dependencies). It serves a small page that says "Hello from Abasthan Free Demo".

## Run locally

```bash
npm start
```

Then open http://localhost:3000 (or the port in the `PORT` environment variable).

## Deploy on Abasthan

Create a Web Service from this repository on Abasthan, pick the Free plan ($0, 512 MB RAM, 0.1 vCPU), and use `npm start` as the start command. The app listens on `process.env.PORT` (falls back to 3000).
