
import { Knex } from 'knex';

declare module 'knex/types/tables' {
  interface Tables {
    players: {
      id: string;
      name: string;
      email: string;
      position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
      created_at: string;
    };
  }
}