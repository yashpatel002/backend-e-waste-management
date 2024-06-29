import { Request, Response } from 'express';
import Registration from '../models/registratonModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Define the payload type for JWT
interface Payload {
  user: {
    id: string;
    type: string;
  };
}

// Login user
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await Registration.findOne({ email });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    const payload: Payload = {
      user: {
        id: user.id,
        type: user.type
      }
    };

    jwt.sign(
      payload,
      'yourSecretKey', // Replace with your own secret key
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (err:any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export default loginUser;
