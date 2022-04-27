import { Model, DataTypes } from "sequelize";
import { dbConnection } from "./connection.js";
import { books, categories } from "../data/Books.js";

const { STRING, INTEGER, FLOAT } = DataTypes;

class Book extends Model {}

Book.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: { type: STRING, allowNull: false },
    imgsrc: { type: STRING, allowNull: false },
    publisher: { type: STRING, allowNull: false },
    author: { type: STRING, allowNull: false },
    description: { type: STRING, allowNull: false },
    price: { type: FLOAT, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "book",
      plural: "books",
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
Book.belongsTo(Category);
Category.hasMany(Book);

await dbConnection.sync({ force: true });

// seed the database!
await Category.bulkCreate(categories);
await Book.bulkCreate(
  books.map((m) => {
    const { id, ...book } = m;
    return book;
  })
);

export { Book, Category };
