class CreateInstituicaos < ActiveRecord::Migration[5.0]
  def change
    create_table :instituicaos do |t|
      t.string :nome
      t.decimal :notaGeral

      t.timestamps
    end
  end
end
