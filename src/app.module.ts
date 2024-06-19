import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      
      type: 'mongodb',
      // host: process.env.MONGODB_HOST,
      // port: parseInt(process.env.MONGODB_PORT),
      url: 'mongodb://localhost:27017',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,



    //   type: 'postgres',
    //   host: process.env.POSTGRES_HOST,
    //   port: parseInt(process.env.POSTGRES_PORT),
    //   username: process.env.POSTGRES_USERNAME,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: process.env.POSTGRES_DATABASE,
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   ssl: process.env.POSTGRES_SSL === 'true',
    //   extra: {
    //     ssl:
    //       process.env.POSTGRES_SSL === 'true'
    //         ? {
    //             rejectUnauthorized: false,
    //           }
    //         : null,
    //   },
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
