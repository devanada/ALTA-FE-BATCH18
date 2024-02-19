import { Button } from "@/components/ui/button";
import Layout from "@/components/trial/layout";

const Homepage = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="h-1/2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/26071254/mengenal-fakta-menarik-seputar-kucing-anggora-turki-halodoc.jpg.webp)",
        }}
      >
        {Array.from({ length: 5 }).map((value) => (
          <p className="border">TEST</p>
        ))}
      </div>
      <div className="flex flex-col md:flex-row ">
        <p>Gambar Kucing</p>
      </div>
    </div>
  );
};

export default Homepage;
