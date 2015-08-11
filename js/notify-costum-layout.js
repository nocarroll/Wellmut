$.notify.addStyle('wellmutNotification', {
  html: "<div>" +
  			"<div data-notify-html='pic'></div>" +
  			"<div class='form-container'>" +
  				"<div id='msgBox'><p data-notify-text='question' /></div>" +
  				"<div class='form-container' data-notify-html='form' />" +
  			"</div>" +
  		"</div>"
});

$.notify.addStyle('navDropdown', {
	  html: "<nav>" +
  				"<div id='nav-button-recently'><button  onClick='loadRecently()'>Recently</button></div>" +
  				"<div id='nav-button-insights'><button  onClick='loadInsights(4)'>Insights</button></div>" +
  				"<div id='nav-button-settings'><button  onClick='loadSettings()'>Settings</button></div>" +
  				"<button id='nav-button-logout'   onClick='logout()'>Logout</button>" +
	  		"</nav>"
	});