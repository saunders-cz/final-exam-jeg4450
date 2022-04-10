import { meals } from "../data/meals.js";
import { Meal, Category } from "./models.js";
export const resolvers = {
  Query: {
    meals: async (parent, args) => {
      return await Meal.findAll({
        include: Category,
      });
    },
    meal: async (parent, args) => {
      return await Meal.findByPk(args.id, { include: Category });
    },
  },
};
