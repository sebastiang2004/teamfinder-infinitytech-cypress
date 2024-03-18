import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import axios from "axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function validateSchema(schema, data) {

  const validateSchema = schema.safeParse(data);
  let errorsMessage = null;

  if (!validateSchema.success) {
    const errors = validateSchema.error.errors;
    errorsMessage = {}
    errors.forEach(function (error) {
      const path = error.path[0];
      if (path) {
        errorsMessage[path] = error.message;
      }
    });
  }
  return errorsMessage

}

export async function getDepartments(organizationId) {
  const response = await axios.get(`/organization/${organizationId}/departments`)
  return response.data
}
