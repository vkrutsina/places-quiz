#!/usr/bin/env node

const { db, Quiz } = require('../server/db');

const seed = async () => {
  await db.sync({ force: true });

  await Quiz.create({
    question: 'Where is this?',
  });

  db.close();
  console.log(`
    Seeding successful!
    Time to do stuff!
  `);
};

seed().catch((err) => {
  db.close();
  console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `);
});
