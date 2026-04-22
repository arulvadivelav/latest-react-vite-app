// RegisterFields.js

const RegisterFields = [
  {
    step: 0,
    fields: [
      { name: "firstName", type: "text", label: "First Name", required: true },
      { name: "lastName", type: "text", label: "Last Name", required: true },
      { name: "dateOfBirth", type: "date", label: "Date of Birth", required: true },

      {
        name: "gender",
        type: "select",
        label: "Gender",
        required: true,
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ],
      },

      {
        name: "maritalStatus",
        type: "select",
        label: "Marital Status",
        required: true,
        options: [
          { label: "Single", value: "single" },
          { label: "Divorced", value: "divorced" },
          { label: "Widowed", value: "widowed" },
        ],
      },

      {
        name: "religion",
        type: "select",
        label: "Religion",
        required: true,
        options: [
          { label: "Hindu", value: "hindu" },
          { label: "Christian", value: "christian" },
        ],
      },

      {
        name: "subcaste",
        type: "select",
        label: "Subcaste",
        required: true,
        fullWidth: true,
        options: [
          { label: "Karukku Pattaiyathar", value: "karukku_pattaiyathar" },
          { label: "Melnattar", value: "melnattar" },
        ],
      },
    ],
  },

  {
    step: 1,
    fields: [
      { name: "phone", type: "tel", label: "Phone Number", required: true },

      {
        name: "occupation",
        type: "select",
        label: "Occupation",
        required: true,
        options: [
          { label: "Software Engineer", value: "engineer" },
          { label: "Doctor", value: "doctor" },
          { label: "Teacher", value: "teacher" },
        ],
      },

      {
        name: "interests",
        type: "checkbox",
        label: "Interests",
        fullWidth: true,
        options: ["Travel", "Reading", "Movies", "Cooking", "Gaming"],
      },

      {
        name: "languages",
        type: "checkbox",
        label: "Languages Known",
        fullWidth: true,
        options: ["English", "Hindi", "Tamil", "Telugu"],
      },
    ],
  },

  {
    step: 2,
    fields: [
      { name: "height", type: "number", label: "Height (cm)", required: true },
      { name: "weight", type: "number", label: "Weight (kg)", required: true },

      {
        name: "partnerReligion",
        type: "select",
        label: "Partner Religion",
        options: [
          { label: "No Preference", value: "" },
          { label: "Hindu", value: "hindu" },
          { label: "Christian", value: "christian" },
        ],
      },

      {
        name: "education",
        type: "select",
        label: "Education",
        required: true,
        options: [
          { label: "Bachelor's", value: "graduate" },
          { label: "Master's", value: "pg" },
        ],
      },

      {
        name: "expectations",
        type: "checkbox",
        label: "Expectations",
        fullWidth: true,
        options: ["Good Job", "Family Oriented", "Financial Stability"],
      },

      {
        name: "lifestyle",
        type: "checkbox",
        label: "Lifestyle",
        fullWidth: true,
        options: ["Vegetarian", "Non-Vegetarian", "Fitness Enthusiast"],
      },
    ],
  },
];

export default RegisterFields;