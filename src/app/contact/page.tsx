import Footer from "@/components/common/footer";
import Navbar from "@/components/common/nav";
import Condata from "@/components/elements/condata";
import ConForm from "@/components/elements/conform";
import { Toaster } from "react-hot-toast";

export default function Contact() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <Condata />
      <ConForm />
      <Footer />
    </>
  );
}
