import React from 'react';
import { KeyRound } from 'lucide-react';

export function GameHeader() {
  return (
    <div className="flex items-center gap-2 mb-6">
      <KeyRound className="w-8 h-8 text-purple-600" />
      <h1 className="text-3xl font-bold text-gray-800">Password Game</h1>
    </div>
  );
}