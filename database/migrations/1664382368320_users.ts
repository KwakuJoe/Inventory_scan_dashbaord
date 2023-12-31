import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('uuid').notNullable()
      table.string('pincode').notNullable()
      table.string('passcode').notNullable()
      table.string('username').nullable()
      table.integer('minimum_stock_number').defaultTo(20).notNullable()
      table.boolean('is_mobile_user').defaultTo(0).notNullable()
      table.string('brand_name').nullable()
      table.string('remember_me_token').nullable()
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
