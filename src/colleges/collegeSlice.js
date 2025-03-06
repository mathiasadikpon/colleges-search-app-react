import { COLLEGESDATA } from "../app/shared/COLLEGESDATA";
export const findCollegeById = (id) => {
  return COLLEGESDATA.find((college) => college.id === parseInt(id));
};
