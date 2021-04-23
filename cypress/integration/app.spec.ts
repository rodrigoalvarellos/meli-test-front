describe("App Page", () => {

  beforeEach(() => {   

  cy.intercept('http://localhost:3500/api/items?q=*',  {fixture: 'search.results.json' }).as('searchResults');
  cy.intercept('http://localhost:3500/api/items?category=*',  {fixture: 'search.results.json' }).as('categorySearchResults');
  cy.intercept('http://localhost:3500/api/items/*',  {fixture: 'product.detail.json' });
  cy.visit('/');
    
  })

  it("should search, find results, navigate to the firt one and show content correctly ", () => {
       
    cy.get('input').type('iphone');
    cy.get('button').click();

    cy.wait('@searchResults');
 
    cy.url().should('eq', 'http://localhost:3000/items?search=iphone');

    const listItemsFirstElement = cy.get(`[data-testid="SEARCH_LIST_TESTID"]>ul>li`).first();

    listItemsFirstElement.click();
    cy.url().should('eq', 'http://localhost:3000/items/MLA914734725');

    const productDetail = cy.get(`[data-testid="PRODUCT_DETAIL_TESTID"]`);    
    productDetail.should('contain.text', 'iPhone 11 64 Gb Negro');
  });

  it("should search by category when breadcrumb link is clicked ", () => {

    cy.get('input').type('iphone');
    cy.get('button').click();

    cy.wait('@searchResults');

    const firstBreadcrumbElement = cy.get('[data-testid="BREADCRUMB_TESTID"]>ul>li>a').first();
    firstBreadcrumbElement.click();
    cy.url().should('eq', 'http://localhost:3000/items?category=MLA1051');
    // cy.wait('@categorySearchResults');
    
  });

  it("should navigate to home when ML logo is clicked", () => {

    cy.get('input').type('iphone');
    cy.get('button').click();

    cy.wait('@searchResults');
 
    cy.url().should('eq', 'http://localhost:3000/items?search=iphone');

    const logoML = cy.get(`[data-testid="SEARCHBOX_TESTID"]>*>a`);
    logoML.click();

    cy.url().should('eq', 'http://localhost:3000/');
      
  });
});
