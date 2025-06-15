'use client';
import { useState } from 'react';
import axios from 'axios';

interface FoodInput {
  energy_kj: number | string;
  energy_kcal: number | string;
  carb_g: number | string;
  protein_g: number | string;
  fat_g: number | string;
  freesugar_g: number | string;
}

const FoodPredictForm: React.FC = () => {
  const [formData, setFormData] = useState<FoodInput>({
    energy_kj: '',
    energy_kcal: '',
    carb_g: '',
    protein_g: '',
    fat_g: '',
    freesugar_g: '',
  });

  const [predictedFood, setPredictedFood] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPredictedFood('');
    setError('');
    setLoading(true);

    const payload = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, parseFloat(value as string)])
    );

    try {
      const res = await axios.post('https://zaikabalance-backend.onrender.com/predict', payload);
      setPredictedFood(res.data.predicted_food_name);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Prediction failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-md mt-12">
      <h2 className="text-2xl font-bold mb-4">Know Your Food</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium">{key.replace(/_/g, ' ')}:</label>
            <input
              type="number"
              name={key}
              value={formData[key as keyof FoodInput]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700"
        >
          {loading ? 'Predicting...' : 'Predict Food'}
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {predictedFood && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">Recommended Dish:</h3>
          <p className="text-lg text-orange-700 font-medium">{predictedFood}</p>
        </div>
      )}
    </div>
  );
};

export default FoodPredictForm;


Update app/page.tsx

import DietForm from '@/components/DietForm';
import NutrientTrackerForm from '@/components/NutrientTrackerForm';
import ReminderForm from '@/components/ReminderForm';
import FoodPredictForm from '@/components/FoodPredictForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <DietForm />
      <NutrientTrackerForm />
      <ReminderForm />
      <FoodPredictForm />
    </main>
  );
}
