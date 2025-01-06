import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import { rules } from '../data/rules';
import { validatePassword } from '../utils/passwordValidation';
import { GameHeader } from './GameHeader';
import { RulesList } from './RulesList';
import { PasswordForm } from './PasswordForm';
import { GameOver } from './GameOver';

export function PasswordGame() {
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [previousPasswords, setPreviousPasswords] = useState<string[]>([]);

  const checkPassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if password was used before
    if (!validatePassword(password, previousPasswords)) {
      setGameOver(true);
      return;
    }

    const activeRules = rules.slice(0, level);
    const allRulesPassed = activeRules.every(rule => rule.validator(password));

    if (allRulesPassed) {
      if (level < rules.length) {
        setPreviousPasswords([...previousPasswords, password]);
        setLevel(level + 1);
        // Don't clear the password field
      }
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setPassword('');
    setLevel(1);
    setGameOver(false);
    setPreviousPasswords([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full">
        <GameHeader />
        {gameOver ? (
          <GameOver level={level} onReset={resetGame} />
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-800">Level {level}</h2>
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <RulesList rules={rules.slice(0, level)} />
            </div>
            <PasswordForm 
              password={password}
              onPasswordChange={setPassword}
              onSubmit={checkPassword}
            />
          </>
        )}
      </div>
    </div>
  );
}