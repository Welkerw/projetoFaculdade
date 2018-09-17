class InstituicaosController < ApplicationController
  before_action :set_instituicao, only: [:show, :update, :destroy]

  # GET /instituicaos
  def index
    @instituicaos = Instituicao.all

    render json: @instituicaos
  end

  # GET /instituicaos/1
  def show
    render json: @instituicao
  end

  # POST /instituicaos
  def create
    @instituicao = Instituicao.new(instituicao_params)

    if @instituicao.save
      render json: @instituicao, status: :created, location: @instituicao
    else
      render json: @instituicao.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /instituicaos/1
  def update
    if @instituicao.update(instituicao_params)
      render json: @instituicao
    else
      render json: @instituicao.errors, status: :unprocessable_entity
    end
  end

  # DELETE /instituicaos/1
  def destroy
    @instituicao.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_instituicao
      @instituicao = Instituicao.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def instituicao_params
      params.require(:instituicao).permit(:nome, :notaGeral)
    end
end
