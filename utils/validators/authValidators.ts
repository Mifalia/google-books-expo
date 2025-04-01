export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validatename = (name: string): boolean => {
  name = name.trim();
  // length
  const hasCorrectLength = name.length > 3;
  //  allowed chars
  const allowedChars = /^[a-zA-Z0-9_]*$/;
  const hasAllowedChars = allowedChars.test(name) && name.indexOf(' ') === -1;

  return hasCorrectLength && hasAllowedChars;
};

export const validatePassword = (password: string): boolean => {
  const hasCorrectLength = password.length > 5;
  const doesNotContainSpaces = password.indexOf(' ') === -1;
  return hasCorrectLength && doesNotContainSpaces;
};

export interface IRegistrationParams {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginParams {
  email: string;
  password: string;
}

export const getRegistrationError = (data: IRegistrationParams): string | null => {
  const { name, email, password, confirmPassword } = data;

  if (!name || !email || !password || !confirmPassword) {
    return 'Please fill in all fields';
  }

  if (!validatename(name)) {
    return 'name must be at least 4 characters long and contain only letters, numbers and underscores';
  }

  if (!validateEmail(email)) {
    return 'Invalid email';
  }

  if (!validatePassword(password)) {
    return 'Password must be at least 6 characters long and contain no spaces';
  }

  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }

  return null;
};
