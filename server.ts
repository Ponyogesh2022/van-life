import { createServer, Model, Response, Registry } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";

// Define Van type
export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: "simple" | "rugged" | "luxury";
  hostId: string;
}

// Define MirageJS Model
const VanModel: ModelDefinition<Van> = Model.extend({});

// Define MirageJS Schema Type
type EmptyFactories = Record<string, never>;
type AppRegistry = Registry<{ vans: typeof VanModel }, EmptyFactories>;
type AppSchema = Schema<AppRegistry>; // ✅ Corrected Schema type

// Create the MirageJS server
createServer({
  models: {
    vans: VanModel,
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      type: "simple",
      hostId: "123",
    });
    server.create("van", {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      type: "rugged",
      hostId: "123",
    });
    server.create("van", {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "luxury",
      hostId: "456",
    });
    server.create("van", {
      id: "4",
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "simple",
      hostId: "789",
    });
    server.create("van", {
      id: "5",
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
      type: "luxury",
      hostId: "789",
    });
    server.create("van", {
      id: "6",
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      type: "rugged",
      hostId: "123",
    });
  },

  routes() {
    this.namespace = "api";

    // ✅ FIXED: Use Schema<AppSchema> instead of Server<AppSchema>
    this.get("/vans", (schema: AppSchema) => {
      return schema.all("vans");
    });

    this.get("/vans/:id", (schema: AppSchema, request) => {
      const id = request.params.id;
      const van = schema.find("vans", id);
      return van ? van : new Response(404, {}, { error: "Van not found" });
    });

    this.get("/host/vans", (schema: AppSchema) => {
      return schema
        .all("vans")
        .models.map((model) => model.attrs as Van) // ✅ Extract attributes as Van
        .filter((van) => van.hostId === "123"); // ✅ Now TypeScript recognizes `hostId`
    });

    this.get("/host/vans/:id", (schema: AppSchema, request) => {
      const id = request.params.id;
      const van = schema.find("vans", id);
      return van ? van : new Response(404, {}, { error: "Van not found" });
    });
  },
});
