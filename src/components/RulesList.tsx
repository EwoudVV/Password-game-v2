import React from 'react';
import { Rule } from '../types';

type RulesListProps = {
  rules: Rule[];
};

export function RulesList({ rules }: RulesListProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <h3 className="font-medium text-gray-700 mb-2">Rules:</h3>
      <div className="text-amber-600 font-medium mb-3">
        General Rule: Each password must be unique - you cannot reuse previous passwords!
      </div>
      <ul className="space-y-2">
        {rules.map((rule) => (
          <li key={rule.id} className="text-gray-600 flex items-start gap-2">
            <span className="text-purple-600 font-medium">{rule.id}.</span>
            {rule.description}
          </li>
        ))}
      </ul>
    </div>
  );
}