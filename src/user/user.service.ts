import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ email: username });
  }

  async register(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  async findAgents(): Promise<User[]> {
    return await this.userModel.find({ type: 'COLLECTION_AGENT' });
  }
}
