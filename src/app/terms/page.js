import { redirect } from "next/navigation";

// Redirect bare /terms path to the canonical legal page
export default function TermsRedirect() {
  redirect("/legal/terms");
}
