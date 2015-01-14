/*
- ether.account.js v0.1
- Explore accounts on the Ethereum network discovered by Etherface.
- http://ether.fund/accounts
- (c) 2014 J.R. Bédard (jrbedard.com)
*/


// Init
$(function() {
	
});


// list accounts
function getAccounts() {
	// accounts loading spinner...
	$("#accountTable tbody").append("<tr><td id='loadingAccounts' style='text-align:center;' colspan=6><i class='fa fa-cog fa-spin fa-2x'></i> Loading...</td></tr>");
	
	var args = {filter:"", sort:"", start:0, range:10};
	
	// list accounts
	etherface.account('list', args, function(accounts) {
		// todo: stop animation;
		//console.log(accounts);
		updateAccountTable(accounts);
		
		$(".timeago").timeago();
		$(".tooltip").tooltip({});
	});
}


function getAccount() {
	var args = {};
	
	// get account
	etherface.account('get', args, function(account) {
		updateAccountPage(account);
		
		$(".timeago").timeago();
		$(".tooltip").tooltip({});
	});
}


// account table
function updateAccountTable(accounts) {
	var table = $("#accountTable tbody");
	table.html("");
	
	console.log(accounts);
	if(!accounts){ return; }
	
	$.each(accounts, function(a) {
		var account = accounts[a];
		console.log(account);
		
		var line = "<tr>";
		
		line += "<td><a href='/acc/"+account.address+"'>"+account.address+"</a></td>";
		
		line += "<td>"+account.value+"</td>";
		
		line += "<td>"+account.nonce+"</td>";
		
		line += "<td>"+account.code+"</td>";
		
		line += "<td>"+account.storage+"</td>";
		
		line += '</tr>';
		table.append(line);
	});
}


// account page
function updateAccountPage(account) {
	var table = $("#accountTable tbody");
	console.log(account);
	if(!account){ return; }
	
	table.find("#address").text(account.address);
	
	table.find("#value").text(account.value);
	
	table.find("#nonce").text(account.nonce);
	
	
	$("#accountCode").text(account.code);
	
	$("#accountStorage").text(account.storage);
}



