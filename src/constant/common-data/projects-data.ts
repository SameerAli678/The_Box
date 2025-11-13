import wishStone from "../../../public/images/wishStone.png";
import OreganoHeight from "../../../public/images/OreganoHeight.png";
import Parkinstons from "../../../public/images/Parkinstons.png";
import Wildstone from "../../../public/images/Wildstone.png";
import { projectsDataT } from "@/Types/projects-data-type";

export const projectsData: projectsDataT[] = [
  {
    img: Wildstone.src,
    text: "Wildstone Infra Hotel",
    description: "2715 Ash Dr. San Jose, South Dakota",
  },
  {
    img: wishStone.src,
    text: "Wish Stone Building",
    description: "2972 Westheimer Rd. Santa Ana, Illinois ",
  },
  {
    img: Parkinstons.src,
    text: "Mr. Parkinston’s House",
    description: "3517 W. Gray St. Utica, Pennsylvania",
  },
  {
    img: OreganoHeight.src,
    text: "Oregano Height",
    description: "2464 Royal Ln. Mesa, New Jersey ",
  },
];
