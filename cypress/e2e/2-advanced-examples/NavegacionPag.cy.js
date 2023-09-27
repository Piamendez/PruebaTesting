describe ("prueba cypress de pagina web", () => {

    it("aceder a pagina web ",() => {


        cy.visit('http://zero.webappsecurity.com/');
       
    })

// punto 3

it("verificar prueba de contenido texto: Checking Account Activity", () => {
 
    cy.visit('http://zero.webappsecurity.com/');
  
 
    cy.contains("Checking Account Activity").should('be.visible');
    cy.contains("Use Zero to view the most up-to-date listings of your deposits, withdrawals, interest payments, and a number of other useful transactions.").should('be.visible');
  });

  
it("verificar prueba de contenido texto: MY MONEY MAP", () => {
 
    cy.visit('http://zero.webappsecurity.com/');
  
 
    cy.contains("My Money Map").should('be.visible');
    cy.contains("Use Zero to set up and monitor your personalized money map. A money map is an easy-to-use online tool that helps you manage your finances efficiently. With Money Map, you can create a budget, sort your finances into spending and savings categories, check the interest your accounts are earning, and gain new understanding of your patterns with the help of Zero’s clear charts and graphs.").should('be.visible');
  });


      // punto 6
      // verificar imagenes de la pagina web

      it("Verificar que las imágenes se carguen correctamente", () => {
        cy.visit('http://zero.webappsecurity.com/');
        
      
        cy.get('img').each(($img) => {
       
          cy.wrap($img).should('have.attr', 'src').should('not.be.empty'); 
        });
      });

      //punto 6
      //verifica que los campos obligatorios no puedan enviarse vacíos

      it("Verificar que el formulario no envíe campos vacíos", () => {
       
        cy.visit('http://zero.webappsecurity.com/login.html'); 
      
    
        cy.get('input[type="submit"]').click(); 
      
       
        cy.get('#login_form').should('be.visible');
        cy.contains('Login and/or password are wrong.').should('be.visible'); 
      });

})
