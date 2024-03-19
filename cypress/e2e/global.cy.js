describe('Global Tests', () => {
  // Test for the main page
  it('Main page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/')
    cy.contains('Team Finder').should('be.visible')
    cy.wait(2000)
       //scroll up and down
       cy.scrollTo('bottom')
       cy.wait(2000)
       cy.scrollTo('top')
       cy.wait(2000)
  
  })

  it('Clicks on buttons on home page', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/') 
    cy.contains('Home').should('be.visible').click()
    cy.wait(2000)
    cy.contains('Characteristics').should('be.visible').click()
    cy.wait(2000)
    cy.contains('benefits').should('be.visible').click()
    cy.wait(2000)
    cy.contains('Feature').should('be.visible').click()
    cy.wait(2000)
  })

  // Test for the login page
  it('(I) Login page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/login') 
    cy.contains('Sign In').should('be.visible')
    //fill all forms for incorrect login
    cy.get('input[name="email"]').should('be.visible').type('iulian@gmail.com')
    cy.wait(1000)
    cy.get('input[name="password"]').should('be.visible').type('1234')
    cy.wait(1000)
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.wait(2000)


  })
  it('(C) Login page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/login') 
    cy.contains('Sign In').should('be.visible')
    cy.contains('Sign In').should('be.visible')
    //fill all forms for correct login(should go to dashboard page after this test is done)
    cy.get('input[name="email"]').should('be.visible').type('gabriel.gurzun@student.usv.ro')
    cy.wait(1000)
    cy.get('input[name="password"]').should('be.visible').type('123456')
    cy.wait(1000)
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.wait(2000)
    
  })

  // Test for the register page
  it('Register page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/register')
    cy.contains('Sign Up').should('be.visible')  
    //fill all forms
    //fill out name
    cy.get('input[name="name"]').should('be.visible').type('Iulian')
    //fill out organizationName
    cy.get('input[name="organizationName"]').should('be.visible').type('InfinityTech')
    //fill out address
    cy.get('input[name="address"]').should('be.visible').type('1234 InfinityTech Street')
    //fill out email
    cy.get('input[name="email"]').should('be.visible').type('cypresstest@cypress.com')
    //fill out password
    cy.get('input[name="password"]').should('be.visible').type('1234')
    //fill out confirmPassword
    cy.get('input[name="confirmPassword"]').should('be.visible').type('1234')

  })
    // Test for the Dashboard page
    it('Dashboard page loads successfully', () => {
      cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/dashboard')
      cy.wait(1000);
      cy.contains('Dashboard').should('be.visible').click();
        cy.contains('Admin Dashboard').should('be.visible').click();  //not implemented yet
        cy.contains('Reports').should('be.visible').click();
      cy.wait(1000);
      cy.contains('Departments').should('be.visible').click();
      cy.contains('View all departments').should('be.visible').click();
      cy.wait(1000);
      cy.contains('Members').should('be.visible').click();
      cy.contains('Add a member').should('be.visible').click();
      cy.wait(1000);
      cy.contains('Projects').should('be.visible').click();
      cy.contains('View all projects').should('be.visible').click();
      cy.wait(1000);
      cy.contains('Abilities').should('be.visible').click();
      cy.contains('Abilities').should('be.visible').click();
      cy.wait(1000);
      cy.contains('Sign Up URL').should('be.visible').click();
      cy.wait(1000);
      cy.contains('Add a member').should('be.visible').click();
      cy.wait(1000);
    })

// Test for the Department page


})
it('Department page loads successfully', () => {
  cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/departments')
  cy.contains('Departments').should('be.visible');
  cy.wait(1000);
  cy.contains('Create a department').should('be.visible').click();
  cy.wait(1000);``
  
  cy.get('input.custom-input').should('be.visible').type('Development Team');
  cy.get('textarea').should('be.visible').type('A short description about nothing :)');
  cy.get('button[type="submit"]').contains('Add a department').should('be.visible').click();
  cy.get('input[name="Search for a department...."]').should('be.visible').type('Development Team');
  cy.wait(2000);
});


//Test for the Members page
it('Members page loads successfully', () => {
  cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/members')
  cy.wait(1000);
  cy.contains('Add a member').should('be.visible').click();
  cy.wait(1000);
  cy.get('input[type="text"]').then(($input) => {
    const url = $input.val();
    cy.wrap(url).should('include', 'https://teamfinder-infinitytech-yz1j.vercel.app');
    cy.visit(url);
  });
});
    //TODO fillout forms
  it('Visits all the links', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/login');
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/register');
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/dashboard');
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/projects');
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/departments');
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/members');
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/abilities');
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/user-details');
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/register-employee');
  });
    
