(function(){window.SocialShareButton={openUrl:function(e,t,o){var a;return null==t&&(t=640),null==o&&(o=480),a="width="+t+",height="+o+",left="+(screen.width/2-t/2)+",top="+(.3*screen.height-o/2)+",menubar=no,status=no,location=no",window.open(e,"popup",a),!1},share:function(e){var t,o,a,r,n,i,c,l,s,u,p,h,d;switch(l=$(e).data("site"),o=$(e).data("appkey")||"",t=$(e).parent(),s=encodeURIComponent($(e).data(l+"-title")||t.data("title")||""),c=encodeURIComponent(t.data("img")||""),p=encodeURIComponent(t.data("url")||""),h=encodeURIComponent(t.data("via")||""),a=encodeURIComponent(t.data("desc")||" "),"function"==typeof(r=window[window.GoogleAnalyticsObject||"ga"])&&r("send","event","Social Share Button","click",l),0===p.length&&(p=encodeURIComponent(location.href)),l){case"email":location.href="mailto:?to=&subject="+s+"&body="+p;break;case"weibo":SocialShareButton.openUrl("http://service.weibo.com/share/share.php?url="+p+"&type=3&pic="+c+"&title="+s+"&appkey="+o,620,370);break;case"twitter":i=encodeURIComponent($(e).data(l+"-hashtags")||t.data("hashtags")||""),d="",h.length>0&&(d="&via="+h),SocialShareButton.openUrl("https://twitter.com/intent/tweet?url="+p+"&text="+s+"&hashtags="+i+d,650,300);break;case"douban":SocialShareButton.openUrl("http://shuo.douban.com/!service/share?href="+p+"&name="+s+"&image="+c+"&sel="+a,770,470);break;case"facebook":SocialShareButton.openUrl("http://www.facebook.com/sharer/sharer.php?u="+p+"&display=popup&quote="+a,555,400);break;case"qq":SocialShareButton.openUrl("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+p+"&title="+s+"&pics="+c+"&summary="+a+"&site="+o);break;case"google_plus":SocialShareButton.openUrl("https://plus.google.com/share?url="+p);break;case"google_bookmark":SocialShareButton.openUrl("https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk="+p+"&title="+s);break;case"delicious":SocialShareButton.openUrl("https://del.icio.us/save?url="+p+"&title="+s+"&jump=yes&pic="+c);break;case"pinterest":SocialShareButton.openUrl("http://www.pinterest.com/pin/create/button/?url="+p+"&media="+c+"&description="+s);break;case"linkedin":SocialShareButton.openUrl("https://www.linkedin.com/shareArticle?mini=true&url="+p+"&title="+s+"&summary="+a);break;case"xing":SocialShareButton.openUrl("https://www.xing.com/spi/shares/new?url="+p);break;case"vkontakte":SocialShareButton.openUrl("http://vk.com/share.php?url="+p+"&title="+s+"&image="+c);break;case"odnoklassniki":SocialShareButton.openUrl("https://connect.ok.ru/offer?url="+p+"&title="+s+"&description="+a+"&imageUrl="+c);break;case"wechat":if(!window.SocialShareWeChatButton)throw new Error("You should require social-share-button/wechat to your application.js");window.SocialShareWeChatButton.qrcode({url:decodeURIComponent(p),header:$(e).attr("title"),footer:$(e).data("wechat-footer")});break;case"tumblr":n=function(t){var o;if(o=$(e).attr("data-"+t))return encodeURIComponent(o)},u=function(){var e,t,o,a;return t=n("type")||"link",e=function(){switch(t){case"text":return"title="+(s=n("title")||s);case"photo":return s=n("caption")||s,a=n("source")||c,"caption="+s+"&source="+a;case"quote":return o=n("quote")||s,a=n("source")||"","quote="+o+"&source="+a;default:return s=n("title")||s,p=n("url")||p,"name="+s+"&url="+p}}(),"/"+t+"?"+e},SocialShareButton.openUrl("http://www.tumblr.com/share"+u());break;case"reddit":SocialShareButton.openUrl("http://www.reddit.com/submit?url="+p+"&newwindow=1",555,400);break;case"hacker_news":SocialShareButton.openUrl("http://news.ycombinator.com/submitlink?u="+p+"&t="+s,770,500);break;case"telegram":SocialShareButton.openUrl("https://telegram.me/share/url?text="+s+"&url="+p)}return!1}}}).call(this);