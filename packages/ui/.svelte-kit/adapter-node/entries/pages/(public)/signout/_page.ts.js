import { s as supabaseClient } from "../../../../chunks/index4.js";
import { r as redirect } from "../../../../chunks/index.js";
async function load() {
  const response = await supabaseClient.auth.signOut();
  if (response?.error) {
    console.error(response.error);
  } else {
    redirect(307, "/signin");
  }
}
export {
  load
};
