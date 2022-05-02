import { Model, DataTypes, BOOLEAN } from "sequelize";
import { dbConnection } from "./connection.js";
import { meals, categories } from "../data/meals.js";

const { STRING, INTEGER, FLOAT } = DataTypes;

class Meal extends Model {}

Meal.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: { type: STRING, allowNull: false },
    imgsrc: { type: STRING, allowNull: false },
    description: { type: STRING, allowNull: false },
    price: { type: FLOAT, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "meal",
      plural: "meals",
    },
  }
);

class Category extends Model {}

Category.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "category",
      plural: "categories",
    },
  }
);

class User extends Model {}

User.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: STRING, allowNull: false },
    lastName: { type: STRING, allowNull: false },
    address: { type: STRING, allowNull: false },
    email: { type: STRING, allowNull: false },
    newsletter: { type: BOOLEAN, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "user",
      plural: "users",
    },
  }
);

// Define our associations
Meal.belongsTo(Category);
Category.hasMany(Meal);

await dbConnection.sync({ force: true });

// seed the database!
await Category.bulkCreate(categories);
await Meal.bulkCreate(
  meals.map((m) => {
    const { id, ...meal } = m;
    return meal;
  })
);

export { Meal, Category, User };
