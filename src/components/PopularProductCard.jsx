import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full mb-7">
      <img
        src={imgURL}
        alt={name}
        className="md:w-[290px] md:h-[290px] w-[220px] h-[190px] cursor-pointer hover:border-2 border-transparent rounded-3xl"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-xl md:text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl md:text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
