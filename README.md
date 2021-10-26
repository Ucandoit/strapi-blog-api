# Strapi-blog-api

Backend of my personal website using strapi to provide contents with its rest API.

## Development

* Create a `.env` file to define environnement variables, default variables can be found in `config/database.js` and `config/server.js`
* run `yarn develop` to start in developement mode

## Deploy

The deploy process is to build a docker image which will be pushed to a private registry and then deployed to a kubernetes cluster.

* A secret to private docker registry must be created in `deploy` folder

```bash
kubectl create secret docker-registry docker-registry -n ucandoit --docker-server=<registry> --docker-username=<USER> --docker-password=<PASSWORD> --dry-run=client -o yaml > secret-registry.yaml
```

* deploy with `kustomize` (:warning: need to provide environement variable `PG_PASSWORD`)

```bash
PG_PASSWORD=<PASSWORD> kustomize build deploy/kustomize | kubectl apply -f -
```

## TODO

* [ ] put secrets in vault
* [ ] add Gitlab actions to auto deploy
