"use client";

import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "See My Work",
      value: "work",
      content: (
        <div className="relative w-full rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>See My Works</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aperiam ducimus. Magni,
            modi! Necessitatibus rem blanditiis eaque voluptates? Error, iure odit culpa accusamus
            placeat quos! Labore, fuga ex maxime id ad molestias repellat sapiente! Magni quos, ad
            fuga enim, ipsa tenetur, veniam distinctio illum molestiae optio repellendus at
            perferendis repellat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          </div>
        </div>
      ),
    },
    {
      title: "Talk With Me",
      value: "talks",
      content: (
        <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Talk With Me</p>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur inventore, dolore
            enim repellat mollitia dolorem cupiditate voluptas aliquid. Quod quae quidem ea
            necessitatibus accusamus totam velit vitae ex deleniti rem animi aspernatur repellendus
            odit ducimus inventore neque fugit soluta numquam, ratione officia recusandae autem.
            Omnis vero sint eveniet veritatis porro?
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="b relative mx-auto my-16 flex w-full max-w-5xl flex-col items-start justify-start [perspective:1000px]">
      <Tabs tabs={tabs} />
    </div>
  );
}
