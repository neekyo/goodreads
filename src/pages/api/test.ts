import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'GET request success' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
