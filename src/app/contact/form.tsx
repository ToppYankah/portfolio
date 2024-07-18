"use client";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import CheckButton from "~/components/CheckButton";
import Input from "~/components/Input";
import TextArea from "~/components/TextArea";

import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldError } from "~/components/FormFieldError";
import { ContactFormData } from "~/interfaces/interfaces";
import { useRef } from "react";
import FormSubmitterView from "~/components/FormSubmitterView";
import useFormSubmitter from "~/hooks/form-submitter";
import { useUploadThing } from "~/utils/upload_thing_utils";
import * as actions from "~/actions";

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
  interest: z.array(z.object({ name: z.string() }), { message: "Required" }),
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  budget: z.string().min(1, { message: "Required" }),
  attachments: z.array(z.object({ name: z.string() })),
});

export default function ContactForm() {
  const attachmentFilesRef = useRef<{ [key: string]: File }>({});
  const {
    reset,
    control,
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: { interest: [] },
  });

  const {
    fields: interests,
    append: addInterest,
    remove: removeInterest,
  } = useFieldArray({
    control,
    name: "interest",
  });

  const {
    fields: attachments,
    append: addAttachment,
    remove: removeAttachment,
  } = useFieldArray({
    control,
    name: "attachments",
  });

  const { data, formId, handleSubmit: handleFormSubmit } = useFormSubmitter();

  const $ut = useUploadThing("imageUploader");

  const onSubmit = async (data: ContactFormData) => {
    const successful = await handleFormSubmit(async () => {
      if (Object.keys(attachmentFilesRef.current).length) {
        const uploadResult = await $ut.startUpload(
          Object.values(attachmentFilesRef.current),
        );

        if (uploadResult?.length) {
          data.attachments = uploadResult.map(({ name, size, type, url }) => ({
            name,
            size,
            type,
            url,
          }));
        }

        await actions.addClientContact(data);
      }
    });

    if (successful) {
      attachmentFilesRef.current = {};
      return reset();
    }
  };

  const onError = (error: FieldErrors) => {
    console.log("ERROR", error);
  };

  const handleBudgetCheck = (budget: string) => {
    setValue("budget", budget, { shouldValidate: true });
  };

  const handleAttachment = (event: React.ChangeEvent<HTMLInputElement>) => {
    const totalAttachments = Object.keys(attachmentFilesRef.current).length;
    const spaceAvailable = 5 - totalAttachments;

    if (!spaceAvailable) return;

    const files = event.target.files;

    if (files) {
      const loopRange =
        files.length > spaceAvailable ? spaceAvailable : files.length;

      for (let i = 0; i < loopRange; i++) {
        const file = files[i];
        if (file) {
          addAttachment({ name: file.name });
          attachmentFilesRef.current[file.name] = file;
        }
      }
    }
  };

  const handleRemoveAttachment = (path: string, index: number) => {
    removeAttachment(index);
    delete attachmentFilesRef.current[path];
    console.log(attachmentFilesRef.current);
  };

  return (
    <div className="flex max-w-[600px] flex-col">
      <h1 className="font-serif text-[clamp(30px,3.5vw,60px)] leading-[1.1em]">
        Got an Idea <br /> I can help with?
      </h1>
      <form
        id={formId}
        className="mt-8 flex flex-col"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <h5 className="text-sm font-semibold leading-[1em]">
              What are you interested in?
            </h5>
            {errors.interest && (
              <FormFieldError useMargin={false} error={errors.interest[0]} />
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {services.map((service, index) => (
              <CheckButton
                key={service}
                text={service}
                register={register}
                name={`interest.${index}`}
                onCheck={() => {
                  const found = interests.find((i) => i.name === service);
                  if (found) removeInterest(interests.indexOf(found));
                  else addInterest({ name: service });
                }}
                check={!!interests.find((i) => i.name === service)}
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
        <div className="mb-10">
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
        <div className="mb-20">
          <h5 className="text-sm font-semibold leading-[1em]">
            Attachment{" "}
            <small className="ml-2 font-thin text-gray-400">(Optional)</small>
          </h5>
          <div className="mt-5 rounded-2xl border-2 border-dotted dark:border-white/20">
            {attachments.length ? (
              <div className="flex flex-wrap gap-3 p-2">
                {attachments.map((file, index) => (
                  <AttachmentItem
                    file={file.name}
                    key={"attachment-" + file.id}
                    onRemove={() => handleRemoveAttachment(file.name, index)}
                  />
                ))}
                {attachments.length < 5 ? <AddAttachmentButton /> : <></>}
              </div>
            ) : (
              <label
                htmlFor="attachment"
                className="flex cursor-pointer items-center justify-center gap-2 p-5 text-xs text-gray-400 dark:text-white/50"
              >
                <PlusIcon width={15} />
                <span>Click to add attachment</span>
              </label>
            )}
            <input
              type="file"
              className="sr-only"
              id="attachment"
              multiple
              accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.pdf,.jpg,.png,.jpeg"
              onChange={handleAttachment}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit(onSubmit, onError)}
          className="flex justify-between gap-3 bg-inverted py-5 font-semibold text-inverted"
        >
          Submit Request <ArrowUpRightIcon width={20} />
        </button>
      </form>
      <FormSubmitterView data={data} formId={formId} message="Submitting..." />
    </div>
  );
}

const AttachmentItem = ({
  file,
  onRemove,
}: {
  file: string;
  onRemove: () => void;
}) => {
  return (
    <div className="flex gap-4 rounded-2xl bg-gray-100 p-2 px-4 pr-2 text-xs dark:bg-white/10">
      <span aria-label={file}>{file}</span>
      <button
        type="button"
        onClick={onRemove}
        title="Remove attachment"
        aria-description="Remove attachment"
        className="grid aspect-square w-5 place-items-center rounded-full bg-gray-300 p-0 dark:bg-white/10"
      >
        <XMarkIcon width={15} />
      </button>
    </div>
  );
};

const AddAttachmentButton = () => {
  return (
    <label
      htmlFor="attachment"
      className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-inverted p-2 px-4 text-xs text-inverted"
    >
      <PlusIcon width={15} />
      <span>Add</span>
    </label>
  );
};
