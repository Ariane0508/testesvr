/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.request('https://portal.vr.com.br/api-web/comum/enumerations/VRPAT').then(($conteudo)=>{
    // validando se a API retornou conexão ok.
    expect($conteudo.status).to.eq(200)  
    cy.log('retornando todos os dados da API',$conteudo)
    cy.log('retornando todos os dados do logradouro',$conteudo.body.dominios.TIPO_LOGRADOURO)
      // e possivel fazer o teste de API no cypress. Batando ter os valores corretos.. cabeçalhos de API e conexões.  
      expect($conteudo.body,'validando a existencia do type no body').to.have.property('typeOfEstablishment') 
      cy.log('printando o type',$conteudo.body.typeOfEstablishment[0].name) 
    })
   
  })
})

