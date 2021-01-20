# UI website

Simple express.js app with healthcheck for kubernetes and static content inside.

## Run application

```shell-script
node index.js
```

## Build docker image

```shell-script
docker build --tag belenot/ui .
```

## Push docker image

```shell-script
docker push belenot/ui
```