# scout-frontend

The frontend for Scout, written in React with Material UI components. This project is not in production yet, but it is under active development.

## Contributions 

Found a bug? Submit a report [here](https://github.com/WildMeOrg/scout-frontend/issues/new).

Developer contributions are very much appreciated =). Take a gander at the [contribution guide](https://github.com/WildMeOrg/scout-frontend/blob/master/CONTRIBUTION_GUIDE.md). If you are a Python dev interested in helping with our project, take a look at the [backend](https://github.com/wildmeorg/houston). And if you are a data scientist/machine learning guru take a look at [WBIA](https://github.com/WildMeOrg/wildbook-ia). 

We are also looking for help from graphic designers! Please send an email to ben@wildme.org if you are interested.

## Development 

To successfully run the project, you will need to recreate one file that is gitignored for security reasons, `/src/constants/apiKeys.js`. Follow the instructions in the template located at `/src/constants/apiKeysTemplate.js`. After that, just run

```js
npm install 
npm start 
```

The development environment is mostly used on OSX but should work on Windows as well. Use Powershell or edit the `npm start:win32` command to set `NODE_ENV` using the appropriate syntax for your preferred shell.

Unfortunately, the frontend isn't very useful without a backend. To run the frontend in its proper context, you need to [install Docker](https://docs.docker.com/get-docker/), clone [Houston](https://github.com/WildMeOrg/houston), and edit `docker-compose.mws.yml`. Modify the `dev-frontend` image to point to your local copy of the code in the following manner:

```
dev-frontend:
  ...
  volumes:
    - ./dev-frontend/docker-entrypoint.sh:/docker-entrypoint.sh
    - ../../_frontend:/code     <---- delete this line!
    - /location/of/frontend:/code <----- add this line!
```

After that you should be able to run the following commands:
```
./scripts/mws/activate.sh 
docker-compose pull
docker-compose up
```

Note: `docker-compose pull` takes a very long time to finish the first time around! But when it's all done you should be able to see the frontend on `localhost:84`. If you see a 502 nginx error instead, you may need to increase the amount of memory available to Docker. 6GB memory and 2GB swap works for my system.

The following commands are helpful when developing in this manner:

 - `docker-compose up -d`: Run all containers in daemon mode, so you don't see all the logs running together.
 - `docker-compose restart <image>`: Restart a particular docker image (remember these are listed in `docker-compose.yml`).
 - `docker-compose logs -f <image>`: Show logs for a particular image.
 - `docker-compose down`: Stop all images.

## Configuration and build

A build can be initiated with the command `npm run build`. You can specify the URL for Houston in `/config/config.json` or as a command line argument. Here are some examples:

```
npm run build -- --env=houston=https://houston.dyn.wildme.io
npm run build -- --env=houston=http://localhost:9999
npm run build -- --env=houston=relative // use relative file paths for API requests
```

