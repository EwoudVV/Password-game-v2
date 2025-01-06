import React from 'react';
import { AlertCircle } from 'lucide-react';

type GameOverProps = {
  level: number;
  onReset: () => void;
};

export function GameOver({ level, onReset }: GameOverProps) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <AlertCircle className="w-8 h-8 text-red-500" />
        <h2 className="text-2xl font-bold text-red-500">Game Over!</h2>
      </div>
      <p className="text-gray-600 mb-6">You reached level {level}</p>
      <button
        onClick={onReset}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Play Again
      </button>
    </div>
  );
}