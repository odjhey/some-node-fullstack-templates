## Steps

1. install

   ```
   yarn install
   ```

1. align sqlite schema

   ```
   npx prisma migrate dev --name init
   ```

1. seed data

   ```
   npx prisma db seed --preview-feature
   ```

1. run

   ```
   yarn dev
   ```
