if (self.CavalryLogger) { CavalryLogger.start_js(["FK3ow"]); }

__d('ReadToggle.react',['cx','Event','Keys','React','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$ReadToggle2=function(event){if(c('Event').getKeyCode(event)===c('Keys').RETURN)this.props.onClick();}.bind(this),n;}l.prototype.render=function(){if(this.props.isRead){return c('React').createElement('div',{'aria-label':this.props.readLabel,className:this.$ReadToggle1(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.readLabel,onClick:this.props.onClick,onKeyDown:this.$ReadToggle2,role:'button',tabIndex:0});}else return c('React').createElement('div',{'aria-label':this.props.unreadLabel,className:this.$ReadToggle1(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.unreadLabel,onClick:this.props.onClick,onKeyDown:this.$ReadToggle2,role:'button',tabIndex:'0'});};l.prototype.$ReadToggle1=function(){return c('joinClasses')(this.props.className,(!this.props.isRead?"_5c9q":'')+(this.props.isRead?' '+"_5c9_":''));};l.propTypes={isRead:k.bool.isRequired,onClick:k.func.isRequired,readLabel:k.node.isRequired,unreadLabel:k.node.isRequired};l.defaultProps={onClick:c('emptyFunction')};f.exports=l;}),null);
__d('MobileSmsActivationController',['AsyncRequest','AsyncResponse','Dialog','goURI','ge','ReloadPage','$','DeprecatedCSSMiscellany'],(function a(b,c,d,e,f,g){var h=c('DeprecatedCSSMiscellany').hide,i=c('DeprecatedCSSMiscellany').show;function j(k,l,m,n,o,p){Object.assign(this,{profile_id:k,parent:parent,source:l,misc:m,carrier:null,AJAX_URI:'/ajax/mobile/activation.php',redirect_uri:null,cb_obj:n,status_id:p||'mobile_throbber'});if(o){this.goVerification();}else this.start();j.instance=this;}j.instance={};j.getInstance=function(){return j.instance;};j.show_carriers=function(){var k=c('$')('selected_country').value,l=c('$')('carrier_country').value;if(k)h(c('$')(k+'_carrier_select'));c('$')('selected_country').value=l;c('$')('selected_carrier').value=0;i(c('$')(l+'_carrier_select'));};j.update_carrier=function(){var k=c('$')('selected_country').value+'_carrier_select';c('$')('selected_carrier').value=c('$')(k).value;};Object.assign(j.prototype,{goStep:function k(l){if(l==2){this.getShortCode();return;}else if(l==3){this.getConfirmCode();return;}this.start();},start:function k(l){new (c('AsyncRequest'))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,get_carriers:1,source:this.source,misc:this.misc,error:l}).setHandler(this.showCarriers.bind(this)).setStatusElement(c('$')(this.status_id)).send();},showCarriers:function k(l){var m=l.getPayload();if(!m)return;if(this.cb_obj&&this.cb_obj.onShowCarriers){this.cb_obj.onShowCarriers(m);}else new (c('Dialog'))().setTitle(m.title).setBody(m.html).setHandler(this.getShortCode.bind(this)).setButtons([c('Dialog').NEXT,c('Dialog').CANCEL]).show();},getShortCode:function k(){if(!this.carrier){this.carrier=parseInt(c('$')('selected_carrier').value,10);if(!this.carrier){this.start(true);return false;}}c('Dialog').getCurrent()&&c('Dialog').getCurrent().setButtonsMessage('<img src="/images/loaders/indicator_blue_small.gif" />');new (c('AsyncRequest'))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,get_code:1,carrier:this.carrier,source:this.source,misc:this.misc}).setHandler(this.showShortCode.bind(this)).send();return false;},showShortCode:function k(l){var m=l.getPayload();if(this.cb_obj&&this.cb_obj.onShowShortCode){this.cb_obj.onShowShortCode(m);}else new (c('Dialog'))().setTitle(m.title).setBody(m.html).setHandler(this.activate.bind(this)).setButtons([c('Dialog').NEXT,c('Dialog').CANCEL]).show();},activate:function k(){var l=c('$')('sms_code').value;if(!l)return;var m=c('ge')('profile_add');m=m?m.checked:null;var n=c('ge')('message_on');n=n?n.checked:null;new (c('AsyncRequest'))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,confirm:1,code:l,profile_add:m,message_on:n,source:this.source,misc:this.misc}).setHandler(this.confirmCode.bind(this)).setErrorHandler(this.confirmCode.bind(this)).send();},confirmCode:function k(l){var m=l.getPayload();if(!l.error&&m.success){if(this.cb_obj&&this.cb_obj.onActivationSuccess){this.cb_obj.onActivationSuccess(m);}else{if(m.redirect_now){c('goURI')(m.redirect,m.force_redirect);return;}if(m.redirect==null)return;this.redirect_uri=m.redirect;new (c('Dialog'))().setTitle(m.title).setBody(m.html).setHandler(this.redirect.bind(this)).setButtons([c('Dialog').OK]).show();}}else if(this.cb_obj&&this.cb_obj.onActivationFailure){this.cb_obj.onActivationFailure(l);}else c('AsyncResponse').defaultErrorHandler.call(this,l);},redirect:function k(){if(this.redirect_uri=='reload'){c('ReloadPage').now();}else c('goURI')(this.redirect_uri);},goVerification:function k(){new (c('AsyncRequest'))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,show_verification:1,source:this.source,misc:this.misc}).setHandler(this.displayVerification.bind(this)).send();return false;},displayVerification:function k(l){var m=l.getPayload();if(this.cb_obj&&this.cb_obj.onDisplayVerification){this.cb_obj.onDisplayVerification(m);}else new (c('Dialog'))().setTitle(m.title).setBody(m.html).setHandler(this.completeVerification.bind(this,l)).setButtons([c('Dialog').OK]).show();},completeVerification:function k(l){var m=l.getPayload();if(this.cb_obj)this.cb_obj.onVerificationComplete(m);}});f.exports=j;}),null);
__d('legacy:mobile-sms-activation',['MobileSmsActivationController'],(function a(b,c,d,e,f,g){b.MobileSmsActivationController=c('MobileSmsActivationController');b.mobile_activation_show_carriers=c('MobileSmsActivationController').show_carriers;b.mobile_activation_update_carrier=c('MobileSmsActivationController').update_carrier;}),3);
__d('FlexibleBlock.react',['cx','invariant','LeftRight.react','React','keyMirror'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('keyMirror')({left:true,right:true});function m(o){o.flex&&o.flex in n.FLEX||i(0);o.children&&o.children.length===2||i(0);}j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;n.prototype.render=function(){'use strict';m(this.props);var o,p=this.props,q=p.flex,r=babelHelpers.objectWithoutProperties(p,['flex']),s=this.props.children[0],t=this.props.children[1],u=q==l.left,v;if(u){v=s;o=c('LeftRight.react').DIRECTION.right;}else{v=t;o=c('LeftRight.react').DIRECTION.left;}var w=c('React').createElement('div',{className:"_42ef"},v);return c('React').createElement(c('LeftRight.react'),babelHelpers['extends']({},r,{direction:o}),u?w:this.props.children[0],u?this.props.children[1]:w);};function n(){'use strict';j.apply(this,arguments);}n.FLEX=l;f.exports=n;}),null);
__d('PagesFriendInviterSuggestions.react',['cx','fbt','Arbiter','AsyncRequest','FlexibleBlock.react','Image.react','ImageBlock.react','InlineBlock.react','React','URI','XUIButton.react','XUIGrayText.react','XUISpinner.react','Link.react','arrayContains'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.state={recentlyInvitedIDs:[]},o;}m.prototype.render=function(){'use strict';var n=this.props.invitees.map(function(p){var q=i._("Invite"),r;if(c('arrayContains')(this.props.likedFriends,Number(p.id))){r=c('React').createElement(c('XUIGrayText.react'),{shade:'light',weight:'bold'},i._("Liked"));}else if(c('arrayContains')(this.state.recentlyInvitedIDs,p.id)||c('arrayContains')(this.props.invitedFriends,Number(p.id))){r=c('React').createElement(c('XUIGrayText.react'),{shade:'light',weight:'bold'},i._("Invite Sent"));}else r=c('React').createElement(c('XUIButton.react'),{className:"_qfo",label:q,onClick:this.sendInvite.bind(this,p)});var s='/ajax/hovercard/hovercard.php?id='+p.id;return c('React').createElement('li',{key:p.id},c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},c('React').createElement(c('Image.react'),{className:"_5kwi img",src:p.photo}),c('React').createElement(c('FlexibleBlock.react'),{flex:'left'},c('React').createElement('div',{className:"_5kwj"},c('React').createElement('div',null,c('React').createElement(c('Link.react'),{href:p.profilelink,'data-hovercard':s},c('React').createElement('strong',{className:'ellipsis'},p.name)))),c('React').createElement(c('InlineBlock.react'),{alignv:'middle',height:40},r))));}.bind(this)),o=this.props.loading?c('React').createElement(c('XUISpinner.react'),{className:"_5kwk",size:'large'}):null;return c('React').createElement('ul',{className:"_5kwh"},n,o);};m.prototype.sendInvite=function(n){'use strict';var o=new (c('URI'))('/ajax/pages/invite/send_single/');new (c('AsyncRequest'))(o).setMethod('POST').setData({page_id:this.props.pageID,invitee:n.id,action:'send',ref:this.props.refLocation}).send();var p=this.props.onInvite;if(p)p({page_id:this.props.pageID,invitee:n.id});c('Arbiter').inform('friendInvitedInline',{id:n.id});this.state.recentlyInvitedIDs.push(n.id);this.forceUpdate();};m.propTypes={pageID:l.string.isRequired,invitees:l.array.isRequired,likedFriends:l.array.isRequired,invitedFriends:l.array.isRequired,refLocation:l.string.isRequired,loading:l.bool,onInvite:l.func};m.defaultProps={loading:false};f.exports=m;}),null);
__d('PagesFriendInviter',['cx','Arbiter','ArbiterMixin','AsyncRequest','CSS','DOM','Event','PagesFriendInviterSuggestions.react','ScrollableArea.react','PagesEventObserver','React','ReactDOM','ReactComponentRenderer','Style','URI','emptyFunction','mixin','throttle','tidyEvent'],(function a(b,c,d,e,f,g,h){var i,j,k,l;n.alreadyInvitedFriends=[];i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.getScrollableArea=function(){return this.refs.scrollArea.getArea();}.bind(this),p;}m.prototype.render=function(){'use strict';return c('React').createElement(c('ScrollableArea.react'),{width:this.props.width,onScroll:this.props.onScroll,shadow:false,ref:'scrollArea'},c('React').createElement(c('PagesFriendInviterSuggestions.react'),{pageID:this.props.pageID,invitees:this.props.invitees,loading:this.props.loading,likedFriends:this.props.likedFriends,invitedFriends:this.props.invitedFriends,refLocation:this.props.refLocation}));};k=babelHelpers.inherits(n,c('mixin')(c('ArbiterMixin')));l=k&&k.prototype;function n(o,p,q,r){'use strict';l.constructor.call(this);this.$PagesFriendInviter1=o;this.$PagesFriendInviter2=p;this.$PagesFriendInviter3=q;this.$PagesFriendInviter4=r||{};this.$PagesFriendInviter5=this.$PagesFriendInviter4.pageID;this.$PagesFriendInviter6=this.$PagesFriendInviter4.invitees||[];this.$PagesFriendInviter7=this.$PagesFriendInviter4.suggestionCount;this.$PagesFriendInviter8=this.$PagesFriendInviter4.likedFriends;n.alreadyInvitedFriends=this.$PagesFriendInviter4.invitedFriends;this.$PagesFriendInviter9=this.$PagesFriendInviter4.ref;this.$PagesFriendInviter10=this.$PagesFriendInviter4.loggingData;this.init();this.initTypeaheadSubscriptions();}n.prototype.init=function(){'use strict';if(this.$PagesFriendInviter3!==null)c('tidyEvent')(c('Event').listen(this.$PagesFriendInviter3,'click',this.initReactSuggestions.bind(this)));c('Arbiter').subscribe('friendInvitedInline',this.markAsInvited.bind(this));};n.prototype.initReactSuggestions=function(event){'use strict';event.prevent();var o=this.$PagesFriendInviter10;o.ref=this.$PagesFriendInviter9;c('PagesEventObserver').logData_DEPRECATED(o);this.$PagesFriendInviter1.getCore().reset();var p=this.$PagesFriendInviter2.offsetWidth,q=this.$PagesFriendInviter2.offsetHeight,r=this.$PagesFriendInviter3.parentNode.offsetHeight;c('DOM').remove(this.$PagesFriendInviter3);var s=c('DOM').create('div',{className:"_5tee"});c('Style').set(s,'height',r+'px');this.$PagesFriendInviter11=new (c('ReactComponentRenderer'))(m,s);this.$PagesFriendInviter11.setProps({width:p,pageID:this.$PagesFriendInviter5,invitees:this.$PagesFriendInviter6,likedFriends:this.$PagesFriendInviter8,invitedFriends:n.alreadyInvitedFriends,onScroll:c('throttle')(this.onScroll,100,this),refLocation:this.$PagesFriendInviter9});c('DOM').replace(this.$PagesFriendInviter2,s);this.$PagesFriendInviter2=s;this.fetchMoreSuggestions(function(){this.$PagesFriendInviter11.component.getScrollableArea().setScrollTop(q);}.bind(this));};n.prototype.initTypeaheadSubscriptions=function(){'use strict';if(this.$PagesFriendInviter1===null)return;this.$PagesFriendInviter1.subscribe('render',function(o,p){c('CSS').hide(this.$PagesFriendInviter2);}.bind(this));this.$PagesFriendInviter1.subscribe('reset',function(){c('CSS').show(this.$PagesFriendInviter2);if(this.$PagesFriendInviter11){var o=this.$PagesFriendInviter11.component.getScrollableArea();o.scrollToTop(false);o.poke();}}.bind(this));this.$PagesFriendInviter1.getView().subscribe('invite',function(o,p){this.inform('invite',p);}.bind(this));};n.prototype.fetchMoreSuggestions=function(o){'use strict';var p=50,q=new (c('URI'))('/ajax/pages/invite/suggestions/');new (c('AsyncRequest'))(q).setMethod('GET').setReadOnly(true).setData({pageID:this.$PagesFriendInviter4.pageID,offset:this.$PagesFriendInviter7,limit:p,ref:this.$PagesFriendInviter9}).setHandler(this.processResponse.bind(this)).setFinallyHandler(function(){this.$PagesFriendInviter12=false;o&&o();}.bind(this)).send();this.$PagesFriendInviter7+=p;this.$PagesFriendInviter12=true;};n.prototype.processResponse=function(o){'use strict';var p=o.payload,q=p&&p.invitees;if(q&&q.length){var r;(r=this.$PagesFriendInviter6).push.apply(r,q);this.$PagesFriendInviter11.setProps({invitees:this.$PagesFriendInviter6});}else{this.onScroll=c('emptyFunction');this.$PagesFriendInviter11.setProps({loading:false});}};n.prototype.onScroll=function(){'use strict';if(this.$PagesFriendInviter12)return;if(this.$PagesFriendInviter11.component.getScrollableArea().isScrolledToBottom()){this.$PagesFriendInviter11.setProps({loading:true});this.fetchMoreSuggestions();}};n.prototype.markAsInvited=function(o,p){'use strict';n.alreadyInvitedFriends.push(Number(p.id));};n.renderSuggestions=function(o,p,q,r,s,t){'use strict';var u=c('React').createElement(c('PagesFriendInviterSuggestions.react'),{pageID:p,invitees:q,likedFriends:r,invitedFriends:s,refLocation:t});c('ReactDOM').render(u,o);};f.exports=n;}),null);
__d('PagesFriendInviterTypeahead',['TypeaheadCore'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('TypeaheadCore'));i=h&&h.prototype;j.prototype.initToggle=function(){'use strict';this.view.subscribe('render',this.view.show.bind(this.view));this.view.subscribe('reset',this.view.hide.bind(this.view));this.subscribe('blur',this.reset.bind(this));};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('PagesFriendInviterTypeaheadView',['PagesFriendInviterSuggestions.react','PagesFriendInviter','ScrollableArea.react','React','ReactComponentRenderer','Style','TypeaheadView'],(function a(b,c,d,e,f,g){var h,i,j,k;h=babelHelpers.inherits(l,c('React').Component);i=h&&h.prototype;function l(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=i.constructor).call.apply(n,[this].concat(q)),this.scrollToTop=function(){var s=this.refs.scrollArea.getArea();s.scrollToTop(false);s.poke();}.bind(this),o;}l.prototype.render=function(){'use strict';return c('React').createElement(c('ScrollableArea.react'),{width:this.props.width,shadow:false,ref:'scrollArea'},c('React').createElement(c('PagesFriendInviterSuggestions.react'),{pageID:this.props.pageID,invitees:this.props.invitees,likedFriends:this.props.likedFriends,invitedFriends:c('PagesFriendInviter').alreadyInvitedFriends,refLocation:this.props.refLocation}));};j=babelHelpers.inherits(m,c('TypeaheadView'));k=j&&j.prototype;m.prototype.render=function(n,o){'use strict';this.value=n;var p={results:o,value:n};this.inform('beforeRender',p);o=p.results;this.results=o;var q=o.map(function(s){return {id:s.uid,name:s.text,photo:s.photo};});if(!this.$PagesFriendInviterTypeaheadView1){this.$PagesFriendInviterTypeaheadView1=new (c('ReactComponentRenderer'))(l,this.element);this.$PagesFriendInviterTypeaheadView1.setProps({width:this.element.parentNode.offsetWidth,pageID:this.pageID,likedFriends:this.likedFriends,invitedFriends:this.invitedFriends,invitees:q,onInvite:function(s){this.inform('invite',s);}.bind(this),refLocation:this.refLocation});}else this.$PagesFriendInviterTypeaheadView1.setProps({invitees:q});var r=this.element.parentNode.offsetHeight;c('Style').set(this.element,'height',r+'px');this.inform('render',o);this.$PagesFriendInviterTypeaheadView1.component.scrollToTop();};m.prototype.reset=function(n){'use strict';if(!n)this.disableAutoSelect=false;if(this.$PagesFriendInviterTypeaheadView1)this.$PagesFriendInviterTypeaheadView1.setProps({invitees:[]});this.index=-1;this.results=[];this.value='';this.inform('reset');return this;};m.prototype.highlight=function(){'use strict';};m.prototype.mouseover=function(){'use strict';};m.prototype.select=function(){'use strict';};function m(){'use strict';j.apply(this,arguments);}f.exports=m;}),null);
__d('SettingsMobileRemoveLink',['AsyncRequest','DOMQuery','Button','Event'],(function a(b,c,d,e,f,g){function h(i,j,k,l,m){'use strict';this.$SettingsMobileRemoveLink1=i;this.$SettingsMobileRemoveLink2=j;this.$SettingsMobileRemoveLink3=k;c('Event').listen(i,'click',function(){j.conditionShow(!j.isShown());});if(k.canDelete)j.subscribe('confirm',this.$SettingsMobileRemoveLink4.bind(this));if(l&&m)c('Event').listen(l,'change',function(n){c('Button').setEnabled(m,n.target.checked);});}h.prototype.getRoot=function(){'use strict';return this.$SettingsMobileRemoveLink1;};h.prototype.getLink=function(){'use strict';return c('DOMQuery').find(this.getRoot(),'a');};h.prototype.$SettingsMobileRemoveLink4=function(){'use strict';this.$SettingsMobileRemoveLink2.hide();new (c('AsyncRequest'))('/ajax/settings/mobile/delete_phone.php').setData({phone_number:this.$SettingsMobileRemoveLink3.phoneNumber,profile_id:this.$SettingsMobileRemoveLink3.profileID,shared:this.$SettingsMobileRemoveLink3.shared}).send();};f.exports=h;}),null);