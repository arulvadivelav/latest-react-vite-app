// mock/profiles.js

const allProfiles = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 26,
    gender: "female",
    religion: "hindu",
    caste: "Brahmin",
    location: { country: "india", state: "tn", city: "chennai" },
    marital_status: "single",
    education: "be",
    profession: "Software Engineer",
    income: "6+",
    mother_tongue: "tamil",
    star: "Rohini",
    rasi: "Vrishabha",
    height: "5.5",
    diet: "veg",
    smoking: "no",
    drinking: "no",
    family_status: "middle",
    images: ["https://randomuser.me/api/portraits/women/1.jpg"],
  },
  {
    id: 2,
    name: "Ananya Krishnan",
    age: 28,
    gender: "female",
    religion: "hindu",
    caste: "Nair",
    location: { country: "india", state: "kl", city: "kochi" },
    marital_status: "single",
    education: "mba",
    profession: "Marketing Manager",
    income: "6+",
    mother_tongue: "malayalam",
    star: "Ashwini",
    rasi: "Mesha",
    height: "5.5",
    diet: "nonveg",
    smoking: "no",
    drinking: "no",
    family_status: "upper",
    images: ["https://randomuser.me/api/portraits/women/2.jpg"],
  },
  {
    id: 3,
    name: "Kavitha Rajan",
    age: 24,
    gender: "female",
    religion: "hindu",
    caste: "Chettiar",
    location: { country: "india", state: "tn", city: "coimbatore" },
    marital_status: "single",
    education: "mca",
    profession: "Data Analyst",
    income: "3-6",
    mother_tongue: "tamil",
    star: "Bharani",
    rasi: "Mesha",
    height: "5.0",
    diet: "veg",
    smoking: "no",
    drinking: "no",
    family_status: "middle",
    images: ["https://randomuser.me/api/portraits/women/3.jpg"],
  },
  {
    id: 4,
    name: "Lakshmi Nair",
    age: 30,
    gender: "female",
    religion: "hindu",
    caste: "Pillai",
    location: { country: "india", state: "kl", city: "trivandrum" },
    marital_status: "divorced",
    education: "mba",
    profession: "HR Manager",
    income: "6+",
    mother_tongue: "malayalam",
    star: "Karthika",
    rasi: "Vrishabha",
    height: "5.5",
    diet: "nonveg",
    smoking: "no",
    drinking: "no",
    family_status: "upper",
    images: ["https://randomuser.me/api/portraits/women/4.jpg"],
  },
  {
    id: 5,
    name: "Meena Sundar",
    age: 25,
    gender: "female",
    religion: "christian",
    caste: "Nadar",
    location: { country: "india", state: "tn", city: "chennai" },
    marital_status: "single",
    education: "be",
    profession: "Civil Engineer",
    income: "3-6",
    mother_tongue: "tamil",
    star: "Mrigashira",
    rasi: "Mithuna",
    height: "5.0",
    diet: "nonveg",
    smoking: "no",
    drinking: "no",
    family_status: "middle",
    images: ["https://randomuser.me/api/portraits/women/5.jpg"],
  },
  {
    id: 6,
    name: "Rajesh Kumar",
    age: 29,
    gender: "male",
    religion: "hindu",
    caste: "Mudaliar",
    location: { country: "india", state: "tn", city: "coimbatore" },
    marital_status: "single",
    education: "mba",
    profession: "Business Analyst",
    income: "6+",
    mother_tongue: "tamil",
    star: "Punarvasu",
    rasi: "Mithuna",
    height: "5.5",
    diet: "nonveg",
    smoking: "no",
    drinking: "yes",
    family_status: "upper",
    images: ["https://randomuser.me/api/portraits/men/1.jpg"],
  },
  {
    id: 7,
    name: "Arjun Menon",
    age: 27,
    gender: "male",
    religion: "hindu",
    caste: "Nair",
    location: { country: "india", state: "kl", city: "kochi" },
    marital_status: "single",
    education: "be",
    profession: "Software Developer",
    income: "6+",
    mother_tongue: "malayalam",
    star: "Pushyami",
    rasi: "Karkataka",
    height: "6.0",
    diet: "nonveg",
    smoking: "no",
    drinking: "yes",
    family_status: "middle",
    images: ["https://randomuser.me/api/portraits/men/2.jpg"],
  },
  {
    id: 8,
    name: "Vikram Pillai",
    age: 32,
    gender: "male",
    religion: "hindu",
    caste: "Pillai",
    location: { country: "india", state: "kl", city: "trivandrum" },
    marital_status: "divorced",
    education: "mca",
    profession: "IT Consultant",
    income: "6+",
    mother_tongue: "malayalam",
    star: "Makha",
    rasi: "Simha",
    height: "5.5",
    diet: "nonveg",
    smoking: "no",
    drinking: "no",
    family_status: "upper",
    images: ["https://randomuser.me/api/portraits/men/3.jpg"],
  },
  {
    id: 9,
    name: "Suresh Babu",
    age: 31,
    gender: "male",
    religion: "christian",
    caste: "Nadar",
    location: { country: "india", state: "tn", city: "chennai" },
    marital_status: "single",
    education: "mba",
    profession: "Financial Advisor",
    income: "3-6",
    mother_tongue: "tamil",
    star: "Uttara",
    rasi: "Kanya",
    height: "5.5",
    diet: "nonveg",
    smoking: "no",
    drinking: "no",
    family_status: "middle",
    images: ["https://randomuser.me/api/portraits/men/4.jpg"],
  },
  {
    id: 10,
    name: "Deepa Iyer",
    age: 23,
    gender: "female",
    religion: "hindu",
    caste: "Brahmin",
    location: { country: "india", state: "tn", city: "coimbatore" },
    marital_status: "single",
    education: "be",
    profession: "Product Designer",
    income: "3-6",
    mother_tongue: "tamil",
    star: "Hasta",
    rasi: "Kanya",
    height: "5.0",
    diet: "veg",
    smoking: "no",
    drinking: "no",
    family_status: "middle",
    images: ["https://randomuser.me/api/portraits/women/10.jpg"],
  },
  {
    id: 11,
    name: "Karthik Venkat",
    age: 34,
    gender: "male",
    religion: "hindu",
    caste: "Brahmin",
    location: { country: "india", state: "tn", city: "chennai" },
    marital_status: "single",
    education: "mba",
    profession: "Operations Lead",
    income: "6+",
    mother_tongue: "tamil",
    star: "Chitra",
    rasi: "Tula",
    height: "6.0",
    diet: "veg",
    smoking: "no",
    drinking: "no",
    family_status: "upper",
    images: ["https://randomuser.me/api/portraits/men/5.jpg"],
  },
  {
    id: 12,
    name: "Nithya Ramesh",
    age: 27,
    gender: "female",
    religion: "hindu",
    caste: "Gounder",
    location: { country: "india", state: "tn", city: "coimbatore" },
    marital_status: "single",
    education: "mca",
    profession: "Systems Engineer",
    income: "3-6",
    mother_tongue: "tamil",
    star: "Swati",
    rasi: "Tula",
    height: "5.5",
    diet: "veg",
    smoking: "no",
    drinking: "no",
    family_status: "middle",
    images: ["https://randomuser.me/api/portraits/women/12.jpg"],
  },
];

