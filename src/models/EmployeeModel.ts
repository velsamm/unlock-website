import type { StaticImageData } from 'next/image';

export interface EmployeeModel {
  photoSrc: StaticImageData | string;
  name: string;
  text: string[];
}