const { PrismaClient } = require('@prisma/client');

// We are forcing the URL directly into the constructor
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://tasktracker_db_xamn_user:XAfaGMKWRhvDtlSS8zyNQadydCd1tfSy@dpg-d7u7mphkh4rs738ignig-a.oregon-postgres.render.com/tasktracker_db_xamn"
    },
  },
});

module.exports = prisma;
