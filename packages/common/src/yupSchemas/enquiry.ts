import * as yup from "yup";

export const emailNotLongEnough = "email must be at least 3 characters";
export const passwordNotLongEnough = "password must be at least 3 characters";
export const invalidEmail = "email must be a valid email";
export const nameNotLongEnough = "name must be at least 3 characters";
export const schoolNotLongEnough = "school name must be at least 3 characters";
export const mobileNotLongEnough = "mobile number must be only 10 numbers";

const phoneRegExp = /^(?:\+971|00971|0)?(?:50|51|52|55|56|58|2|3|4|5|6|7|9)\d{7}$/;

export const validEnquiryFormSchema = yup.object().shape({
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
  area: yup
    .string()
    .max(255)
    .required(),
  parentname: yup.string().max(255),
  grade: yup
    .string()
    .max(255)
    .required(),
  enquiry: yup
    .string()
    .max(510)
    .required(),
  mobile: yup
    .string()
    .matches(phoneRegExp, "mobile number is not valid !")
    .required()
});
