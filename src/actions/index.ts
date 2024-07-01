"use server"
import { ReviewFormData } from "~/interfaces/interfaces";
import { db } from "~/server/db";
import { reviews } from "~/server/db/schema";

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