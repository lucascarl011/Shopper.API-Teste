import axios from 'axios';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

export const getMeasureFromImage = async (imageBase64: string) => {
  const response = await axios.post(
    'https://ai.google.dev/gemini-api/vision',
    {
      image: imageBase64,
    },
    {
      headers: {
        Authorization: `Bearer ${GEMINI_API_KEY}`,
      },
    }
  );

  return response.data;
};
