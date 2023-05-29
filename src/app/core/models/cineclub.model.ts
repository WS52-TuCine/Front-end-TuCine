
//export interface CineClub {
  //id:       number;
  //title:    string;
  //subtitle: string;
  //points:   number;
  //image:    string;
//}
// New Models

export interface Business{

  id:number;
  name: string;
  social_reason: string;
  RUC: number;
  phone: number;
  email: string;
  image_logo: string;
  image_banner: string;
  description: string;
  date_attention: string;
  address: string;
  reference_address: string;
  Owner_id: 1,
  BusinessType_id: 1

}
export interface BusinessType{

    id: number;
    name: string
  }
