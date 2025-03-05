import { Module } from '@nestjs/common';
import { CrudModule } from './crud/crud.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    CrudModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      // ssl: process.env.POSTGRES_SSL === "true",
      // extra: {
      //   ssl:
      //     process.env.POSTGRES_SSL === "true"
      //       ? {
      //           rejectUnauthorized: false,
      //         }
      //       : null,
      // },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
