"use strict";!function(){var e=window.DecidimAdmin,n=e.AutoLabelByPositionComponent,i=e.AutoButtonsByPositionComponent,t=e.createDynamicFields,o=e.createSortList,r=".meeting-services",d=".meeting-service",c=new n({listSelector:".meeting-service:not(.hidden)",labelSelector:".card-title span:first",onPositionComputed:function(e,n){$(e).find("input[name$=\\[position\\]]").val(n)}}),l=new i({listSelector:".meeting-service:not(.hidden)",hideOnFirstSelector:".move-up-service",hideOnLastSelector:".move-down-service"}),s=function(){o(".meeting-services-list:not(.published)",{handle:".service-divider",placeholder:'<div style="border-style: dashed; border-color: #000"></div>',forcePlaceholderSize:!0,onSortUpdate:function(){c.run()}})},u=function(e){"true"===e.find("input[name$=\\[deleted\\]]").val()&&(e.addClass("hidden"),e.hide())};t({placeholderId:"meeting-service-id",wrapperSelector:r,containerSelector:".meeting-services-list",fieldSelector:d,addFieldButtonSelector:".add-service",removeFieldButtonSelector:".remove-service",moveUpFieldButtonSelector:".move-up-service",moveDownFieldButtonSelector:".move-down-service",onAddField:function(){s(),c.run(),l.run()},onRemoveField:function(){c.run(),l.run()},onMoveUpField:function(){c.run(),l.run()},onMoveDownField:function(){c.run(),l.run()}}),s(),$(d).each(function(e,n){var i=$(n);u(i)}),c.run(),l.run();var a,v,m,p=$(".edit_meeting, .new_meeting, .copy_meetings");p.length>0&&(a=p.find("#private_meeting"),v=p.find("#transparent"),m=function(){var e=a.find("input[type='checkbox']").prop("checked");v.find("input[type='checkbox']").attr("disabled","disabled"),e&&v.find("input[type='checkbox']").attr("disabled",!e)},a.on("change",m),m())}();