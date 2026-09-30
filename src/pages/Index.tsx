import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Audience from "@/components/site/Audience";
import HowItWorks from "@/components/site/HowItWorks";
import Stories from "@/components/site/Stories";
import Prices from "@/components/site/Prices";
import Faq from "@/components/site/Faq";
import RequestForm from "@/components/site/RequestForm";
import Contacts from "@/components/site/Contacts";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Audience />
      <HowItWorks />
      <Stories />
      <Prices />
      <Faq />
      <RequestForm />
      <Contacts />
    </main>
  </div>
);

export default Index;
