import { redirect } from "next/navigation";

// Redirect bare /privacy path to the canonical legal page
export default function PrivacyRedirect() {
  redirect("/legal/privacy-policy");
}
