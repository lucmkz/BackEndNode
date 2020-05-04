import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import User from '../models/User';
import ploadConfig from '../config/upload';

interface Request {
  user_id: string;
  avatarFilename: string;
}

class UploadUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new Error('Only Authenticate users can change avatar');
    }

    if (user.avatar) {
      // Deletar avatar anterior

      const userAvatarFilePath = path.join(ploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFilePath) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }
}

export default UploadUserAvatarService;
