"use client";

import { useState, useEffect } from 'react';

interface Submission {
  name: string;
  email: string;
  timestamp: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchSubmissions(pwd: string) {
    try {
      const res = await fetch('/api/start', {
        headers: { Authorization: pwd },
      });
      if (!res.ok) throw new Error('Unauthorized');
      const data = await res.json();
      setSubmissions(data);
      setAuthorized(true);
    } catch {
      setError('Incorrect password');
    }
  }

  async function handlePurge() {
    try {
      const res = await fetch('/api/start', {
        method: 'DELETE',
        headers: { Authorization: password },
      });
      if (!res.ok) throw new Error('Unauthorized');
      setSubmissions([]);
    } catch {
      alert('Unable to purge submissions');
    }
  }

  if (!authorized) {
    return (
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Sign‑in</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setError(null);
            fetchSubmissions(password);
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {submissions.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <table className="min-w-full text-sm border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2 text-left">Email</th>
              <th className="border px-3 py-2 text-left">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-gray-50">
                <td className="border px-3 py-2">{s.name}</td>
                <td className="border px-3 py-2">{s.email}</td>
                <td className="border px-3 py-2">{new Date(s.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        onClick={handlePurge}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
      >
        Purge All
      </button>
    </div>
  );
}