import { meals } from "../data/meals.js";
import { Meal, Category } from "./models.js";
export const resolvers = {
  Query: {
    meals: async (parent, args) => {
      return await Meal.findAll({
        include: Category,
        order: [["title", "ASC"]],
      });
    },
    meal: async (parent, args) => {
      return await Meal.findByPk(args.id, {
        include: Category,
      });
    },
    categories: async () => {
      return await Category.findAll({ include: Meal });
    },
  },
};
