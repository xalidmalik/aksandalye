export const categories = [
  {
    id: "1",
    slug: "bar-sandalyeleri",
  },
  {
    id: "2",
    slug: "benchler",
  },
  {
    id: "3",
    slug: "berjerler",
  },
  {
    id: "4",
    slug: "kitapliklar",
  },
  {
    id: "5",
    slug: "koltuklar",
  },
  {
    id: "6",
    slug: "konsollar",
  },
  {
    id: "7",
    slug: "localar",
  },
  {
    id: "8",
    slug: "masa-ayaklari",
  },
  {
    id: "9",
    slug: "masalar",
  },
  {
    id: "10",
    slug: "ofis-sandalyeleri",
  },
  {
    id: "11",
    slug: "puflar",
  },
  {
    id: "12",
    slug: "sandalye",
  },
  {
    id: "13",
    slug: "sehpa-ayaklari",
  },
  {
    id: "14",
    slug: "sehpalar",
  },
  {
    id: "15",
    slug: "servantlar",
  },
  {
    id: "16",
    slug: "tablalar",
  },
  {
    id: "17",
    slug: "uniteler",
  },
];

export const findCategoryById = (id: string) => {
  return categories.find((cat) => cat.id == id).slug;
};

export const findCategoryBySlug = (slug: string) => {
  return categories.find((cat) => cat.slug == slug).id;
};
