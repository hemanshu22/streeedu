import * as yup from "yup";

export const emailNotLongEnough = "email must be at least 3 characters";
export const invalidEmail = "email must be a valid email";
export const nameNotLongEnough = "name must be at least 3 characters";
export const schoolNotLongEnough = "school name must be at least 3 characters";
export const mobileNotLongEnough = "mobile number must be only 10 numbers";

export const validWorkshopFormSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  name: yup
    .string()
    .min(3, nameNotLongEnough)
    .max(255)
    .required(),
  school: yup
    .string()
    .min(3, schoolNotLongEnough)
    .max(255)
    .required(),
  classs: yup
    .string()
    .max(255)
    .required(),
  area: yup
    .string()
    .max(255)
    .required(),
  mobile: yup
    .number()
    .min(10, mobileNotLongEnough)
    .required()
});
