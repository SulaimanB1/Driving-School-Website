import React from "react";
import {Form, Input, Button} from "@heroui/react";
import {Select, SelectSection, SelectItem} from "@heroui/select";
import {Textarea} from "@heroui/react";

export default function BookLesson() {
    const [email, setEmail] = React.useState("");
    const [submitted, setSubmitted] = React.useState(null);

    const onSubmit = (e) => {
        event.preventDefault()

        const data = Object.fromEntries(new FormData(e.currentTarget));

        //setSubmitted(data);


        console.log("Name:", data.name);
        console.log("Email:", data.email);
        console.log("Phone Number:", data.phone_number);
        console.log("Postcode:", data.postcode);
        console.log("Transmission:", data.transmission);
        console.log("Message:", data.message);

        document.getElementById("form").reset();
    };

    return (
        <>
            <div>
                <h2 className="text-xl pt-10 pb-10">
                    Book a Lesson Today
                </h2>

                <div>
                    <p className="text-l pb-5">
                        Fill in this form to notify us about your booking. 
                        We will contact you within 24 hours. 
                        Begin your driving journey today.
                    </p>
                    <div className="justify-center text-center flex">
                        <Form id="form" className="w-full max-w-xs" onSubmit={onSubmit}>
                            <Input
                                isRequired
                                errorMessage="Please enter a valid name"
                                label="Name"
                                labelPlacement="outside"
                                name="name"
                                placeholder="Enter your name"
                                type="text"
                            />

                            <Input
                                isRequired
                                errorMessage="Please enter a valid email"
                                label="Email"
                                labelPlacement="outside"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                                value={email}
                                onValueChange={setEmail}
                            />

                            <Input
                                isRequired
                                errorMessage="Please enter a valid phone number"
                                label="Phone Number"
                                labelPlacement="outside"
                                name="phone_number"
                                placeholder="Enter your phone number"
                                type="tel"
                            />

                            <Input
                                isRequired
                                errorMessage="Please enter a postcode"
                                label="Postcode"
                                labelPlacement="outside"
                                name="postcode"
                                placeholder="Enter your postcode"
                                type="text"
                            />

                            <Select
                                isRequired
                                label="Automatic or Manual?"
                                labelPlacement="outside"
                                placeholder="Select a transmission"
                                name="transmission"
                            >
                                <SelectItem key="Automatic">Automatic</SelectItem>
                                <SelectItem key="Manual">Manual</SelectItem>
                            </Select>

                            
                            <Textarea
                                isRequired
                                errorMessage="Please enter a message"
                                classNames={{
                                    base: "max-w-xs",
                                    input: "resize-y min-h-[40px]",
                                }}
                                label="Message"
                                labelPlacement="inside"
                                name="message"
                                placeholder="Enter your message"
                                type="text"
                            />

                            <Button type="submit" variant="bordered">
                                Submit
                            </Button>
                            {submitted && (
                                <div className="text-small text-default-500">
                                You submitted: <code>{JSON.stringify(submitted)}</code>
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
