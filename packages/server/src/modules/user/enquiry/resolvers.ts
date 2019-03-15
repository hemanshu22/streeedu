import { ResolverMap } from "../../../types/graphql-utils";
import { Enquiry } from "../../../entity/Enquiry";
import { formatYupError } from "../../../utils/formatYupError";
import { validEnquiryFormSchema } from "@abb/common";
// import { createConfirmEmailLink } from "./createConfirmEmailLink";
// import { sendEmail } from "../../../utils/sendEmail";

export const resolvers: ResolverMap = {
  Mutation: {
    enquiry: async (
      _,
      args: GQL.IEnquiryOnMutationArguments
      // { redis, url }
    ) => {
      try {
        await validEnquiryFormSchema.validate(args, { abortEarly: false });
      } catch (err) {
        return formatYupError(err);
      }

      const {
        name,
        email,
        parentname,
        school,
        mobile,
        area,
        grade,
        enquiry
      } = args;

      const enquiryform = Enquiry.create({
        name,
        email,
        parentname,
        school,
        mobile,
        area,
        grade,
        enquiry
      });

      await enquiryform.save();

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
