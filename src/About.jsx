import {ScrollShadow, Image, NavbarBrand} from "@heroui/react";
import Team from "./Team.tsx";
import Logo from "./images/wheel.png";

export const Content = () => (
  <div class="h-full w-full" justify="center">
    <div>
      <h2 class="pt-10 pb-5 text-xl">
        About SDS
      </h2>
      <p class="text-x">
        We're an award winning driving school based in London. Our instructors have over 30+ years
        of experience and know these roads like the back of their hands. We are ready to teach you
        to drive and prepare you to pass first time. Book a lesson now to begin your journey. 
      </p>
    </div>

    <div>
      <h2 class="pt-10 pb-5 text-xl">
        Meet the Team
      </h2>
      <Team />
    </div>

    <div>
      <h2 class="pt-10 pb-5 text-xl">
        Our Location
      </h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4229316965316!2d-0.07535649999999999!3d51.5054564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603438b65db49%3A0x9e78421a085a6f2d!2sTower%20Bridge!5e0!3m2!1sen!2suk!4v1758895434527!5m2!1sen!2suk" height="350" class="w-full"></iframe>
    </div>
  </div>

);

export default function About() {
  return (
    <Content />
  );
}
