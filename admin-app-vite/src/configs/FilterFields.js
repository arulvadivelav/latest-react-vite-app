// FilterConfig.js

const FilterConfig = [
  // 🔍 Basic
  {
    name: "gender",
    type: "select",
    label: "Gender",
    apiKey: "gender",
    size: "small",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },

  {
    name: "min_age",
    type: "number",
    label: "Minimum Age",
    size: "small",
    apiKey: "min_age",
  },
  {
    name: "max_age",
    type: "number",
    label: "Maximum Age",
    size: "small",
    apiKey: "max_age",
  },
//   {
//     name: "age_range",
//     type: "range-double",
//     label: "Age Range",
//     min: 18,
//     max: 60,
//     default: [18, 60],
//     apiKey: ["age_min", "age_max"], // 🔥 maps to backend
//     },

  {
    name: "religion",
    type: "select",
    label: "Religion",
    apiKey: "religion",
    size: "small",
    options: [
      { label: "Hindu", value: "hindu" },
      { label: "Christian", value: "christian" },
      { label: "Muslim", value: "muslim" },
    ],
  },

  {
    name: "caste",
    type: "text",
    label: "Caste",
    apiKey: "caste",
    size: "large",
    
  },

  // 🌍 Location (nested support)
  {
    name: "country",
    type: "select",
    label: "Country",
    size: "medium",
    apiKey: "location.country",
    options: [
      { label: "India", value: "india" },
    ],
  },
  {
    name: "state",
    type: "select",
    label: "State",
    apiKey: "location.state",
    size: "medium",
    dependsOn: "country",
  },
  {
    name: "city",
    type: "select",
    label: "City",
    size: "medium",
    apiKey: "location.city",
    dependsOn: "state",
  },

  {
    name: "marital_status",
    type: "select",
    label: "Marital Status",
    size: "small",
    apiKey: "marital_status",
    options: [
      { label: "Single", value: "single" },
      { label: "Divorced", value: "divorced" },
    ],
  },

  {
    name: "education",
    type: "select",
    label: "Education",
    size: "medium",
    apiKey: "education",
    options: [
      { label: "B.E", value: "be" },
      { label: "MBA", value: "mba" },
      { label: "MCA", value: "mca" },
    ],
  },

  {
    name: "profession",
    type: "text",
    label: "Profession",
    size: "medium",
    apiKey: "profession",
  },

  {
    name: "income",
    type: "select",
    label: "Income",
    size: "small",
    apiKey: "income",
    options: [
      { label: "Below 3L", value: "0-3" },
      { label: "3L - 6L", value: "3-6" },
      { label: "6L+", value: "6+" },
    ],
  },

  {
    name: "mother_tongue",
    type: "select",
    label: "Mother Tongue",
    size: "small",
    apiKey: "mother_tongue",
    options: [
      { label: "Tamil", value: "tamil" },
      { label: "Malayalam", value: "malayalam" },
    ],
  },

  {
    name: "star",
    type: "text",
    label: "Star",
    size: "small",
    apiKey: "star",
  },

  {
    name: "rasi",
    type: "text",
    label: "Rasi",
    size: "small",
    apiKey: "rasi",
  },

  {
    name: "height",
    type: "select",
    label: "Height",
    size: "small",
    apiKey: "height",
    options: [
      { label: "5.0 ft", value: "5.0" },
      { label: "5.5 ft", value: "5.5" },
      { label: "6.0 ft", value: "6.0" },
    ],
  },

  {
    name: "diet",
    type: "select",
    label: "Diet",
    size: "small",
    apiKey: "diet",
    options: [
      { label: "Veg", value: "veg" },
      { label: "Non-Veg", value: "nonveg" },
    ],
  },

  {
    name: "smoking",
    type: "select",
    label: "Smoking",
    size: "small",
    apiKey: "smoking",
    options: [
      { label: "No", value: "no" },
      { label: "Yes", value: "yes" },
    ],
  },

  {
    name: "drinking",
    type: "select",
    label: "Drinking",
    size: "small",
    apiKey: "drinking",
    options: [
      { label: "No", value: "no" },
      { label: "Yes", value: "yes" },
    ],
  },

  {
    name: "family_status",
    type: "select",
    label: "Family Status",
    size: "medium",
    apiKey: "family_status",
    options: [
      { label: "Middle Class", value: "middle" },
      { label: "Upper Class", value: "upper" },
    ],
  }
];

export default FilterConfig;