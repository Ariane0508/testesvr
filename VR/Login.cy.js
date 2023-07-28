/// <reference types="cypress" />

describe('template spec', () => {
    it('passes', () => {
      cy.visit('www.vr.com.br')
      cy.get('[class="vr-main-navigation__sublink "][href="#rede-credenciada"]').should('exist').click({force:true})
      cy.get('#map iframe').should('exist')

     // Olá, estou deixando aqui os comentarios pois não sei se será utilizado o readme.
     // Os testes foram realizados em 2 dias embora a documentação cite uma semana.
     // A parte do backend fiz em cypress, mostrando que é possivel fazer.
     //não tenho experiencia com as ferramentas solicitadas, mas não deixei de fazer, fiz da forma que eu possuo conhecimento.
     //Agradeço a oportunide e ficarei feliz em fazer parte da familia VR.
     //Ariane
    })
  })