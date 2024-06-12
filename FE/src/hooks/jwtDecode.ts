import { jwtDecode } from 'jwt-decode';
export const JWTDecode = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
        const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
        return decoded;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};
