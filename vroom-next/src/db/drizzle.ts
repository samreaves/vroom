import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';
import { getDatabaseUrl } from './util';

export const db = drizzle(getDatabaseUrl());
