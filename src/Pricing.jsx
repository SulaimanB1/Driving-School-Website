import {Accordion, AccordionItem} from "@heroui/react";
import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react"
import { Link } from "react-router-dom"

export default function Pricing() {
  return (
    <div className="gap-3 grid grid-cols-2">
        <div class="items-center justify-center">
            <h2 class="text-xl pb-5">
                Our Services & Pricings
            </h2>
            <p class="pb-5">Whatever your budget is, we have you covered!</p>
            <Button as={Link} color="warning" to="/book-lesson" variant="flat">
                Book Now
            </Button>
        </div>

        <div>
            <Accordion selectionMode="multiple">
                <AccordionItem key="1" aria-label="Accordion 1" title="Beginner Lessons - £35 per hour">
                    If you are new to driving, then this will ensure you are prepared for your driving test.
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Refresher Lessons - £40 per hour">
                    If you haven't driven in a while, then this will help you become confident again in no time.
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Pass Plus - £45 per hour">
                    Once you have passed, you can keep learning with the Pass Plus program and on motorways.
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  );
}

