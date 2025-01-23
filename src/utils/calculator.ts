const isOperator = (char: string) => ['+', '-', '×', '÷'].includes(char);

export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US', {
    maximumFractionDigits: 10,
    useGrouping: true,
  });
};

export const calculate = (expression: string): string => {
  try {
    // Replace × and ÷ with * and / for evaluation
    const sanitizedExpression = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/,/g, '');

    // Evaluate the expression
    const result = new Function(`return ${sanitizedExpression}`)();
    
    if (isNaN(result) || !isFinite(result)) {
      return 'Error';
    }

    return formatNumber(result);
  } catch (error) {
    return 'Error';
  }
};