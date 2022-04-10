import { Model, DataTypes } from "sequelize";
import { dbConnection } from "./connection.js";
import { meals, categories } from "../data/meals.js";

const { STRING, INTEGER, FLOAT } = DataTypes;

class Meal extends Model {}

Meal.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: STRING, allowNull: false },
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

export { Meal, Category };
