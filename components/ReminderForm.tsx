'use client';
import { useState } from 'react';
import axios from 'axios';

const ReminderForm: React.FC = () => {
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');
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
        'https://zaikabalance-backend.onrender.com/set',
        { time, note },
        {
          headers: {
            Authorization: Bearer ${token},
          },
        }
      );
      setMessage(res.data.message);
      setTime('');
      setNote('');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to set reminder');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-md mt-12">
      <h2 className="text-2xl font-bold mb-4">Set Food Reminder</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Reminder Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Reminder Note:</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g., Eat fruits or Take supplements"
            required
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
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
        >
          {loading ? 'Setting...' : 'Set Reminder'}
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}
      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
};

export default ReminderForm;

Update app/page.tsx

import DietForm from '@/components/DietForm';
import NutrientTrackerForm from '@/components/NutrientTrackerForm';
import ReminderForm from '@/components/ReminderForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <DietForm />
      <NutrientTrackerForm />
      <ReminderForm />
    </main>
  );
}
