declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_URL: string;
    MONGO_URI: string;
    JWT_SECRET: string;
  }
}
