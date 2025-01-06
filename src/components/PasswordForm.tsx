import React from 'react';

type PasswordFormProps = {
  password: string;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export function PasswordForm({ password, onPasswordChange, onSubmit }: PasswordFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Submit Password
      </button>
    </form>
  );
}