import SubServiceLayout from "../../../components/SubServiceLayout";

export default function PrivateLimited() {
  return (
    <SubServiceLayout
      title="Private Limited Company Registration"
      description="The most popular business structure for startups and growing companies in India."
      features={[
        { title: "Limited Liability", description: "Protects personal assets of directors." },
        { title: "Easy Fundraising", description: "Preferred by investors and VCs." },
        { title: "Separate Legal Entity", description: "Company has its own legal identity." },
        { title: "Complete Compliance", description: "ROC filings handled by experts." },
      ]}
      ctaText="Register Pvt Ltd Company"
    />
  );
}
