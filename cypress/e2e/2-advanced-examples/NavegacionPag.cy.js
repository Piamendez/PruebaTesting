describe ("prueba cypress de pagina web", () => {

    it("aceder a pagina web ",() => {


        cy.visit('http://zero.webappsecurity.com/');
       
    })
//punto 2

it("verificar que el titulo sea correcto al ingresar a la pagina", () => {
  cy.visit('http://zero.webappsecurity.com');

  cy.title().should('eq', 'Zero - Personal Banking');
})

it("verificar que exista un encabezado o logo que identidique a Zero Web App Security", () => {
    cy.visit('http://zero.webappsecurity.com');

    cy.contains("Zero Web App Security").should('be.visible');

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
//punto 4

it("verificar el funcionamiento correcto de los menus y submenus existentes al momento de interactuar con ellos", () => {
    cy.visit('http://zero.webappsecurity.com/');

     cy.get('#homeMenu').trigger('mouseover');
});

it("verificacion la navegacion o interaccion de un boton o enlace", () => {

  cy.visit('http://zero.webappsecurity.com/');

  cy.contains('Signin').click();
  cy.url().should('include', '/login.html');
})

//Punto 5

it("Verificar que la pagina responda correctamente al momento de interactuar con algun elemento", () => {
  
  cy.visit('http://zero.webappsecurity.com/login.html');


  cy.get('#user_login').type('nombre_de_usuario_incorrecto');
  cy.get('#user_password').type('contraseña_incorrecta');
  cy.get('input[name="submit"]').click();
  cy.get('.alert-error').should('be.visible');

})

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
