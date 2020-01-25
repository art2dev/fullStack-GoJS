import Sequelize from 'sequelize';

// import models then create array
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // each model
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
