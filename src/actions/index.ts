"use server"
import { ContactFormData, ReviewFormData } from "~/interfaces/interfaces";
import { db } from "~/server/db";
import { reviews, contacts } from "~/server/db/schema";

export async function addReview(rating: number, review: ReviewFormData) {
    try {
        await db.insert(reviews).values({
            rating,
            ...review
        });
    } catch (error) {
        return error;
    }
}

export async function addClientContact(data: ContactFormData) {
    const mappedAttachments = data.attachments?.reduce(
        (prev, current, index) => {
            prev[index] = current;
            return prev;
        },
        {} as { [key: number]: any }
    );

    try {
        await db.insert(contacts).values({
            ...data,
            interest: data.interest?.map(({name})=> name).join(", "),
            attachments: JSON.stringify(mappedAttachments)
        });
    } catch (error) {
        return error;
    }
}