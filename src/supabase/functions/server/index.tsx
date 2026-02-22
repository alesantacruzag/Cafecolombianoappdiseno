import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-2d18c266/health", (c) => {
  return c.json({ status: "ok", message: "Server is running" });
});

// Mock endpoints (sin base de datos)
app.get("/make-server-2d18c266/products", (c) => {
  return c.json({ success: true, data: [] });
});

app.get("/make-server-2d18c266/experiences", (c) => {
  return c.json({ success: true, data: [] });
});

app.get("/make-server-2d18c266/orders", (c) => {
  return c.json({ success: true, data: [] });
});

app.get("/make-server-2d18c266/bookings", (c) => {
  return c.json({ success: true, data: [] });
});

Deno.serve(app.fetch);
