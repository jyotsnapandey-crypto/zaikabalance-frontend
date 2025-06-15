'use client';
import { useState } from 'react';
import axios from 'axios';

interface NutrientInput {
  energy_kcal: number | string;
  carb_g: number | string;
  protein_g: number | string;
  fat_g: number | string;
  freesugar_g: number | string;
}

const NutrientTrackerForm: React.FC = () => {
  const [formData, setFormData] = useState<NutrientInput>({
    energy_kcal: '',
    carb_g: '',
    protein_g: '',
    fat_g: '',
    freesugar_g: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setStatus('');

    const payload = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, parseFloat(value as string)])
    );

    try {
      const res = await axios.post('https://zaikabalance-backend.onrender.com/predict-nutrient-status', payload);
      setStatus(res.data.nutrient_status);
    } catch (err: any) {
      setError(err.response?.data?.error || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-md mt-12">
      <h2 className="text-2xl font-bold mb-4">Nutrient Tracker</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium">{key.replace(/_/g, ' ')}:</label>
            <input
              type="number"
              name={key}
              value={formData[key as keyof NutrientInput]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          {loading ? 'Checking...' : 'Check Nutrient Status'}
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {status && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">Status:</h3>
          <p className="text-lg text-green-700 font-medium">{status}</p>
        </div>
      )}
    </div>
  );
};

export default NutrientTrackerForm;


Modify app/page.tsx

import DietForm from '@/components/DietForm';
import NutrientTrackerForm from '@/components/NutrientTrackerForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <DietForm />
      <NutrientTrackerForm />
    </main>
  );
}
