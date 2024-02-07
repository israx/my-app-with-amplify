import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource.js";
import { myDemoFunction } from "./functions/my-demo-function/resource.js";


const backend = defineBackend({
  auth,
  myDemoFunction,
});
