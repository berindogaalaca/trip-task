import CompanyDetails from "@/components/profile/company-details";
import BankDetails from "@/components/profile/bank-details";
import ContactDetails from "@/components/profile/contact-details";
import Settings from "@/components/profile/settings";

export default function ProfilePageView() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <CompanyDetails />
      <BankDetails />
      <ContactDetails />
      <Settings />
    </div>
  );
}
