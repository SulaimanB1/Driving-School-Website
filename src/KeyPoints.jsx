import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

export const Content = () => (
    <>
        <Card>
            <CardHeader className="flex gap-3 justify-center p-5">
                <h2 class="text-xl">
                    90% pass rate!
                </h2> 
            </CardHeader>
            <Divider/>
            <CardBody class="justify-center p-5">
                <p>
                    We have helped countless people pass first time,
                    let us help you on your driving journey!
                </p>
            </CardBody>
        </Card>

        <Card>
            <CardHeader className="flex gap-3 justify-center p-5">
                <h2 class="text-xl">
                    25+ years of experience!
                </h2>
            </CardHeader>
            <Divider/>
            <CardBody class="justify-center p-5">
                <p>
                    Our instructors have decades of experience together
                    and will ensure you are prepared for your exam!
                </p>
            </CardBody>
        </Card>

        <Card>
            <CardHeader className="flex gap-3 justify-center p-5">
                <h2 class="text-xl">
                    Everyone is welcome!
                </h2>
            </CardHeader>
            <Divider/>
            <CardBody class="justify-center p-5">
                <p>
                    Whether you are born and raised in the UK or you're new,
                    we will help you become familiar with the roads!
                </p>
            </CardBody>
        </Card>
    </>
);

export default function KeyPoints() {
    return (
        <Content />
    );
}