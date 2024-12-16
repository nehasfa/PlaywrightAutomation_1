const { AddExpansionpack } = require("./AddExpansionpack");
const { Addsports } = require("./Addsports");
const { Cart } = require("./Cart");
const { DashboardPage } = require("./DashboardPage");
const { LoginPage } = require("./LoginPage");
const { MyOrdersPage } = require("./MyordersPage");
const { PaymentOptions } = require("./PaymentOptions");
const { ProfilePage } = require("./ProfilePage");

class POManager {
  constructor(page, athleteDetails) {
    this.page = page;
    this.athleteDetails = athleteDetails;

    // Initialize page objects with dynamic data
    this.loginpage = new LoginPage(this.page);
    this.profilepage = new ProfilePage(this.page)
    this.dashboardpage = new DashboardPage(
      this.page,
      athleteDetails.Month,
      athleteDetails.Date,
      athleteDetails.Year,
      athleteDetails.Firstname,
      athleteDetails.Lastname,
      athleteDetails.Email,
      athleteDetails.Schoolname
    );
    this.paymentOptions = new PaymentOptions(this.page);
    this.myorders = new MyOrdersPage(this.page);
    this.addsports = new Addsports(this.page);
    this.addexpansionpack = new AddExpansionpack(this.page);
    this.cart = new Cart(this.page);
  }

  getLoginpage() {
    return this.loginpage;
  }

  getProfilepage() {
    return this.profilepage;
  }

  getDashboardPage() {
    return this.dashboardpage;
  }

  getAddsports() {
    return this.addsports;
  }

  getAddExpansionpack() {  
    return this.addexpansionpack;
  }

  getCart() {
    return this.cart;
  }

  getPaymentoptions() {
    return this.paymentOptions;
  }

  getMyorders() {
    return this.myorders;
  }
}

module.exports = { POManager };
