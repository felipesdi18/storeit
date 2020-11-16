import knex from 'knex';

/*const db = knex({
    client: 'mysql',
    connection: {
      host : 'mysql-free-tier.caarlltihqdx.us-east-1.rds.amazonaws.com',
      user : 'gbrant_admin',
      password : 'imissiseedeadpeople',
      database : 'equipments'
    }
  });*/
  const db = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'Felipe.123',
      database : 'storeit'
    }
  });

  export default db;