import TopNav from "./NavbarTop.jsx"
import Footer from "./Footer.jsx"
import KeyPoints from "./KeyPoints.jsx"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";
import Pricing from "./Pricing.jsx"

export const Content = () => (
    <>
        <div>
            <div>
                <h2 class="pt-10 pb-5 text-xl">
                    London's Best Driving School
                </h2>
                <p class="text-x">
                    Automatic and manual lessons to help you pass your driving test first time!
                </p>
            </div>

            <div class="pt-10 gap-3 grid grid-cols-2 sm:grid-cols-3">
                <KeyPoints />
            </div>

            <div>
                <h2 id="pricing" class="pt-10 pb-5 text-xl">
                    Pricing
                </h2>
                
                <Pricing />
            </div>
        </div>
    </>
);

export default function Home() {
    return (
        <Content />
    );
}