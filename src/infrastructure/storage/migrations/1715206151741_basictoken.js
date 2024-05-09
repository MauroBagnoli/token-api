exports.up = (pgm) => {
    pgm.createTable('basic_tokens', {
        id: 'id',
        name: { type: 'varchar(255)', notNull: true },
        ticker: { type: 'varchar(255)', notNull: true },
        description: { type: 'text', notNull: true },
    })
}

exports.down = (pgm) => {
    pgm.dropTable('basictokens')
}
