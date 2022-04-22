import knex from "knex";
const knexfile = require("../../knexfile");

import imagesService from "../services/images";

export const resolverRestaurants = {
  Query: {
    restaurants: () =>
      knex(knexfile)("restaurant")
        .join("country", "restaurant.country_code", "country.country_code")
        .select("*")
        .then(
          (
            restaurants: {
              restaurant_uuid: any;
              name: any;
              country_code: any;
              locales: any;
            }[]
          ) => {
            return Promise.all(
              restaurants.map(
                async ({ restaurant_uuid, name, country_code, locales }) => {
                  return {
                    restaurantUuid: restaurant_uuid,
                    name,
                    country: {
                      code: country_code,
                      locales,
                    },
                    images: await imagesService.getImages(),
                    allowedReview: country_code === "FR",
                  };
                }
              )
            );
          }
        ),
  },
};
