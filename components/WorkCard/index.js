import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkCard ({ img, name, description, link }) {
  return (
    <Link
      href={link}
      passHref
      className="ovserflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <BaseCard img={img} name={name} description={description} link={link}/>
    </Link>
  );
};

const BaseCard = React.forwardRef( ({img, name, description, link}, fref) => 
  (
    <a href={link} ref={fref}>
      <div
        className="relative h-48 mob:h-auto
        rounded-lg overflow-hidden 
        transition-all ease-out duration-300 "
      >
        <Image
          src={img}
          alt={name}
          width="100%" height="24rem" layout="responsive"
          objectFit="cover"
          className="
          rounded-lg shadow-lg
          [hover:scale-110 transition-all ease-out duration-300]
          "
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      </a>
  )
)

BaseCard.displayName = "BaseCard"; 