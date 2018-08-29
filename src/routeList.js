import Categories from "Constants/categories.js";

let routeList = [
	[
		"Home",
		"/",
	],
];

Object.keys(Categories).forEach((category)=>{
	routeList.push([
		"Categories",
		("/" + category)
	])

	routeList.push([
		"Categories",
		("/" + category + "/*")
	])
})

export default routeList

// ,[
// 	"MyAccount",
// 	"/my-account",,
// ],[
// 	":custom::common:AccountConfirmation",
// 	"/account-confirmation",
// ],[
// 	"AddressBook",
// 	"/address-book",
// ],[
// 	":custom:Checkout",
// 	"/checkout",
// ],[
// 	":custom::common:CreateAccount",
// 	"/create-account",
// ],[
// 	":custom:Login",
// 	"/login",
// ],[
// 	":custom:LoginDedicated",
// 	"/login-dedicated",
// ],[
// 	"ProductList",
// 	"/my-favorites",
// ],[
// 	"MyProfile",
// 	"/my-profile",
// ],[
// 	"OrderHistory",
// 	"/order-history",
// ],[
// 	"OrderStatus",
// 	"/order-status",
// ],[
// 	"OrderStatusNone",
// 	"/order-status-none",
// ],[
// 	":custom:ProductList",
// 	"/product-list",
// ],[
// 	":common:ResetPassword",
// 	"/reset-password",
// ],[
// 	":common:ResetPasswordConfirm",
// 	"/reset-password-confirm",
// ],[
// 	"TermsOfService",
// 	"/terms-and-conditions",
// ],[
// 	"TermsOfService",
// 	"/privacy-policy",
// ],[
// 	"TosDisagree",
// 	"/tos-disagree",
// ],[
// 	":custom:Logout",
// 	"/logout"
// ],[
// 	":custom:QuickLogin",
// 	"/login-quick"
// ]