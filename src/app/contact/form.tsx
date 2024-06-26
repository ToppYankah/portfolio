"use client";
import { useEffect, useReducer, useState } from "react";
import CheckButton from "~/components/CheckButton";
import Input from "~/components/Input";
import TextArea from "~/components/TextArea";

const services: string[] = [
  "Web Development",
  "Mobile App Development",
  "Maintenance",
  "UI/UX Design",
  "Motion Design",
  "Collaboration",
  "Code Review",
  "Consultation",
];

const budget: string[] = ["300-500", "500-800", "800-1K", "> 2K"];

interface FormAction<Payload> {
  payload: Payload;
  type:
    | "setName"
    | "setEmail"
    | "setMessage"
    | "setBudget"
    | "setAttachments"
    | "setInterest";
}

interface FormState {
  interest: string[];
  name: string;
  email: string;
  message: string;
  budget: string;
  attachments: string[];
}

const initialState: FormState = {
  interest: [],
  name: "",
  email: "",
  message: "",
  budget: "",
  attachments: [],
};

type ReducerValue = (
  state: FormState,
  action: FormAction<string | string[]>,
) => FormState;

const reducer: ReducerValue = (state, action): FormState => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload as string };

    case "setEmail":
      return { ...state, email: action.payload as string };

    case "setMessage":
      return { ...state, message: action.payload as string };

    case "setBudget":
      return { ...state, budget: action.payload as string };

    case "setInterest":
      const interest = action.payload as string;

      const updatedInterest = state.interest.includes(interest)
        ? state.interest.filter((i) => i !== interest)
        : [...state.interest, interest];

      return { ...state, interest: updatedInterest };

    case "setAttachments":
      return { ...state, attachments: action.payload as string[] };

    default:
      return state;
  }
};

export default function ContactForm() {
  const [state, dispatch] = useReducer<ReducerValue, FormState>(
    reducer,
    initialState,
    (state) => state,
  );

  return (
    <div className="flex flex-col">
      <h1 className="font-serif text-[clamp(30px,3.5vw,60px)] leading-[1.1em]">
        Got an Idea <br /> I can help with?
      </h1>
      <div className="mt-8 flex flex-col">
        <div className="mb-8">
          <h5 className="font-bold">What are you interested in?</h5>
          <div className="mt-5 flex flex-wrap gap-3">
            {services.map((service) => (
              <CheckButton
                key={service}
                text={service}
                check={state.interest.includes(service)}
                onCheck={() =>
                  dispatch({ type: "setInterest", payload: service })
                }
              />
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h5 className="mb-3 font-bold">Your name</h5>
          <Input
            placeholder="Enter your Name"
            onChange={({ currentTarget: { value } }) =>
              dispatch({ type: "setName", payload: value })
            }
          />
        </div>
        <div className="mb-8">
          <h5 className="mb-3 font-bold">Your email</h5>
          <Input
            placeholder="Enter your email address"
            onChange={({ currentTarget: { value } }) =>
              dispatch({ type: "setEmail", payload: value })
            }
          />
        </div>
        <div className="mb-8">
          <h5 className="mb-3 font-bold">Idea Summary</h5>
          <TextArea
            placeholder="Let's discuss your idea"
            onChange={({ currentTarget: { value } }) =>
              dispatch({ type: "setMessage", payload: value })
            }
          />
        </div>
        <div className="mb-8">
          <h5 className="mb-3 font-bold">Project Budget (USD)</h5>
          <div className="mt-5 flex flex-wrap gap-3">
            {budget.map((budget) => (
              <CheckButton
                key={budget}
                text={budget}
                check={state.budget === budget}
                onCheck={() => dispatch({ type: "setBudget", payload: budget })}
              />
            ))}
          </div>
        </div>
        <button className="bg-inverted py-5 text-inverted">
          Submit Request
        </button>
      </div>
    </div>
  );
}
