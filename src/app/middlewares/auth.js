import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

// verifica se user está logado
export default async (req, res, next) => {
  // buscar o header
  const authHeader = req.headers.authorization;

  // varificar se nao ha header
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // dividir a string com bearer + token
  const [, token] = authHeader.split(' ');

  try {
    // try get user id // then user id is on decoded
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
