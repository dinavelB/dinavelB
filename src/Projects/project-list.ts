import image from "../../public/edLibrary.png";
import ChronovaPic from "../../public/Chronova.png";
import FwdPic from "../../public/Fwd.png";

export const projects: { img: string; title: string; description: string }[] = [
  {
    img: image,
    title: "EdLibrary",
    description:
      "A system where users can tracked what books they currently borrowed and books that are available to download",
  },
  {
    img: ChronovaPic,
    title: "Chronova",
    description:
      "A System designed for solving time management problems Virtual assistants facing, such as timezone, deadlines and multiple projects. Chronova offers features like tasks tracking, deadlines tracking, accurate invoice, and a browser extension that detects VA activity.",
  },
  {
    img: FwdPic,
    title: "FWD Technologies",
    description:
      "A System designed for engineers to record attendance wherever they are working. This system includes features like, cash advance request, reimbursements and leave",
  },
];
