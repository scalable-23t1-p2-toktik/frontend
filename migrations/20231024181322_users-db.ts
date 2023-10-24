import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("users", (table) => {
        table.string("id", 25).primary();
        table.string("username", 30).notNullable();
        table.string("email", 320).notNullable();
        table.string("password", 72).notNullable();
        table.timestamp("createdAt").defaultTo(knex.fn.now()).index();
        table.timestamp("updatedAt").defaultTo(knex.fn.now());
        //TODO: Add user's video name
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("users");
}

