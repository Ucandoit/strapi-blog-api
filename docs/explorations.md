# Explorations

## database update policy

when running `yarn develop` or `yarn start`, strapi will create or update automatically all the content types based on models stored as json file in `/api/<type>/models/` if there are any changes.

As of version < 4, strapi will only create new tables and columns in the database, and will delete **nothing**. That means even when changing a table name or a column name, it will create new ones but old ones will still be there which makes the database not very clean.

> :bulb: In the upcoming release of version 4, there will be features to remove unnecessary tables and columns. (cf. [this topic](https://github.com/strapi/strapi/issues/1114))
