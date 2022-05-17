export interface Brocante {
  id: string;
  name: string;
  type: string;
  img: string;
  sellers: BrocanteSellers;
  adress: BrocanteAdress;
  date: BrocanteDate;
  contact: BrocanteContact;
  streets: BrocanteStreet[];
  parking: BrocanteParking[];
  interacts: BrocanteInteract[];
}

interface BrocanteSellers {
  count: number;
  type: string;
}

interface BrocanteAdress {
  town: string;
  zipCode: string;
  state: string;
  positionGps: {
    lat: string;
    long: string;
  };
}

interface BrocanteDate {
  day: string;
  month: string;
  year: string;
  timeStarted: {
    hour: string;
    minute: string;
  };
  timeEnd: {
    hour: string;
    minute: string;
  };
}

interface BrocanteContact {
  phone: string;
  email: string;
  website: string;
  facebookProfil: string;
}

interface BrocanteStreet {
  name: string;
  positionGps: {
    lat: string;
    long: string;
  };
}

interface BrocanteParking {
  name: string;
  positionGps: {
    lat: string;
    long: string;
  };
}

interface BrocanteInteract {
  name: string;
  type: string[];
  description: string;
  positionGps: {
    lat: string;
    long: string;
  };
}
