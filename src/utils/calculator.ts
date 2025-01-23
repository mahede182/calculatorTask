export const isOperator = (char: string) => ["+", "-", "×", "÷"].includes(char);

export const formatNumber = (num: number): string => {
  return num.toLocaleString("en-US", {
    maximumFractionDigits: 10,
    useGrouping: true,
  });
};

const isValidExpression = (expression: string): boolean => {
  let bracketCount = 0;

  for (let char of expression) {
    if (char === "(") bracketCount++;
    if (char === ")") bracketCount--;
    if (bracketCount < 0) return false;
  }

  return bracketCount === 0;
};

const getPrecedence = (operator: string): number => {
  switch (operator) {
    case "+":
    case "-":
      return 1;
    case "×":
    case "÷":
      return 2;
    default:
      return 0;
  }
};

const applyOperation = (a: number, b: number, operator: string): number => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return b === 0 ? NaN : a / b;
    default:
      return NaN;
  }
};

const evaluateExpression = (tokens: string[]): number => {
  const values: number[] = [];
  const operators: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === "(") {
      operators.push(token);
    } else if (token === ")") {
      while (operators.length > 0 && operators[operators.length - 1] !== "(") {
        const operator = operators.pop()!;
        const b = values.pop()!;
        const a = values.pop()!;
        values.push(applyOperation(a, b, operator));
      }
      operators.pop(); // Remove '('
    } else if (isOperator(token)) {
      while (
        operators.length > 0 &&
        operators[operators.length - 1] !== "(" &&
        getPrecedence(operators[operators.length - 1]) >= getPrecedence(token)
      ) {
        const operator = operators.pop()!;
        const b = values.pop()!;
        const a = values.pop()!;
        values.push(applyOperation(a, b, operator));
      }
      operators.push(token);
    } else {
      values.push(parseFloat(token));
    }
  }

  while (operators.length > 0) {
    const operator = operators.pop()!;
    const b = values.pop()!;
    const a = values.pop()!;
    values.push(applyOperation(a, b, operator));
  }

  return values[0];
};

const tokenizeExpression = (expression: string): string[] => {
  const tokens: string[] = [];
  let currentNumber = "";

  const pushNumber = () => {
    if (currentNumber) {
      tokens.push(currentNumber);
      currentNumber = "";
    }
  };

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === " ") continue;

    if (char === "(" || char === ")") {
      pushNumber();
      tokens.push(char);
    } else if (isOperator(char)) {
      pushNumber();
      tokens.push(char);
    } else {
      currentNumber += char;
    }
  }
  pushNumber();

  return tokens;
};

export const calculate = (expression: string): string => {
  try {
    if (!isValidExpression(expression)) {
      return "Error";
    }

    const sanitizedExpression = expression.replace(/,/g, "");
    const tokens = tokenizeExpression(sanitizedExpression);
    const result = evaluateExpression(tokens);

    if (isNaN(result) || !isFinite(result)) {
      return "Error";
    }

    return formatNumber(result);
  } catch (error) {
    console.warn(error)
    return "Error";
  }
};
