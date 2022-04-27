import { Book, Category } from "./models.js";
export const resolvers = {
  Query: {
    books: async (parent, args) => {
      return await Book.findAll({
        include: Category,
        order: [["title", "ASC"]],
      });
    },
    book: async (parent, args) => {
      return await Book.findByPk(args.id, {
        include: Category,
      });
    },
    categories: async () => {
      return await Category.findAll({ include: Book });
    },
  },
  Mutation: {
    addBook: async (parent, args) => {
      const { input } = args;
      await Book.create(input);
      return { ok: true };
    },
    updateBook: async (parent, { id, input }) => {
      await Book.update(input, {
        where: { id },
      });
      return { ok: true };
    },
  },
};
