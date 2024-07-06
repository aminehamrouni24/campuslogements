import AdminBro from "admin-bro";
import AdminBroExpress from "admin-bro-expressjs";
import AdminBroMongoose from "admin-bro-mongoose";

import User from "./api/models/user.models.js";
import Listing from "./api/models/listing.models.js";
const contentNavigation = {
  name: "CampusLogements",
  icon: "Success",
};

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  rootPath: "/admin",

  resources: [
    {
      resource: User,
      options: { navigation: contentNavigation },
      properties: {
        fullname: {
          isVisible: { list: true, filter: true, show: true, edit: false },
        },
        username: {
          isVisible: { list: true, filter: true, show: true, edit: false },
        },
        password: {
          isVisible: { list: false, filter: false, show: false, edit: false },
        },
        email: {
          isVisible: { list: false, filter: false, show: true, edit: false },
        },
        avatar: {
          isVisible: { list: false, filter: false, show: true, edit: false },
        },
      },
    },
    {
      resource: Listing,
      options: { navigation: contentNavigation },
      
    },
  ],
  branding: {
    companyName: "CampusLogements",
  },
  preventAssignment: true,
});

const adminRouter = AdminBroExpress.buildRouter(adminBro);

export default adminRouter;
