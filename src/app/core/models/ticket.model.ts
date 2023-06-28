import { Showtime } from "./showtime.model";
import { Customer } from "./user-profile.model";

export interface Ticket {
    id?: number;
    Customer_id?: Customer;
    Showtime_id?: Showtime;
    numberSeats?: number;
    totalPrice?: number;
}