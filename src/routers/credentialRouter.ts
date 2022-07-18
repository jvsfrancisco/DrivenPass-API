import { Router } from "express";

import { validateToken } from "../middlewares/validateToken.js";
import * as credentialController from "../controllers/credentialController.js";
import { credentialSchema } from "../schemas/credentialSchema.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";

const credentialRouter = Router();

credentialRouter.post("/credentials", validateToken, validateSchema(credentialSchema), credentialController.createCredential);

export default credentialRouter;