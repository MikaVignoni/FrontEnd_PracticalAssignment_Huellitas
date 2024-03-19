import Layout from "@/components/Layout";
import Volunteers from "@/components/Volunteers";
import Adopt from "@/components/Adopt";
import AboutUs from "@/components/AboutUs";

export default function About_us() {
  return (
    <Layout title={"HUELLITAS - Know Us"}> 

        <AboutUs />
        <Volunteers />
        <Adopt />

    </Layout>
  );
}
