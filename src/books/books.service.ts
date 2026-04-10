import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksEntity } from './entities/Books.entities';
import { CreateBooksDto } from './dtos/books.dto';
import { UpdateBookDto } from './dtos/updateBooks.dto';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(BooksEntity)
        private booksRepository: Repository<BooksEntity>
    ) {}

    getAllBooks() {
        return this.booksRepository.find();
    }

    getBookById(id: string) {
        return this.booksRepository.findOne({ where: { id } });
    }

    async createBook(bookDto: CreateBooksDto) {
        const book = this.booksRepository.create(bookDto);
        return this.booksRepository.save(book);
    }

    async updateBook(id: string, updateBookDto: UpdateBookDto) {
        const foundBook = await this.booksRepository.findOne({ where: { id } });

        if (!foundBook) {
            return { message: `El libro con el id ${id} no fue encontrado` };
        }

        const updated = { ...foundBook, ...updateBookDto };
        return this.booksRepository.save(updated);
    }

    async deleteBook(id: string) {
        const foundBook = await this.booksRepository.findOne({ where: { id } });

        if (!foundBook) {
            return { message: `El libro con el id ${id} no fue encontrado` };
        }

        return this.booksRepository.delete(id);
    }

}