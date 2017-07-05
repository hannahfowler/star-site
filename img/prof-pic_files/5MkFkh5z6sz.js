if (self.CavalryLogger) { CavalryLogger.start_js(["OS4sI"]); }

__d('ReactComposerLifeEventActionTypes',[],(function a(b,c,d,e,f,g){f.exports={ADD_LIFE_EVENT_TYPE_DETAILS:'ADD_LIFE_EVENT_TYPE_DETAILS',DESELECT_LIFE_EVENT_TYPE:'DESELECT_LIFE_EVENT_TYPE',SELECT_CATEGORY:'SELECT_CATEGORY',SELECT_LIFE_EVENT_TYPE:'SELECT_LIFE_EVENT_TYPE',SET_CONFIG:'SET_CONFIG',SET_LIFE_EVENT_FIELD_VALUE:'SET_LIFE_EVENT_FIELD_VALUE',SET_LIFE_EVENT_TYPEAHEAD_TEXT:'SET_LIFE_EVENT_TYPEAHEAD_TEXT',SET_SELECTED_LIFE_EVENT_ICON_ID:'SET_SELECTED_LIFE_EVENT_ICON_ID',SET_SELECTED_LIFE_EVENT_STORY:'SET_SELECTED_LIFE_EVENT_STORY',SET_SELECTED_LIFE_EVENT_TITLE:'SET_SELECTED_LIFE_EVENT_TITLE'};}),null);
__d('ReactComposerLifeEventActions',['ReactComposerDispatcher','ReactComposerLifeEventActionTypes','ReactComposerLifeEventStore'],(function a(b,c,d,e,f,g){c('ReactComposerLifeEventStore');h.prototype.setConfig=function(i,j){'use strict';var k=c('ReactComposerLifeEventActionTypes').SET_CONFIG;c('ReactComposerDispatcher').dispatch({composerID:i,config:j,type:k});};h.prototype.selectLifeEventType=function(i,j,k){'use strict';var l=c('ReactComposerLifeEventActionTypes').SELECT_LIFE_EVENT_TYPE;c('ReactComposerDispatcher').dispatch({composerID:i,lifeEventType:k,profileID:j,type:l});};h.prototype.deselectLifeEventType=function(i){'use strict';var j=c('ReactComposerLifeEventActionTypes').DESELECT_LIFE_EVENT_TYPE;c('ReactComposerDispatcher').dispatch({composerID:i,type:j});};h.prototype.setSelectedCategoryIndex=function(i,j){'use strict';var k=c('ReactComposerLifeEventActionTypes').SELECT_CATEGORY;c('ReactComposerDispatcher').dispatch({composerID:i,index:j,type:k});};h.prototype.setLifeEventTypeaheadText=function(i,j){'use strict';var k=c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_TYPEAHEAD_TEXT;c('ReactComposerDispatcher').dispatch({composerID:i,text:j,type:k});};h.prototype.setSelectedLifeEventTitle=function(i,j){'use strict';var k=c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_TITLE;c('ReactComposerDispatcher').dispatch({composerID:i,title:j,type:k});};h.prototype.setSelectedLifeEventStory=function(i,j){'use strict';var k=c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_STORY;c('ReactComposerDispatcher').dispatch({composerID:i,story:j,type:k});};h.prototype.setSelectedLifeEventIconID=function(i,j){'use strict';var k=c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_ICON_ID;c('ReactComposerDispatcher').dispatch({composerID:i,iconID:j,type:k});};h.prototype.setLifeEventFieldValue=function(i,j,k){'use strict';var l=c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_FIELD_VALUE;c('ReactComposerDispatcher').dispatch({composerID:i,fieldID:j,fieldValue:k,type:l});};h.prototype.addLifeEventTypeDetails=function(i,j,k){'use strict';var l=c('ReactComposerLifeEventActionTypes').ADD_LIFE_EVENT_TYPE_DETAILS;c('ReactComposerDispatcher').dispatch({composerID:i,details:k,lifeEventType:j,type:l});};function h(){'use strict';}f.exports=new h();}),null);
__d("XLifeEventAsyncDetailsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/life_event\/composer\/async_details\/",{life_event_type:{type:"Enum",required:true,enumType:0}});}),null);
__d('ReactComposerLifeEventStore',['invariant','AsyncDialog','AsyncRequest','Bootloader','ReactComposerLifeEventActions','ReactComposerLifeEventActionTypes','ReactComposerLifeEventConstants','ReactComposerStoreBase','XLifeEventAsyncDetailsController','flattenArray'],(function a(b,c,d,e,f,g,h){var i,j;function k(n){return n.filter(function(o){return c('ReactComposerLifeEventConstants').SUGGESTED_LIFE_EVENT_TYPES.indexOf(o.id)>=0;});}function l(n){var o=[];n.forEach(function(p){c('flattenArray')(p.life_events).forEach(function(q){o.push(q);});});return o;}i=babelHelpers.inherits(m,c('ReactComposerStoreBase'));j=i&&i.prototype;function m(){'use strict';var n;j.constructor.call(this,function(){return {allLifeEventTypes:[],categories:[],hasUnsavedData:false,iconsMap:{},lifeEventTypeaheadText:'',lifeEventTypeDetails:{},selectedCategoryIndex:undefined,selectedLifeEvent:{},suggestedLifeEventTypes:[]};},function(o){switch(o.type){case c('ReactComposerLifeEventActionTypes').SET_CONFIG:n&&n.$ReactComposerLifeEventStore1(o);break;case c('ReactComposerLifeEventActionTypes').SELECT_LIFE_EVENT_TYPE:n&&n.$ReactComposerLifeEventStore2(o);break;case c('ReactComposerLifeEventActionTypes').DESELECT_LIFE_EVENT_TYPE:n&&n.$ReactComposerLifeEventStore3(o);break;case c('ReactComposerLifeEventActionTypes').ADD_LIFE_EVENT_TYPE_DETAILS:n&&n.$ReactComposerLifeEventStore4(o);break;case c('ReactComposerLifeEventActionTypes').SELECT_CATEGORY:n&&n.$ReactComposerLifeEventStore5(o);break;case c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_ICON_ID:n&&n.$ReactComposerLifeEventStore6(o);break;case c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_STORY:n&&n.$ReactComposerLifeEventStore7(o);break;case c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_TITLE:n&&n.$ReactComposerLifeEventStore8(o);break;case c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_TYPEAHEAD_TEXT:n&&n.$ReactComposerLifeEventStore9(o);break;case c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_FIELD_VALUE:n&&n.$ReactComposerLifeEventStore10(o);break;}});n=this;}m.prototype.getCategories=function(n){'use strict';return this.getComposerData(n).categories;};m.prototype.getAllLifeEventTypes=function(n){'use strict';return this.getComposerData(n).allLifeEventTypes;};m.prototype.getSuggestedLifeEventTypes=function(n){'use strict';return this.getComposerData(n).suggestedLifeEventTypes;};m.prototype.getOtherID=function(n){'use strict';return this.getComposerData(n).otherID;};m.prototype.getSelectedLifeEventType=function(n){'use strict';return this.getComposerData(n).selectedLifeEvent.type;};m.prototype.getSelectedLifeEventFields=function(n){'use strict';return this.getComposerData(n).selectedLifeEvent.fields;};m.prototype.getSelectedCategoryIndex=function(n){'use strict';return this.getComposerData(n).selectedCategoryIndex;};m.prototype.getSelectedLifeEventDetails=function(n){'use strict';var o=this.getComposerData(n);return Object.assign({},o.selectedLifeEvent);};m.prototype.getIconsMap=function(n){'use strict';var o=this.getComposerData(n);return Object.assign({},o.iconsMap);};m.prototype.getSelectedLifeEventIconID=function(n){'use strict';var o=this.getComposerData(n);return o.selectedLifeEvent.iconID;};m.prototype.getSelectedLifeEventStory=function(n){'use strict';return this.getComposerData(n).selectedLifeEvent.story;};m.prototype.getSelectedLifeEventTitle=function(n){'use strict';return this.getComposerData(n).selectedLifeEvent.title;};m.prototype.getLifeEventTypeaheadText=function(n){'use strict';return this.getComposerData(n).lifeEventTypeaheadText;};m.prototype.isWaitingForLifeEventDetails=function(n){'use strict';var o=this.getComposerData(n);return o.selectedLifeEvent.type&&!o.lifeEventTypeDetails[o.selectedLifeEvent.type];};m.prototype.hasUnsavedData=function(n){'use strict';var o=this.getComposerData(n);return o.selectedLifeEvent.title.length>0&&o.selectedLifeEvent.story.length>0&&o.hasUnsavedData;};m.prototype.$ReactComposerLifeEventStore2=function(n){'use strict';var o=this.getComposerData(n.composerID);if(!o.isActive){o.isActive=true;c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges"],function(q){return q.addCustomCheck(n.composerID,function(){return this.hasUnsavedData(n.composerID);}.bind(this));}.bind(this),'ReactComposerLifeEventStore');}var p=c('ReactComposerLifeEventConstants').EDIT_WITH_MODAL_SPECIAL_CASES.indexOf(n.lifeEventType)>=0;if(p){this.$ReactComposerLifeEventStore11(n.composerID,n.profileID,n.lifeEventType);}else{o.selectedLifeEvent={type:n.lifeEventType};if(o.lifeEventTypeDetails[n.lifeEventType]===undefined){this.$ReactComposerLifeEventStore12(n.composerID,n.lifeEventType);}else this.$ReactComposerLifeEventStore13(o);}this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore5=function(n){'use strict';var o=this.getComposerData(n.composerID);o.selectedCategoryIndex=n.index;this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore6=function(n){'use strict';var o=this.getComposerData(n.composerID);o.selectedLifeEvent.iconID=n.iconID;o.hasUnsavedData=true;this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore7=function(n){'use strict';var o=this.getComposerData(n.composerID);o.selectedLifeEvent.story=n.story;o.hasUnsavedData=true;this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore8=function(n){'use strict';var o=this.getComposerData(n.composerID);o.selectedLifeEvent.title=n.title;o.hasUnsavedData=true;this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore3=function(n){'use strict';var o=this.getComposerData(n.composerID);o.lifeEventTypeaheadText='';o.selectedLifeEvent={};this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore9=function(n){'use strict';var o=this.getComposerData(n.composerID);o.lifeEventTypeaheadText=n.text;this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore10=function(n){'use strict';var o=this.getComposerData(n.composerID);o.selectedLifeEvent.fields[n.fieldID]=n.fieldValue;o.hasUnsavedData=true;this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore4=function(n){'use strict';var o=this.getComposerData(n.composerID);o.lifeEventTypeDetails[n.lifeEventType]=n.details;this.$ReactComposerLifeEventStore13(o);this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore1=function(n){'use strict';var o=this.getComposerData(n.composerID),p=n.config.categories,q=c('ReactComposerLifeEventConstants').ICONS_MAP,r=n.config.otherID;p!==null&&p!==undefined&&q!==null&&q!==undefined&&r!==null&&r!==undefined||h(0);var s=l(p);s.forEach(function(t){return t.icon=q[t.iconID];});o.iconsMap=q;o.categories=p;o.allLifeEventTypes=s;o.suggestedLifeEventTypes=k(s);o.otherID=n.config.otherID;this.emitChange(n.composerID);};m.prototype.$ReactComposerLifeEventStore13=function(n){'use strict';var o=n.selectedLifeEvent.type,p=n.lifeEventTypeDetails[o],q=n.otherID===o;n.selectedLifeEvent.title=q?n.lifeEventTypeaheadText:p.description;n.selectedLifeEvent.story='';n.selectedLifeEvent.iconID=p.iconID;n.selectedLifeEvent.requiredFields=p.requiredFields;var r={};Object.keys(p.requiredFields).forEach(function(s){var t=p.requiredFields[s];t.options=t.options.filter(function(u){return typeof u.value==='number';});if(t.category===c('ReactComposerLifeEventConstants').FIELD_CATEGORIES.DATA_FIELD_BACKED)r[s]=t.options[0].value;});n.selectedLifeEvent.fields=r;};m.prototype.$ReactComposerLifeEventStore12=function(n,o){'use strict';var p=c('XLifeEventAsyncDetailsController').getURIBuilder().setEnum('life_event_type',o).getURI();new (c('AsyncRequest'))(p).setHandler(function(q){if(q.error)return;c('ReactComposerLifeEventActions').addLifeEventTypeDetails(n,o,q.payload);}).send();};m.prototype.$ReactComposerLifeEventStore11=function(n,o,p){'use strict';var q=c('ReactComposerLifeEventConstants').MLE_MODAL_CONTROLLER_URI,r=new (c('AsyncRequest'))(q).setData({composer_id:n,profile_id:o,surface:'composer',mle_type:p});c('AsyncDialog').send(r);};f.exports=new m();}),null);
__d('ReactComposerLifeEventStrings',['fbt'],(function a(b,c,d,e,f,g,h){var i={ATTACHMENT_SELECTOR_TEXT:h._("Life Event"),ICON_PICKER_CLOSE_BUTTON:h._("Close"),LIFE_EVENT_TYPE_TYPEAHEAD_PLACEHOLDER:h._("Search or type a title"),STORY_INPUT_PLACEHOLDER:h._("Add Story (optional)"),TITLE_INPUT_PLACEHOLDER:h._("Add Title")};f.exports=i;}),null);
__d('ReactComposerLifeEventAttachmentSelector.react',['ix','React','ReactComponentWithPureRenderMixin','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLifeEventStrings','ReactComposerLoggingName'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=c('React').createClass({displayName:'ReactComposerLifeEventAttachmentSelector',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{label:i.string},getDefaultProps:function k(){return {label:c('ReactComposerLifeEventStrings').ATTACHMENT_SELECTOR_TEXT};},render:function k(){return c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),{attachmentID:c('ReactComposerAttachmentType').LIFE_EVENT,icon:h("40538"),label:this.props.label,loggingName:c('ReactComposerLoggingName').MLE_TAB_SELECTOR});}});f.exports=j;}),null);
__d("XReactComposerLifeEventAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/react_composer\/life_event\/bootstrap\/",{composer_id:{type:"String",required:true}});}),null);
__d('ReactComposerLifeEventLazyAttachment.react',['Bootloader','React','ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','XReactComposerLifeEventAttachmentBootstrapController'],(function a(b,c,d,e,f,g){var h=c('React').createClass({displayName:'ReactComposerLifeEventLazyAttachment',mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],statics:{attachmentID:c('ReactComposerAttachmentType').LIFE_EVENT},bootload:function i(j){c('Bootloader').loadModules(["ReactComposerLifeEventAttachmentContainer.react"],j,'ReactComposerLifeEventLazyAttachment.react');},getBootstrapURI:function i(){return c('XReactComposerLifeEventAttachmentBootstrapController').getURIBuilder().setString('composer_id',this.context.composerID).getURI();}});f.exports=h;}),null);
__d('ReactComposerMLEAttachmentSelector.react',['fbt','ix','React','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;m.prototype.render=function(){'use strict';return c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),{'data-testid':'mle-attachment-selector',attachmentID:c('ReactComposerAttachmentType').MLE,label:this.props.label,icon:i("40538"),loggingName:c('ReactComposerLoggingName').MLE_TAB_SELECTOR});};function m(){'use strict';j.apply(this,arguments);}m.propTypes={label:l.node};m.defaultProps={label:h._("Life Event")};f.exports=m;}),null);
__d('ReactComposerQAndAAttachmentSelector.react',['fbt','ix','React','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;m.prototype.render=function(){'use strict';return c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),{attachmentID:c('ReactComposerAttachmentType').QANDA,label:this.props.label,icon:i("40547"),loggingName:c('ReactComposerLoggingName').QANDA_TAB_SELECTOR});};function m(){'use strict';j.apply(this,arguments);}m.propTypes={label:l.node};m.defaultProps={label:h._("Start a Q&A")};f.exports=m;}),null);
__d("XReactComposerRedEnvelopeV2AttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/react_composer\/redenv\/v2\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});}),null);
__d('ReactComposerRedEnvelopeV2LazyAttachment.react',['ReactComposerAttachmentType','ReactComposerBootloaderPropTypes','ReactComposerLoadableAttachmentBodyMixin','ActorURI','Bootloader','React','XReactComposerRedEnvelopeV2AttachmentBootstrapController'],(function a(b,c,d,e,f,g){var h=c('React').createClass({displayName:'ReactComposerRedEnvelopeV2LazyAttachment',mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],statics:{attachmentID:c('ReactComposerAttachmentType').RED_ENVELOPE},propTypes:{bootloader:c('ReactComposerBootloaderPropTypes')},bootload:function i(j){if(this.props.bootloader&&this.props.bootloader.redEnvelopeAttachment){this.props.bootloader.redEnvelopeAttachment(j);}else c('Bootloader').loadModules(["ReactComposerRedEnvelopeV2AttachmentContainer.react"],j,'ReactComposerRedEnvelopeV2LazyAttachment.react');},getBootstrapURI:function i(){var j=c('XReactComposerRedEnvelopeV2AttachmentBootstrapController').getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setInt('target_id',this.context.targetID).getURI();return c('ActorURI').create(j,this.context.actorID);}});f.exports=h;}),null);
__d('ReactComposerTimelineBootloader',['Bootloader'],(function a(b,c,d,e,f,g){'use strict';var h={statusAttachment:function i(j){c('Bootloader').loadModules(["ReactComposerStatusAttachmentContainer.react","ReactComposerTimelinePostButtonContainer.react"],j,'ReactComposerTimelineBootloader');},mediaAttachment:function i(j){c('Bootloader').loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerTimelineMediaPostButtonContainer.react"],j,'ReactComposerTimelineBootloader');},qandaAttachment:function i(j){c('Bootloader').loadModules(["ReactComposerQAndAAttachmentContainer.react","ReactComposerTimelineMediaPostButtonContainer.react"],j,'ReactComposerTimelineBootloader');},redEnvelopeAttachment:function i(j){c('Bootloader').loadModules(["ReactComposerRedEnvelopeV2AttachmentContainer.react","ReactComposerTimelineMediaPostButtonContainer.react"],j,'ReactComposerTimelineBootloader');}};f.exports=h;}),null);
__d('ReactComposerTimelineHeader.react',['React','ReactComponentWithPureRenderMixin','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerHeaderProps','ReactComposerHeaderType','ReactComposerLazyHeader.react','ReactComposerLifeEventStore','ReactComposerPropsAndStoreBasedStateMixin'],(function a(b,c,d,e,f,g){var h=c('React').createClass({displayName:'ReactComposerTimelineHeader',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerLifeEventStore'),c('ReactComposerAttachmentStore'))],propTypes:c('ReactComposerHeaderProps').propTypes,getDefaultProps:c('ReactComposerHeaderProps').getDefaultProps,statics:{calculateState:function i(j,k){var l=c('ReactComposerLifeEventStore').isWaitingForLifeEventDetails(j);return {forceThrobber:l,selectedAttachmentID:c('ReactComposerAttachmentStore').getSelectedAttachmentID(j)};}},_getComposerHeaderType:function i(){var j=this.state.selectedAttachmentID===c('ReactComposerAttachmentType').AUDIENCE_SELECTOR;return !j?c('ReactComposerHeaderType').DEFAULT:c('ReactComposerHeaderType').SHARESHEET;},render:function i(){return c('React').createElement(c('ReactComposerLazyHeader.react'),babelHelpers['extends']({headerType:this._getComposerHeaderType()},this.props,this.state));}});f.exports=h;}),null);
__d('ReactTimelineComposer.react',['cx','fbt','LayerHideOnBlur','LayerHideOnEscape','LayerHideOnTransition','React','ReactComposer.react','ReactComposerAttachmentType','ReactComposerBodyContainer.react','ReactComposerConfig','ReactComposerContextConfig','ReactComposerContextProviderMixin','ReactComposerFocusInit','ReactComposerLifeEventAttachmentSelector.react','ReactComposerLifeEventLazyAttachment.react','ReactComposerLiveVideoAttachmentSelector.react','ReactComposerLiveVideoLazyAttachment.react','ReactComposerMediaAttachmentSelector.react','ReactComposerMediaLazyAttachment.react','ReactComposerMLEAttachmentSelector.react','ReactComposerMLELazyAttachment.react','ReactComposerQAndAAttachmentSelector.react','ReactComposerQAndALazyAttachment.react','ReactComposerStatusAttachmentSelector.react','ReactComposerStatusLazyAttachment.react','ReactComposerTimelineAudienceSelectorLazyAttachmentGatedModule','ReactComposerTimelineBootloader','ReactComposerTimelineHeader.react','ReactComposerRedEnvelopeV2LazyAttachment.react','RedEnvelopeCreateAttachmentSelector','TimelineComposer','XUIAmbientNUX.react','$','coalesce'],(function a(b,c,d,e,f,g,h,i){var j=c('ReactComposerTimelineAudienceSelectorLazyAttachmentGatedModule').module,k=c('RedEnvelopeCreateAttachmentSelector').module,l=c('React').createClass({displayName:'ReactTimelineComposer',mixins:[c('ReactComposerContextProviderMixin')],propTypes:{contextConfig:c('ReactComposerContextConfig').isRequired,config:c('ReactComposerConfig').isRequired},stateTypes:{showLiveVideoNux:Boolean},getInitialState:function m(){return {showLiveVideoNux:this._shouldRenderLiveVideoNux()};},componentDidMount:function m(){c('TimelineComposer').init(this.props.contextConfig.composerID);if(this.props.contextConfig.gks.shouldBlurOnFocus)c('ReactComposerFocusInit').handler(c('$')('timeline_react_composer_container'),this.props.contextConfig.composerID,this.props.contextConfig.actorID,this.props.contextConfig.gks,this.props.contextConfig.jsModules.composerFocus,true);},_shouldRenderLiveVideoNux:function m(){var n=this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').LIVE_VIDEO];return n&&n.enabled&&n.show_nux;},_renderLiveVideoNux:function m(){if(!this.state.showLiveVideoNux)return null;return c('React').createElement(c('XUIAmbientNUX.react'),{behaviors:{LayerHideOnBlur:c('LayerHideOnBlur'),LayerHideOnEscape:c('LayerHideOnEscape'),LayerHideOnTransition:c('LayerHideOnTransition')},contextRef:function(){return this.refs.liveVideoSelector;}.bind(this),onCloseButtonClick:function(){this.setState({showLiveVideoNux:false});}.bind(this),position:'above',shown:this.state.showLiveVideoNux,width:'auto'},i._("New! Create a live video from your browser"));},render:function m(){var n=this._getAdditionalAttachmentComponents(),o=n[0],p=n[1];return c('React').createElement(c('ReactComposer.react'),{className:"_s7h",hideBorders:true,loggingConfig:this.props.config.loggingConfig,ref:'root'},c('React').createElement(c('ReactComposerTimelineHeader.react'),{background:'light-wash',noHorizontalMargin:true,showDelimiter:false},c('React').createElement(c('ReactComposerStatusAttachmentSelector.react'),{label:this.props.config.targetData.viewerIsTarget?i._("Status"):i._("Post")}),c('React').createElement(c('ReactComposerMediaAttachmentSelector.react'),null),o,this._renderLiveVideoNux()),c('React').createElement(c('ReactComposerBodyContainer.react'),{expanded:this.props.config.showExpandedComposer},c('React').createElement(c('ReactComposerStatusLazyAttachment.react'),{config:this.props.config,selected:true,expanded:this.props.config.showExpandedComposer,placeholder:this.props.config.targetData.viewerIsTarget?i._("What's on your mind?"):c('coalesce')(this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS].placeholderText,i._("Write something...")),bootloader:c('ReactComposerTimelineBootloader')}),c('React').createElement(c('ReactComposerMediaLazyAttachment.react'),{config:this.props.config,bootloader:c('ReactComposerTimelineBootloader')}),p));},_getAdditionalAttachmentComponents:function m(){var n=this.props.config.attachmentsConfig,o=[],p=[],q=n[c('ReactComposerAttachmentType').MLE].enabled,r=n[c('ReactComposerAttachmentType').QANDA].enabled,s=this.props.contextConfig.gks.www_react_mle_composer_attachment,t=n[c('ReactComposerAttachmentType').RED_ENVELOPE],u=n[c('ReactComposerAttachmentType').LIVE_VIDEO].enabled,v=n[c('ReactComposerAttachmentType').LIVE_VIDEO].composerDialog;if(u){o.push(c('React').createElement(c('ReactComposerLiveVideoAttachmentSelector.react'),{config:this.props.config,contextConfig:this.props.contextConfig,key:'live_video',ref:'liveVideoSelector',sprouts:false}));p.push(c('React').createElement(c('ReactComposerLiveVideoLazyAttachment.react'),{config:this.props.config,key:'live_video'}));}if(q)if(s){o.push(c('React').createElement(c('ReactComposerLifeEventAttachmentSelector.react'),{key:'life_event'}));p.push(c('React').createElement(c('ReactComposerLifeEventLazyAttachment.react'),{config:this.props.config,key:'life_event'}));}else{o.push(c('React').createElement(c('ReactComposerMLEAttachmentSelector.react'),{key:'mle'}));p.push(c('React').createElement(c('ReactComposerMLELazyAttachment.react'),{key:'mle',config:this.props.config}));}if(t.enabled&&!this.props.config.targetData.viewerIsTarget){var w=i._("Red Envelope");o.push(c('React').createElement(k,{label:w,isDialog:false,longLabel:w,key:'RED_ENVELOPE'}));p.push(c('React').createElement(c('ReactComposerRedEnvelopeV2LazyAttachment.react'),{config:this.props.config,key:'RED_ENVELOPE',bootloader:c('ReactComposerTimelineBootloader')}));}if(r){o.push(c('React').createElement(c('ReactComposerQAndAAttachmentSelector.react'),{key:'qanda',label:i._("Q&A")}));p.push(c('React').createElement(c('ReactComposerQAndALazyAttachment.react'),{key:'qanda',config:this.props.config,bootloader:c('ReactComposerTimelineBootloader')}));}var x=this._renderAudienceSelectorAttachment();if(x)p.push(x);return [o,p];},_renderAudienceSelectorAttachment:function m(){return j?c('React').createElement(j,{key:'audience_selector',config:this.props.config}):null;}});f.exports=l;}),null);