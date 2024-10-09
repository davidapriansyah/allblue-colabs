***MIGRATION***

***1. Create Database***
npx sequelize-cli db:create 

***2. Generates a Model and its migration***

[//]: # (create model Profile)
npx sequelize-cli model:create --name Profile --attributes phoneNumber:string,shippingAddress:string,UserId:integer

[//]: # (create model Profile)
npx sequelize-cli model:create --name Profile --attributes phoneNumber:string,shippingAddress:string,UserId:integer

[//]: # (create model Category)
npx sequelize-cli model:create --name Category --attributes name:string

[//]: # (create model Product)
npx sequelize-cli model:create --name Product --attributes name:string,CategoryId:integer,price:integer,stock:integer,imageUrl:string

[//]: # (create model Order)
npx sequelize-cli model:create --name Order --attributes UserId:integer,ProductId:integer,quantity:integer,orderDate:date

***Buat Constraint Model***
- allowNull
- references (FK)

***3. Menjalankan migration***
npx sequelize-cli db:migrate


***SEEDING***

***1. Create seed file***
npx sequelize-cli seed:create --name seedUser
npx sequelize-cli seed:create --name seedProfile
npx sequelize-cli seed:create --name seedCategory
npx sequelize-cli seed:create --name seedProduct
npx sequelize-cli seed:create --name seedOrder

***2. modify seed file nya (bagian Up dan Down nya)***
- read file json
- mapping
- delete el.id
- el.createdAt
- el.updatedAt
- return el
- queryInterface.bulkInsert

***2. Jalankan seed file***
// seed all
npx sequelize-cli db:seed:all

// seed file satu per satu
npx sequelize-cli db:seed --seed 20241009155820-seedUser.js
npx sequelize-cli db:seed --seed 20241009155833-seedProfile.js
npx sequelize-cli db:seed --seed 20241009155841-seedCategory.js
npx sequelize-cli db:seed --seed 20241009155849-seedProduct.js
npx sequelize-cli db:seed --seed 20241009155856-seedOrder.js