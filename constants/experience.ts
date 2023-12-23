export type ExperienceInterface = {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: {
    joiningDate: string;
    leavingDate: string;
  };
  points: string[];
}[];
export const experience:ExperienceInterface = [
  {
    title: "Associate Graphic Designer",
    companyName: "Affinity X (Pune)",
    icon: "",
    iconBg: "",
    date: {
      joiningDate: "Sep'22",
      leavingDate: "Present",
    },
    points: [
      "Delivering 100% best quality designs to high end USA based clients.",
      "Working round the clock, with productivity of 20 orders per day.",
    ],
  },
  {
    title: "Graphic Designer",
    companyName: "Mohan Impex Pvt. Ltd.",
    icon: "",
    iconBg: "",
    date: {
      joiningDate: "Jan'22",
      leavingDate: "July'22",
    },
    points: [
      "Increased follower count on social media through animated and live shooting videos.",
      "Uplifted sales of cocoa powder and other products through A + banner in Amazon.",
    ],
  },
  {
    title: "Graphic Designer",
    companyName: "Shakambhari Ispat & Power Ltd",
    icon: "",
    iconBg: "",
    date: {
      joiningDate: "Aug'21",
      leavingDate: "Jan'22",
    },
    points: [
      "Increased follower count on social media using innovative designs.",
      "Uplifted sales through GSB and NLB board designs for Railway/Metro.",
      "Ideation and redesign of in-house stationaries",
    ],
  },
  {
    title: "Graphic Design Intern",
    companyName: "Shakambhari Ispat & Power Ltd.",
    icon: "",
    iconBg: "",
    date: {
      joiningDate: "Apr'21",
      leavingDate: "Jun'21",
    },
    points: [
      "Website traffic increment for a major eatery through social media creatives and motion graphic",
      "Photo-editing for multiple luxury fashion brands.",
    ],
  },
];
