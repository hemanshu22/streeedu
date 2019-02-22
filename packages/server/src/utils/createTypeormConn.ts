import { createConnection, getConnectionOptions } from "typeorm";
import { Enquiry } from "../entity/Enquiry";
import { Workshop } from "../entity/Workshop";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return process.env.NODE_ENV === "production"
    ? createConnection({
        ...connectionOptions,
        url: process.env.DATABASE_URL,
        entities: [Enquiry, Workshop],
        name: "default"
      } as any)
    : createConnection({ ...connectionOptions, name: "default" });
};
