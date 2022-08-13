import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const DefaultTools = ({ id, title, description, items }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
          <PrismicRichText field={title} />
        </div>

        <div className="mb-6 text-xl text-gray-800">
          <PrismicRichText field={description} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {items.map((item) => (
            <PrismicNextImage
              field={item.image}
              width={150}
              height={150}
              objectFit="cover"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
