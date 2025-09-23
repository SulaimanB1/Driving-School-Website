import React from "react";
import {Form, Input, Button} from "@heroui/react";

export default function BookLesson() {
    const [submitted, setSubmitted] = React.useState(null);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        etSubmitted(data);
    };

    return (
        <>
            <div>
                <h2 class="text-xl pt-10 pb-10">
                    Book a Lesson Today
                </h2>

                <div>
                    <p class="text-l pb-5">
                        Fill in this form to notify us about your booking. 
                        We will contact you within 24 hours. 
                        Begin your driving journey today.
                    </p>
                    <div class="justify-center text-center flex">
                        <Form className="w-full max-w-xs" onSubmit={onSubmit}>
                            <Input
                                isRequired
                                errorMessage="Please enter a valid email"
                                label="Email"
                                labelPlacement="outside"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
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
