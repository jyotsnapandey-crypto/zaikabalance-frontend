'use client';
import { useState } from 'react';
import axios from 'axios';

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const res = await axios.post(
        'https://zaikabalance-backend.onrender.com/submit',
        { feedback },
        {
          headers: {
            Authorization: Bearer ${token},
          },
        }
      );
      setMessage(res.data.message);
      setFeedback('');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-md mt-12">
      <h2 className="text-2xl font-bold mb-4">We value your feedback!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Your Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="What did you like or suggest?"
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Auth Token:</label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Paste your JWT here"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>

      {error && <p


Update app/page.tsx to include this

import DietForm from '@/components/DietForm';
import NutrientTrackerForm from '@/components/NutrientTrackerForm';
import ReminderForm from '@/components/ReminderForm';
import FoodPredictForm from '@/components/FoodPredictForm';
import FeedbackForm from '@/components/FeedbackForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <DietForm />
      <NutrientTrackerForm />
      <ReminderForm />
      <FoodPredictForm />
      <FeedbackForm />
    </main>
  );
}
