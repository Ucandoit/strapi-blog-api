# Configurations

## Setting up multiple environments

By default, strapi allows to define variables in a `.env` file at the root. If we want to create more than one environment, we can achieve this by customize the path of the `.env` file using `ENV_PATH` before starting the application:

```sh
ENV_PATH=/absolute/path/to/.env yarn start

```
