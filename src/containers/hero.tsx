export const Hero = () => {
  return (
    <div className="container my-32 flex gap-4 flex-col">
      <h1 className="text-5xl font-bold text-center">
        Sandalye, Masa ve Oturma Grubları
      </h1>
      <p className="text-center max-w-xl mx-auto w-full text-gray-500 text-lg">
        Birbirinden farklı ürünleri hemen keşfet. Beğendiğin ürünler için
        bizimle{" "}
        <a href="tel:05352303076" className=" text-blue-500">
          (535)230-30-76
        </a>{" "}
        numara üzerinden iletişime geçebilirsiniz
      </p>
    </div>
  );
};
