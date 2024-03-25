export interface info_place{
  name_place: string;
  subname_place: string;
  price: number;
  duration: {
    type_duration: string;
    hour: string;
  }[];
  description: string;
  include: any[];
  no_include: any[];
  recomendation: any[];
  note: any[];
  condition: any[];      
}