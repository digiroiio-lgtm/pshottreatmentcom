import CtaBand from "@/components/ConfidentialAssessment";
import { DoctorCredentials, DoctorReviewCTA } from "@/components/DoctorCredentials";
import Faq from "@/components/Faq";
import { CauseMatters, Hero, HowItWorksFunnel, ProblemFinder, TreatmentFinder } from "@/components/HomeSections";
import InternationalPatientCTA from "@/components/InternationalPatientCTA";
import JsonLd from "@/components/JsonLd";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import PatientStories from "@/components/PatientStory";
import TreatmentComparison from "@/components/TreatmentComparison";
import { getPage } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/");

export default function HomePage() {
  const page = getPage("/")!;
  return (
    <div data-page-kind="home">
      <JsonLd page={page} breadcrumbs={[{ name: "Home", path: "/" }]} />
      <Hero answer={page.answer} />
      <ProblemFinder />
      <CauseMatters />
      <TreatmentFinder />
      <div className="max-w-6xl mx-auto px-4 pb-14 space-y-12">
        <TreatmentComparison heading="Compare ED treatments side by side" />
      </div>
      <HowItWorksFunnel />
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <DoctorCredentials />
            <DoctorReviewCTA placement="home-doctor" />
          </div>
          <InternationalPatientCTA placement="home-international" />
        </div>
        <PatientStories />
        <Faq items={page.faqs ?? []} />
        <CtaBand placement="home-bottom" />
        <MedicalDisclaimer />
      </div>
    </div>
  );
}
