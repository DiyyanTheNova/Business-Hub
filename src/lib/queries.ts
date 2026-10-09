// Fetch all published jobs, ordered by newest first
export const jobsQuery = `*[_type == "job"] | order(postedAt desc) {
  _id,
  title,
  company,
  location,
  type,
  salary,
  postedAt,
  featured
}`;

// Fetch all marketplace listings
export const marketplaceQuery = `*[_type == "marketplace"] | order(_createdAt desc) {
  _id,
  title,
  seller,
  category,
  price,
  rating,
  featured,
  description
}`;
// Fetch all opportunities
export const opportunitiesQuery = `*[_type == "opportunity"] | order(_createdAt desc) {
  _id,
  title,
  entity,
  category,
  status,
  deadline,
  description
}`;