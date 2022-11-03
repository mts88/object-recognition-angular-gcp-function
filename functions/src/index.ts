import { https } from "firebase-functions";

type AnnotatePayload = {
  image: string;
};

/**
 * This will allow requests to Vision API
 */
export const annotateImage = https.onCall(async (data: AnnotatePayload) => {
  try {
    // TODO: implement image annotation
  } catch (e: unknown) {
    const error = e as Error;
    throw new https.HttpsError("internal", error.message);
  }
});
