
import { register } from './register';
import { login } from './login';
import { fetch } from './fetch';
import { update } from './update';
import { forgot } from './forgot';
import { validateToken } from './validate-token';
import { resetPassword } from './reset-password';

export const admin = {
    register,
    fetch,
    update​​,
    login,
    forgot,
    validateToken,
    resetPassword
};
