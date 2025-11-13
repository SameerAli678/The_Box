import { servicesDataT } from "@/Types/services-data-type";
import Architecture from "../../../public/service/Architecture.png";
import Construction from "../../../public/service/Construction.png";
import Consultation from "../../../public/service/Consultation.png";
import Electric from "../../../public/service/Electric.png";
import Renovation from "../../../public/service/Renovation.png";
import RepairServices from "../../../public/service/Repair Services.png";

export const servicesData: servicesDataT[] = [
  {
    img: Construction.src,
    text: "Construction",
  },
  {
    img: Renovation.src,
    blue: true,
    text: "Renovation",
  },
  {
    img: Consultation.src,
    text: "Repair Services",
  },
  {
    img: RepairServices.src,
    blue: true,
    text: "Construction",
  },
  {
    img: Architecture.src,
    text: "Architecture",
  },
  {
    img: Electric.src,
    blue: true,
    text: "Electric",
  },
];
