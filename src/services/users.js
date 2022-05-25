export const signIn = async (email, password) => {
  // fetch post
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ email, password })
    });
    return res.json();

  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const signUp = async (email, password, username) => {
  // fetch post
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ email, password, username })
    });
    return res.json();
    
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const getCurretUser = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include'
    });
    return res.json();

  } catch (error) {
    return null;
  }
};

export const signOut = async () => {
  // fetch delete
  const res = await fetch(`${process.env.API_URL}/api/v1/users/session`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors'
  });

  return res.ok;
};

