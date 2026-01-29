import SubServiceLayout from "../../../components/SubServiceLayout";

export default function StartupCertification() {
  return (
    <SubServiceLayout
      title="Startup India Certification"
      description="Get DPIIT recognition and unlock tax exemptions and funding benefits."
      features={[
        { title: "DPIIT Recognition", description: "Official government certification." },
        { title: "Tax Benefits", description: "Income tax exemption up to 3 years." },
        { title: "Funding Access", description: "Eligibility for government grants." },
        { title: "Fast Processing", description: "Handled end-to-end by experts." },
      ]}
      ctaText="Apply for Startup India"
    />
  );
}
