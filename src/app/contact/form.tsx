"use client";
import { FieldErrors, useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import CheckButton from "~/components/CheckButton";
import Input from "~/components/Input";
import TextArea from "~/components/TextArea";

const services: string[] = [
  "Web Design",
  "Web Development",
  "UI/UX Design",
  "Mobile App Development (iOS/Android)",
  "Motion Design",
  "Collaboration",
  "Platform Redesign",
  "Branding",
];

const budget: string[] = ["300-500", "500-800", "800-1K", "> 2K"];

const schema: ZodType<ContactFormData> = z.object({
  interest: z.array(z.string()),
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  budget: z.string().min(1, { message: "Required" }),
  attachments: z.array(z.string()),
});

import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldError } from "~/components/FormFieldError";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { ContactFormData } from "~/interfaces/interfaces";

export default function ContactForm() {
  const {
    register,
    setValue,
    setError,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("SUCCESS", data);
  };

  const onError = (error: FieldErrors) => {
    console.log("ERROR", error);
  };

  const handleInterestCheck = (service: string, index: number) => {
    if (getValues("interest").includes(service)) {
      const newValue = getValues("interest").filter(
        (i) => i !== service && i !== undefined,
      );

      return setValue(`interest`, [...newValue], { shouldValidate: true });
    }

    setValue(`interest.${getValues("interest").length}`, service, {
      shouldValidate: true,
    });
  };

  const handleBudgetCheck = (budget: string) => {
    setValue("budget", budget, { shouldValidate: true });
  };

  return (
    <div className="flex flex-col max-w-[600px]">
      <h1 className="font-serif text-[clamp(30px,3.5vw,60px)] leading-[1.1em]">
        Got an Idea <br /> I can help with?
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mt-8 flex flex-col"
      >
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <h5 className="text-sm font-semibold leading-[1em]">
              What are you interested in?
            </h5>
            {errors.interest && (
              <FormFieldError useMargin={false} error={errors.interest.root} />
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {services.map((service, index) => (
              <CheckButton
                key={service}
                text={service}
                register={register}
                name={`interest.${index}`}
                onCheck={() => handleInterestCheck(service, index)}
                check={((getValues("interest") || []) as string[]).includes(
                  service,
                )}
              />
            ))}
          </div>
        </div>
        <div className="mb-10">
          <Input
            name="name"
            error={errors.name}
            register={register}
            placeholder="Enter your Name"
          />
        </div>
        <div className="mb-10">
          <Input
            name="email"
            register={register}
            error={errors.email}
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-10">
          <TextArea
            name="message"
            register={register}
            error={errors.message}
            placeholder="Let's discuss your idea"
          />
        </div>
        <div className="mb-20">
          <div className="mb-3 flex items-center gap-2">
            <h5 className="text-sm font-semibold leading-[1em]">
              Project Budget (USD)
            </h5>
            {errors.budget && (
              <FormFieldError useMargin={false} error={errors.budget} />
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {budget.map((budget) => (
              <CheckButton
                key={budget}
                text={budget}
                onCheck={() => handleBudgetCheck(budget)}
                check={getValues("budget") === budget}
                register={register}
                name="budget"
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="flex justify-between gap-3 bg-inverted py-5 font-semibold text-inverted"
        >
          Submit Request <ArrowUpRightIcon width={20} />
        </button>
      </form>
    </div>
  );
}
