import { defineAuth, defineFunction } from "@aws-amplify/backend";
/**
 * Define and configure your auth resource
 * When used alongside data, it is automatically configured as an auth provider for data
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    // add social providers
  },
  triggers: {
    preSignUp: defineFunction({ entry: '../functions/pre-sign-up-handler.ts' })
  }
});
