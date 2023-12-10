import { rest } from "msw";

const baseURL = "https://drfapi90-4efd6b4b76d8.herokuapp.com/";

export const handlers = [
  // Mocks a request to the api. ctx means context
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
     // Mocked api request handlers will intercept test request and
    // respond with provided user data below
    return res(
       // Taken from rest.get url that stores user json data
      ctx.json({
        pk: 3,
        username: "tyrone",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
          //"https://res.cloudinary.com/dgjrrvdbl/image/upload/v1/media/../default_profile_fvwztb",
          "https://res.cloudinary.com/duekhyyes/image/upload/v1696759108/samples/default_profile_fvwztb.jpg"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];