import dimensions from "./dimensions";
import { moderateScale } from "./scalling";


export function normalize(size: number): number {
  return moderateScale(size);
}

const IsDevice = (): boolean => {
  return dimensions.relativeWidth(100) < 513;
};

export { IsDevice };
