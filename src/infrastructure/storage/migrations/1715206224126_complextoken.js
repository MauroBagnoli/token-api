exports.up = (pgm) => {
    pgm.createTable('complex_tokens', {
        id: 'id',
        name: { type: 'varchar(255)', notNull: true },
        ticker: { type: 'varchar(255)', notNull: true },
        description: { type: 'text', notNull: true },
        extraData: { type: 'text', notNull: true }
    });
};

exports.down = (pgm) => {
    pgm.dropTable('complex_tokens');
};
