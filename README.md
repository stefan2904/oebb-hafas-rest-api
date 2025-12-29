# oebb.transport.rest
https://v6.oebb.transport.rest an OEBB API


## Docker

```bash
docker build -t oebb.transport.rest .
docker run --rm --init -p 3000:3000 -e APP_HOSTNAME=your.hostname -e APP_NAME="App name" -e APP_EMAIL=your.email -e APP_RENDER_DEFAULT_PAGES=false -e APP_ENABLE_CORS=true oebb.transport.rest
```

### Container Environment Variables

- APP_HOSTNAME
- APP_NAME
- APP_EMAIL
- APP_RENDER_DEFAULT_PAGES
- APP_ENABLE_CORS
