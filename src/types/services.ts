export interface TimeSlot {
  time: string;
  activity: string;
}

export interface Schedule {
  title: string;
  timeSlots: TimeSlot[];
}

export interface ServiceDetails {
  intro: string;
  services?: string[];
  schedule?: Schedule;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  link: string;
  details?: ServiceDetails;
}