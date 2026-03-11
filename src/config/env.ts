export const env = {
  ServerURL: String(process.env.NEXT_PUBLIC_SERVER_URL),
  MongoURI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
}
