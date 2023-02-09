// backend
npx @nestjs/cli

// nest create *When creating a project
npx nest new backend

// backend start
yarn start:dev

// frontend start
yarn dev

Make sure to start docker.

// prisma command
// formatting *When there is no setting
npx prisma init
// table create
npx prisma migrate dev
// client start
npx prisma studio
// type create
npx prisma generate

// db setup
docker compose up -d
// db reset
docker compose rm -s -f -v
