import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          database: 'LibraryNestJs',
          username: 'postgres',
          password: 'postgres',
          autoLoadEntities: true,
          synchronize: true
    }),
    
    
    BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
