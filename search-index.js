var searchIndex = {};
searchIndex['pam'] = {"items":[[0,"","pam","Interface to the pluggable authentication module framework (PAM)."],[0,"conv","",""],[3,"PamConv","pam::conv","`PamConv` acts as a channel for communicating with user."],[4,"AppDataPtr","",""],[11,"send","","Sends a message to the pam client.",0],[11,"item_type","","",0],[0,"constants","pam",""],[6,"PamFlag","pam::constants",""],[6,"PamItemType","",""],[6,"PamMessageStyle","",""],[6,"PamResultCode","",""],[6,"AlwaysZero","",""],[17,"PAM_SILENT","",""],[17,"PAM_DISALLOW_NULL_AUTHTOK","",""],[17,"PAM_ESTABLISH_CRED","",""],[17,"PAM_DELETE_CRED","",""],[17,"PAM_REINITIALIZE_CRED","",""],[17,"PAM_REFRESH_CRED","",""],[17,"PAM_CHANGE_EXPIRED_AUTHTOK","",""],[17,"PAM_SERVICE","",""],[17,"PAM_USER","",""],[17,"PAM_TTY","",""],[17,"PAM_RHOST","",""],[17,"PAM_CONV","",""],[17,"PAM_AUTHTOK","",""],[17,"PAM_OLDAUTHTOK","",""],[17,"PAM_RUSER","",""],[17,"PAM_USER_PROMPT","",""],[17,"PAM_FAIL_DELAY","",""],[17,"PAM_XDISPLAY","",""],[17,"PAM_XAUTHDATA","",""],[17,"PAM_AUTHTOK_TYPE","",""],[17,"PAM_PROMPT_ECHO_OFF","",""],[17,"PAM_PROMPT_ECHO_ON","",""],[17,"PAM_ERROR_MSG","",""],[17,"PAM_TEXT_INFO","",""],[17,"PAM_RADIO_TYPE","",""],[17,"PAM_BINARY_PROMPT","",""],[17,"PAM_SUCCESS","",""],[17,"PAM_OPEN_ERR","",""],[17,"PAM_SYMBOL_ERR","",""],[17,"PAM_SERVICE_ERR","",""],[17,"PAM_SYSTEM_ERR","",""],[17,"PAM_BUF_ERR","",""],[17,"PAM_PERM_DENIED","",""],[17,"PAM_AUTH_ERR","",""],[17,"PAM_CRED_INSUFFICIENT","",""],[17,"PAM_AUTHINFO_UNAVAIL","",""],[17,"PAM_USER_UNKNOWN","",""],[17,"PAM_MAXTRIES","",""],[17,"PAM_NEW_AUTHTOK_REQD","",""],[17,"PAM_ACCT_EXPIRED","",""],[17,"PAM_SESSION_ERR","",""],[17,"PAM_CRED_UNAVAIL","",""],[17,"PAM_CRED_EXPIRED","",""],[17,"PAM_CRED_ERR","",""],[17,"PAM_NO_MODULE_DATA","",""],[17,"PAM_CONV_ERR","",""],[17,"PAM_AUTHTOK_ERR","",""],[17,"PAM_AUTHTOK_RECOVERY_ERR","",""],[17,"PAM_AUTHTOK_LOCK_BUSY","",""],[17,"PAM_AUTHTOK_DISABLE_AGING","",""],[17,"PAM_TRY_AGAIN","",""],[17,"PAM_IGNORE","",""],[17,"PAM_ABORT","",""],[17,"PAM_AUTHTOK_EXPIRED","",""],[17,"PAM_MODULE_UNKNOWN","",""],[17,"PAM_BAD_ITEM","",""],[17,"PAM_CONV_AGAIN","",""],[17,"PAM_INCOMPLETE","",""],[0,"module","pam","Functions for use in pam modules."],[4,"PamHandleT","pam::module","Opaque type, used as a pointer when making pam API calls."],[4,"PamDataT","",""],[5,"get_data","","Gets some value, identified by `key`, that has been set by the module\npreviously."],[5,"set_data","","Stores a value that can be retrieved later with `get_data`.  The value lives\nas long as the current pam cycle."],[5,"cleanup","",""],[5,"get_item","","Retrieves a value that has been set, possibly by the pam client.  This is\nparticularly useful for getting a `PamConv` reference."],[5,"get_user","","Retrieves the name of the user who is authenticating or logging in."],[6,"PamResult","",""],[8,"PamItem","","Type-level mapping for safely retrieving values with `get_item`."],[10,"item_type","","Maps a Rust type to a pam constant.",1]],"paths":[[3,"PamConv"],[8,"PamItem"]]};
initSearch(searchIndex);
