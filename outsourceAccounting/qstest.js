const qs = require("qs");

const query = qs.stringify(
  {
    populate: {
      heroSection: {
        populate: {
          bgImage: true,
          ukFlage: true,
          Card: {
            populate: {
              imgComponent: true,
            },
          },
        },
      },
    },
  },
  { encodeValuesOnly: true }
);

const url = `http://localhost:1337/api/home-page?${query}`;
console.log(url);
