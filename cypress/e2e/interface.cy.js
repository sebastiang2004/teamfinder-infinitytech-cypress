describe('Global Tests', () => {
  // Test for the main page
  it('Main page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/')
 //stay on the home page for button function
    cy.wait(2000)
       //scroll up and down
       cy.scrollTo('bottom')
       cy.wait(2000)
       cy.scrollTo('top')
       cy.wait(2000)
  
  })

  it('Clicks on buttons on home page', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/') 

    cy.contains('Home').click()
    cy.wait(2000)
    cy.contains('Characteristics').click()
    cy.wait(2000)
    cy.contains('benefits').click()
    cy.wait(2000)
    cy.contains('Feature').click()
    cy.wait(2000)
  })

  // Test for the login page
  it('(I)Login page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/login') 
    //fill all forms for incorrect login
    cy.get('input[name="email"]').type('iulian@gmail.com')
    cy.wait(1000)
    cy.get('input[name="password"]').type('1234')
    cy.wait(1000)
    cy.get('button[type="submit"]').click()
cy.wait(2000)
  })
  it('(C) Login page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/login') 
    //fill all forms for correct login(should go to dashboard page after this test is done)
    cy.get('input[name="email"]').type('gabriel.gurzun@student.usv.ro')
    cy.wait(1000)
    cy.get('input[name="password"]').type('123456')
    cy.wait(1000)
    cy.get('button[type="submit"]').click()
cy.wait(2000)
  })

  // Test for the register page
  it('Register page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/register') 
    //fill all forms
    //fill out name
    cy.get('input[name="name"]').type('Iulian')
    //fill out organizationName
    cy.get('input[name="organizationName"]').type('InfinityTech')
    //fill out address
    cy.get('input[name="address"]').type('1234 InfinityTech Street')
    //fill out email
    cy.get('input[name="email"]').type('cypresstest@cypress.com')
    //fill out password
    cy.get('input[name="password"]').type('1234')
    //fill out confirmPassword
    cy.get('input[name="confirmPassword"]').type('1234')

  })
    // Test for the Dashboard page
    it('Dashboard page loads successfully', () => {
      cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/dashboard')
      cy.wait(1000);
      //cy.contains('Dashboard').click()
    //  cy.contains('Admin Dashboard').click()  //not implemented yet
    //  cy.contains('Reports').click()
      cy.wait(1000);
      cy.contains('Departments').click();
      cy.contains('View all departments').click();
      cy.wait(1000);
      cy.contains('Members').click();
      cy.contains('Add a member').click();
      cy.wait(1000);
      cy.contains('Projects').click();
      cy.contains('View all projects').click();
      cy.wait(1000);
      cy.contains('Abilities').click();
      cy.contains('Abilities').click();
      cy.wait(1000);
      cy.contains('Sign Up URL').click();
      cy.wait(1000);
      cy.contains('Add a member').click();
      cy.wait(1000);

// Test for the Department page


})
it('Department page loads successfully', () => {

  cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/departments')
 cy.wait(1000);
cy.contains('Create a department').click();
cy.wait(1000);
cy.get('input[name]').eq(0).type('Development Team');
cy.get('input[name]').eq(1).type('A short description about nothing :)');
cy.contains('Add a department').click();
cy.get('input[name="Search for a department....').type('Development Team');
})

//Test for the Members page
it('Members page loads successfully', () => {
  cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/members')
  cy.wait(1000);
  cy.contains('Add a member').click();
  cy.wait(1000);
  cy.get('input[type="text"]').then(($input) => {
    const url = $input.val();
    cy.visit(url);
    //TODO fillout forms
  });
  cy.wait(1000);

})

      
      })
      
