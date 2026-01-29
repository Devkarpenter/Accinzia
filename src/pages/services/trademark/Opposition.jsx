import SubServiceLayout from "../../../components/SubServiceLayout";

export default function TrademarkRegistration() {
  return (
    <SubServiceLayout
      title="Trademark Registration"
      description="Secure your brand name, logo, or slogan legally."
      features={[
        { title: "Brand Protection", description: "Legal ownership of your brand." },
        { title: "Expert Filing", description: "Handled by trademark professionals." },
        { title: "Objection Support", description: "Complete legal assistance." },
        { title: "Online Process", description: "100% digital & transparent." },
      ]}
      ctaText="Register Trademark"
    />
  );
}
