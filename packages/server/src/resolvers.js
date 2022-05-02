import { meals } from "../data/meals.js";
import { Meal, Category, User } from "./models.js";
export const resolvers = {
  Query: {
    users: async (parent, args) => {
      return await User.findAll({
        order: [["lastName", "ASC"]],
      });
    },
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
  Mutation: {
    addUser: async (parent, args) => {
      const { input } = args;
      await User.create(input);
      return { ok: true };
    },
    addMeal: async (parent, args) => {
      const { input } = args;
      await Meal.create(input);
      return { ok: true };
    },
    updateMeal: async (parent, { id, input }) => {
      await Meal.update(input, {
        where: { id },
      });
      return { ok: true };
    },
    deleteMeal: async (parent, { id }) => {
      await Meal.destroy({ where: { id } });
      return { ok: true };
    },
  },
};
