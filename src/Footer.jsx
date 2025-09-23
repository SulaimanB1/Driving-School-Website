import {Image, NavbarBrand} from "@heroui/react";
import Logo from "./images/wheel.png";

export const SDSLogo = () => {
  return (
    <Image
    alt="SDS Logo"
    className="w-10 h-10"
    src={Logo}
    />
  );
};

export default function Footer() {
    return (
        <footer class="w-full h-full mt-5 grid grid-cols-3 grid-rows-1 gap-4">
            <div class="p-5">
                <h2 class="font-bold text-l pb-3"> Links </h2>
                <p>
                    <a class="font-bold text-l underline" href="">GitHub</a>
                </p>
                <p>
                    <a class="font-bold text-l underline" href="">LinkedIn</a>
                </p>
            </div>

            <div class="p-5">
                <h2 class="font-bold text-l pb-3">Location</h2>
                <p>Hackney Town Hall</p>
                <p> Mare Street </p>
                <p> London, E8 1EA </p>
            </div>

            <div class="p-5">
                <h2 class="font-bold text-l pb-3">Contact</h2>
                <p> 0712 345 6789 </p>
            </div>
        </footer>
    )
}