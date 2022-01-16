import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  async login(dto: LoginDto): Promise<User> {
    const user = await this.userRepository.findOne({where: { email: dto.email, password: dto.password }});
    if(user !== undefined)
      return user;
    throw new BadRequestException({ message: "User not found!" });
  }
}
