import Header from "../components/header/Header";
import ChipChangeSection from "../components/main/ChipChangeSection";
import ConversionForm from "../components/main/ConversionForm";
import ConversionHistory from "../components/main/ConversionHistory";
import Footer from "../components/footer/Footer";

export default function ConverterPage() {
  return (
    <>
      <Header />
      <ChipChangeSection />
      <ConversionForm />
      <ConversionHistory />
      <Footer />
    </>
  );
}
