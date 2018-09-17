class CreateCursos < ActiveRecord::Migration[5.0]
  def change
    create_table :cursos do |t|
      t.string :nome
      t.decimal :nota
      t.decimal :notaMediaGeral
      t.decimal :idInstituicao

      t.timestamps
    end
  end
end
