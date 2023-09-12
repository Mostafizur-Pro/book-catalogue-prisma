import config from "../config";
import bcrypt from 'bcrypt';

const hashPassword = async (password: string): Promise<string> => {
    const salt = Number(config.salt_rounds);
    const encryptedPassword= await bcrypt.hash(password, salt);
    return encryptedPassword;
}

const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    const decryptedPassword = await bcrypt.compare(password, hash);
    return decryptedPassword;
}

export const hashPasswordHelper = {
    hashPassword,
    comparePassword,
};