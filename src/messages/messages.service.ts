import { Injectable } from '@nestjs/common';
import { Message } from 'src/models/message/Message';
import { MessageDto } from 'src/models/message/MessageDto';

@Injectable()
export class MessagesService {
  private messages = [
    { id: 1, message: 'Hello World 00' },
    { id: 2, message: 'Hello World 01' },
    { id: 3, message: 'Hello World 02' },
  ];

  findAll() {
    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    const message = this.messages.find((msg) => msg?.id === id);

    if (!message) {
      throw Error(`Message with ID '${id}' not found.`);
    }

    return message;
  }

  create(messageDto: MessageDto) {
    const id = this.messages.length + 1;

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages.push(message);

    return message;
  }

  async update(id: number, messageDto: MessageDto) {
    const index = this.messages.findIndex((msg) => msg?.id === id);

    if (index < 0) {
      throw Error(`Message with ID '${id}' not found.`);
    }

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages[index] = message;

    return message;
  }

  async delete(id: number) {
    const index = this.messages.findIndex((msg) => msg?.id === id);

    if (index < 0) {
      throw Error(`Message with ID '${id}' not found.`);
    }

    delete this.messages[index];
  }
}
