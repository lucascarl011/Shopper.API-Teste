import { Request, Response } from 'express';
import { getMeasureFromImage } from '../services/geminiService';

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const { image, customer_code, measure_datetime, measure_type } = req.body;

    // Validar os dados aqui (omito as validações para focar na integração)

    const measureData = await getMeasureFromImage(image);

    return res.status(200).json({
      image_url: measureData.image_url,
      measure_value: measureData.measure_value,
      measure_uuid: measureData.measure_uuid,
    });
  } catch (error) {
    return res.status(500).json({
      error_code: "INTERNAL_ERROR",
      error_description: "An internal error occurred",
    });
  }
};
