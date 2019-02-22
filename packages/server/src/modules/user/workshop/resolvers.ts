import { ResolverMap } from "../../../types/graphql-utils";
import { Workshop } from "../../../entity/Workshop";
import { formatYupError } from "../../../utils/formatYupError";
import { duplicateEmail } from "./errorMessages";
import { validWorkshopFormSchema } from "@abb/common";
// import { createConfirmEmailLink } from "./createConfirmEmailLink";
// import { sendEmail } from "../../../utils/sendEmail";

export const resolvers: ResolverMap = {
  Mutation: {
    workshop: async (
      _,
      args: GQL.IWorkshopOnMutationArguments
      // { redis, url }
    ) => {
      try {
        await validWorkshopFormSchema.validate(args, { abortEarly: false });
      } catch (err) {
        return formatYupError(err);
      }

      const { name, email, school, classs, mobile, area } = args;
      console.log(args);
      const userAlreadyExists = await Workshop.findOne({
        where: { email },
        select: ["id"]
      });

      if (userAlreadyExists) {
        return [
          {
            path: "email",
            message: duplicateEmail
          }
        ];
      }

      const workshop = Workshop.create({
        name,
        email,
        school,
        classs,
        mobile,
        area
      });

      await workshop.save();

      // if (process.env.NODE_ENV !== "test") {
      //   await sendEmail(
      //     email,
      //     await createConfirmEmailLink(url, user.id, redis)
      //   );
      // }

      return null;
    }
  }
};
