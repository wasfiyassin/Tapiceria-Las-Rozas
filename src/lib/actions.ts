"use server";

// Legacy file, cleaned up to avoid conflicts.
// Logic moved to /api/send/route.ts

export async function submitQuote() {
    throw new Error("This action is deprecated. Use API route /api/send instead.");
}

export type FormState = {
    success: boolean;
    message: string;
};
