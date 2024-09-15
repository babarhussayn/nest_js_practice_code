import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UserService } from './users/user.service';
;

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [UserService],
})
export class AppModule {}