/**
 * Simulated API: filter + paginate profiles
 */
export const fetchProfiles = ({ filters = {}, page = 1, itemsPerPage = 4 }) => {
  let results = [...allProfiles];

  // Apply filters
  if (filters.gender) results = results.filter(p => p.gender === filters.gender);
  if (filters.min_age) results = results.filter(p => p.age >= Number(filters.min_age));
  if (filters.max_age) results = results.filter(p => p.age <= Number(filters.max_age));
  if (filters.religion) results = results.filter(p => p.religion === filters.religion);
  if (filters.caste) results = results.filter(p => p.caste?.toLowerCase().includes(filters.caste.toLowerCase()));
  if (filters.marital_status) results = results.filter(p => p.marital_status === filters.marital_status);
  if (filters.education) results = results.filter(p => p.education === filters.education);
  if (filters.profession) results = results.filter(p => p.profession?.toLowerCase().includes(filters.profession.toLowerCase()));
  if (filters.income) results = results.filter(p => p.income === filters.income);
  if (filters.mother_tongue) results = results.filter(p => p.mother_tongue === filters.mother_tongue);
  if (filters.star) results = results.filter(p => p.star?.toLowerCase().includes(filters.star.toLowerCase()));
  if (filters.rasi) results = results.filter(p => p.rasi?.toLowerCase().includes(filters.rasi.toLowerCase()));
  if (filters.height) results = results.filter(p => p.height === filters.height);
  if (filters.diet) results = results.filter(p => p.diet === filters.diet);
  if (filters.smoking) results = results.filter(p => p.smoking === filters.smoking);
  if (filters.drinking) results = results.filter(p => p.drinking === filters.drinking);
  if (filters.family_status) results = results.filter(p => p.family_status === filters.family_status);

  // Nested location filters
  if (filters.country)
    results = results.filter(p => p.location.country === filters.country);

  if (filters.state)
    results = results.filter(p => p.location.state === filters.state);

  if (filters.city)
    results = results.filter(p => p.location.city === filters.city);
  const totalItems = results.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * itemsPerPage;
  const items = results.slice(start, start + itemsPerPage);

  return {
    items,
    page: safePage,
    totalPages,
    totalItems,
    itemsPerPage,
  };
};

/**
 * Count matching profiles without pagination
 */
export const countProfiles = (filters = {}) => {
  return fetchProfiles({ filters, page: 1, itemsPerPage: 9999 }).totalItems;
};

export default allProfiles;