import { ResolverMap } from "../../../types/graphql-utils";
import { Url } from "../../../entity/Url";

export const resolvers: ResolverMap = {
  Query: {
    dashboard: async (
      _,
      args: GQL.IDashboardOnQueryArguments
      // { redis, url }
    ) => {
      const { desc_number, name } = args;
      console.log(desc_number);
      console.log(name);
      const UrlDesc = await Url.findOne({
        where: { desc_number },
        select: ["id", "desc"]
      });

      return JSON.stringify(UrlDesc);
    }
  },

  Mutation: {
    enter_url: async (
      _,
      args: GQL.IEnterUrlOnMutationArguments
      // { redis, url }
    ) => {
      const { desc, desc_number } = args;

      const description = Url.create({
        desc,
        desc_number
      });

      await description.save();

      return null;
    }
  }
};
