import ContentWrapper from "./components/Content/ContentWrapper";
import NavBar from "./components/Nav/NavBar";

export default function Home() {
  return (
    <div className="py-6 w-[80%] m-auto">
      <NavBar/>
      <h1 className="w-full text-center font-bold text-3xl my-10">Find GitHub repos</h1>
      <ContentWrapper/>
    </div>
  );
}
