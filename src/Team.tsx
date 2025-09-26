import {Card, CardBody, CardFooter, Image} from "@heroui/react";
import Avatar from "./images/avatar.png"

export default function Team() {
  const list = [
    {
      title: "Person 1",
      img: Avatar,
      info: "I'm a fully qualified driving instructor based in Tower Hamlets. I have 15+ years as a driving instructor.",
    },
    {
      title: "Person 2",
      img: Avatar,
      info: "I'm a fully qualified driving instructor based in Hackney. I have 12+ years as a driving instructor.",
    },
    {
      title: "Person 3",
      img: Avatar,
      info: "I'm a fully qualified driving instructor based in Southwark. I have 8+ years as a driving instructor.",
    },
    {
      title: "Person 4",
      img: Avatar,
      info: "I'm a fully qualified driving instructor based in Islington. I have 10+ years as a driving instructor.",
    }
  ];

  return (
    <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[260px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-large justify-center">
            <p>{item.title}</p>
          </CardFooter>
          <div>
            <p className="text-default-600">{item.info}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}