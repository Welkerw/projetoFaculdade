require 'test_helper'

class InstituicaosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @instituicao = instituicaos(:one)
  end

  test "should get index" do
    get instituicaos_url, as: :json
    assert_response :success
  end

  test "should create instituicao" do
    assert_difference('Instituicao.count') do
      post instituicaos_url, params: { instituicao: { nome: @instituicao.nome, notaGeral: @instituicao.notaGeral } }, as: :json
    end

    assert_response 201
  end

  test "should show instituicao" do
    get instituicao_url(@instituicao), as: :json
    assert_response :success
  end

  test "should update instituicao" do
    patch instituicao_url(@instituicao), params: { instituicao: { nome: @instituicao.nome, notaGeral: @instituicao.notaGeral } }, as: :json
    assert_response 200
  end

  test "should destroy instituicao" do
    assert_difference('Instituicao.count', -1) do
      delete instituicao_url(@instituicao), as: :json
    end

    assert_response 204
  end
end
