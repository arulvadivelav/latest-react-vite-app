// FilterConfig.js

const FilterConfig = [
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
    name: "Rahu/Kethu",
    type: "select",
    label: "Rahu/Kethu",
    apiKey: "rahu_kethu",
    size: "small",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  }
];

export default FilterConfig;